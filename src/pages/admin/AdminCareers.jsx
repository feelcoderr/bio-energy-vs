import { useState, useEffect } from "react";
import {
  getAllCareers,
  createCareer,
  updateCareer,
  deleteCareer,
} from "../../firebase/services/careerService";

export default function AdminCareers() {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const initialForm = {
    title: "",
    dept: "",
    location: "",
    type: "",
    experience: "",
    salary: "",
    desc: "",
    requirements: "",
    responsibilities: "",
    status: "active",
  };
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    setLoading(true);
    const data = await getAllCareers();
    setCareers(data);
    setLoading(false);
  };

  const handleOpenModal = (career = null) => {
    if (career) {
      setEditingId(career.id);
      setFormData({
        ...career,
        requirements: Array.isArray(career.requirements)
          ? career.requirements.join("\\n")
          : career.requirements || "",
        responsibilities: Array.isArray(career.responsibilities)
          ? career.responsibilities.join("\\n")
          : career.responsibilities || "",
      });
    } else {
      setEditingId(null);
      setFormData(initialForm);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData(initialForm);
    setEditingId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Parse newline-separated text back into arrays for Firestore
    const dataToSave = {
      ...formData,
      requirements: formData.requirements
        .split("\\n")
        .map((s) => s.trim())
        .filter((s) => s),
      responsibilities: formData.responsibilities
        .split("\\n")
        .map((s) => s.trim())
        .filter((s) => s),
    };

    if (editingId) {
      await updateCareer(editingId, dataToSave);
    } else {
      await createCareer(dataToSave);
    }

    handleCloseModal();
    fetchCareers();
  };

  const handleDelete = async (id) => {
    if (
      window.confirm("Are you sure you want to delete this role permanently?")
    ) {
      await deleteCareer(id);
      fetchCareers();
    }
  };

  if (loading && careers.length === 0) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-surface-tint border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl text-primary mb-1">
            Career Listings
          </h1>
          <p className="font-body text-on-surface-variant text-sm">
            Manage open roles on the public website.
          </p>
        </div>
        <button onClick={() => handleOpenModal()} className="btn-primary py-3">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add New Role
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-outline-variant/30 shadow-ambient-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-body">
            <thead className="bg-surface-container-low/50 text-[10px] uppercase tracking-wider text-on-surface-variant">
              <tr>
                <th className="px-6 py-4 font-bold">Role Title</th>
                <th className="px-6 py-4 font-bold">Department</th>
                <th className="px-6 py-4 font-bold">Location & Type</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20 text-sm text-primary">
              {careers.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-8 text-center text-on-surface-variant"
                  >
                    No careers found.
                  </td>
                </tr>
              ) : (
                careers.map((career) => (
                  <tr
                    key={career.id}
                    className="hover:bg-surface-container-lowest/50 transition-colors"
                  >
                    <td className="px-6 py-4 font-semibold">{career.title}</td>
                    <td className="px-6 py-4">{career.dept}</td>
                    <td className="px-6 py-4 text-on-surface-variant">
                      {career.location} <br />{" "}
                      <span className="text-xs">{career.type}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          career.status === "active"
                            ? "bg-surface-tint/10 text-surface-tint"
                            : "bg-outline-variant/30 text-on-surface-variant"
                        }`}
                      >
                        {career.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button
                          onClick={() => handleOpenModal(career)}
                          className="text-on-surface-variant hover:text-surface-tint transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(career.id)}
                          className="text-on-surface-variant hover:text-error transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex  justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
            onClick={handleCloseModal}
          ></div>
          <div className="relative bg-white rounded-[2rem] w-full max-w-3xl min-h-[80vh] overflow-y-auto shadow-ambient-lg flex flex-col">
            <div className="px-8 py-6 border-b border-outline-variant/30 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-md z-10">
              <h2 className="font-heading text-2xl text-primary">
                {editingId ? "Edit Role" : "Add New Role"}
              </h2>
              <button
                onClick={handleCloseModal}
                className="p-2 rounded-full hover:bg-surface-container-low transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full border border-outline-variant/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-surface-tint"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 mb-2">
                    Department *
                  </label>
                  <select
                    name="dept"
                    required
                    value={formData.dept}
                    onChange={handleChange}
                    className="w-full border border-outline-variant/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-surface-tint bg-white"
                  >
                    <option value="" disabled>
                      Select Dept
                    </option>
                    <option value="Engineering">Engineering</option>
                    <option value="Operations">Operations</option>
                    <option value="Corporate">Corporate</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Ahmedabad, India"
                    className="w-full border border-outline-variant/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-surface-tint"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 mb-2">
                    Job Type *
                  </label>
                  <select
                    name="type"
                    required
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full border border-outline-variant/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-surface-tint bg-white"
                  >
                    <option value="" disabled>
                      Select Type
                    </option>
                    <option value="Full-Time (On-site)">
                      Full-Time (On-site)
                    </option>
                    <option value="Full-Time (Hybrid)">
                      Full-Time (Hybrid)
                    </option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 mb-2">
                    Status *
                  </label>
                  <select
                    name="status"
                    required
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full border border-outline-variant/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-surface-tint bg-white"
                  >
                    <option value="active">Active (Visible)</option>
                    <option value="inactive">Inactive (Hidden)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 mb-2">
                  Role Overview *
                </label>
                <textarea
                  name="desc"
                  required
                  rows="3"
                  value={formData.desc}
                  onChange={handleChange}
                  className="w-full border border-outline-variant/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-surface-tint resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 mb-2">
                    Key Responsibilities *
                  </label>
                  <p className="text-[10px] text-on-surface-variant mb-2">
                    Enter each point on a new line.
                  </p>
                  <textarea
                    name="responsibilities"
                    required
                    rows="6"
                    value={formData.responsibilities}
                    onChange={handleChange}
                    className="w-full border border-outline-variant/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-surface-tint resize-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 mb-2">
                    Requirements *
                  </label>
                  <p className="text-[10px] text-on-surface-variant mb-2">
                    Enter each point on a new line.
                  </p>
                  <textarea
                    name="requirements"
                    required
                    rows="6"
                    value={formData.requirements}
                    onChange={handleChange}
                    className="w-full border border-outline-variant/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-surface-tint resize-none"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-6 py-3 text-sm font-semibold text-on-surface-variant hover:bg-surface-container-low rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary py-3 px-8 shadow-none"
                >
                  {editingId ? "Save Changes" : "Create Role"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
