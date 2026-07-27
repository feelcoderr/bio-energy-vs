import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

const careersCollection = collection(db, "careers");

export const getActiveCareers = async () => {
  try {
    const q = query(
      careersCollection,
      where("status", "==", "active"),
      orderBy("createdAt", "desc"),
    );
    const snapshot = await getDocs(q);
    console.log(
      "Active careers fetched:",
      snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
    );
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching active careers:", error);
    return [];
  }
};

export const getAllCareers = async () => {
  try {
    const q = query(careersCollection, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching all careers:", error);
    return [];
  }
};

export const getCareerById = async (id) => {
  try {
    const docRef = doc(db, "careers", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  } catch (error) {
    console.error("Error fetching career:", error);
    return null;
  }
};

export const createCareer = async (data) => {
  try {
    const docRef = await addDoc(careersCollection, {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return { id: docRef.id, error: null };
  } catch (error) {
    console.error("Error creating career:", error);
    return { id: null, error: error.message };
  }
};

export const updateCareer = async (id, data) => {
  try {
    const docRef = doc(db, "careers", id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
    return { error: null };
  } catch (error) {
    console.error("Error updating career:", error);
    return { error: error.message };
  }
};

export const deleteCareer = async (id) => {
  try {
    const docRef = doc(db, "careers", id);
    await deleteDoc(docRef);
    return { error: null };
  } catch (error) {
    console.error("Error deleting career:", error);
    return { error: error.message };
  }
};
