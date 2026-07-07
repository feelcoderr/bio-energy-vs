import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const followerRef = useRef(null);
  const particlesRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position coordinates
  const mouseCoords = useRef({ x: 0, y: 0 });
  const followerCoords = useRef({ x: 0, y: 0 });
  const lastSpawnCoords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Disable on mobile/touch screens
    if (window.innerWidth < 1024) return;

    // Apply cursor-none to body
    document.documentElement.classList.add("cursor-none-layout");
    setIsVisible(true);

    const handleMouseMove = (e) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Calculate distance from last particle spawn
      const dx = e.clientX - lastSpawnCoords.current.x;
      const dy = e.clientY - lastSpawnCoords.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 35) {
        spawnLeafParticle(e.clientX, e.clientY);
        lastSpawnCoords.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseOver = (e) => {
      // Expand cursor on links and buttons
      const target = e.target;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button";

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    // Smooth spring physics loop for the trailing circular follower
    let animationFrameId;
    const updateFollower = () => {
      const ease = 0.16; // Spring ease speed

      const dx = mouseCoords.current.x - followerCoords.current.x;
      const dy = mouseCoords.current.y - followerCoords.current.y;

      followerCoords.current.x += dx * ease;
      followerCoords.current.y += dy * ease;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerCoords.current.x}px, ${followerCoords.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updateFollower);
    };
    updateFollower();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
      document.documentElement.classList.remove("cursor-none-layout");
    };
  }, []);

  const spawnLeafParticle = (x, y) => {
    if (!particlesRef.current) return;

    // Create particle container
    const particle = document.createElement("div");
    particle.className = "leaf-trail-particle";
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // Randomize path drift parameters
    const driftX = (Math.random() - 0.5) * 50; // Swerves left or right by up to 25px
    const driftY = 35 + Math.random() * 45; // Drifts downwards by up to 80px
    const driftRotate = (Math.random() - 0.5) * 240; // Spins randomly

    particle.style.setProperty("--drift-x", `${driftX}px`);
    particle.style.setProperty("--drift-y", `${driftY}px`);
    particle.style.setProperty("--drift-rotate", `${driftRotate}deg`);

    // Sleek solid leaf lens outline
    particle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.5 8.5 6.5 15.5 12 22C17.5 15.5 17.5 8.5 12 2z" />
      </svg>
    `;

    particlesRef.current.appendChild(particle);

    // Garbage collection after animation completes
    setTimeout(() => {
      particle.remove();
    }, 850);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Self-contained CSS injection for custom cursor layouts */}
      <style>{`
        @media (min-width: 1024px) {
          .cursor-none-layout, .cursor-none-layout * {
            cursor: none !important;
          }
        }
        
        .custom-cursor-dot {
          width: 86px;
          height: 86px;
          background-image: url('/images/cursor.png');
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
          transform: translate3d(-50%, -50%, 0);
          will-change: transform;
          transition: width 0.25s ease, height 0.25s ease, transform 0.25s ease;
        }

        .custom-cursor-dot.hovered {
          width: 86px;
          height: 86px;
        }

        .custom-cursor-follower {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid var(--color-surface-tint-35, rgba(76, 108, 84, 0.35));
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9998;
          transform: translate3d(-50%, -50%, 0);
          will-change: transform;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-surface-tint, #4c6c54);
          transition: transform 0.1s ease-out, border-color 0.25s ease, background-color 0.25s ease, width 0.25s ease, height 0.25s ease;
        }

        .custom-cursor-follower .follower-icon {
          width: 20px;
          height: 20px;
          color: var(--color-surface-tint, #4c6c54);
          transition: transform 0.3s ease, width 0.25s ease, height 0.25s ease;
          opacity: 0.8;
        }

        .custom-cursor-follower.hovered {
          width: 34px;
          height: 34px;
          border-color: var(--color-surface-tint, #4c6c54);
          background-color: var(--color-surface-tint-08, rgba(76, 108, 84, 0.08));
        }

        .custom-cursor-follower.hovered .follower-icon {
          transform: rotate(45deg) scale(1.3);
          opacity: 1;
        }

        .leaf-trail-particle {
          position: fixed;
          width: 8px;
          height: 8px;
          pointer-events: none;
          z-index: 9997;
          color: var(--color-surface-tint-40, rgba(76, 108, 84, 0.4));
          transform: translate3d(-50%, -50%, 0);
          animation: leafDriftAnimation 0.85s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
          will-change: transform, opacity;
        }

        @keyframes leafDriftAnimation {
          0% {
            transform: translate3d(-50%, -50%, 0) scale(1) rotate(0deg);
            opacity: 0.6;
          }
          100% {
            transform: translate3d(
              calc(-50% + var(--drift-x)),
              calc(-50% + var(--drift-y)),
              0
            ) scale(0.1) rotate(var(--drift-rotate));
            opacity: 0;
          }
        }
      `}</style>

      {/* Primary tracking custom cursor image pointer */}
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${isHovered ? "hovered" : ""}`}
      />

      {/* Lagging circular follower containing the abstract mini leaf */}
      <div
        ref={followerRef}
        className={`custom-cursor-follower ${isHovered ? "hovered" : ""}`}
      >
        <img src="/images/cursor.png" className="follower-icon" />
      </div>

      {/* Absolute particle spawner registry container */}
      <div
        ref={particlesRef}
        className="fixed inset-0 pointer-events-none z-[9997]"
      />
    </>
  );
}
