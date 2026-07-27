import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc, query, orderBy, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const inquiriesCollection = collection(db, "inquiries");

export const createInquiry = async (data) => {
  try {
    const docRef = await addDoc(inquiriesCollection, {
      ...data,
      isRead: false,
      createdAt: serverTimestamp()
    });
    return { id: docRef.id, error: null };
  } catch (error) {
    console.error("Error creating inquiry:", error);
    return { id: null, error: error.message };
  }
};

export const getAllInquiries = async () => {
  try {
    const q = query(inquiriesCollection, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return [];
  }
};

export const markInquiryRead = async (id, isRead) => {
  try {
    const docRef = doc(db, "inquiries", id);
    await updateDoc(docRef, { isRead });
    return { error: null };
  } catch (error) {
    console.error("Error marking inquiry read:", error);
    return { error: error.message };
  }
};

export const deleteInquiry = async (id) => {
  try {
    const docRef = doc(db, "inquiries", id);
    await deleteDoc(docRef);
    return { error: null };
  } catch (error) {
    console.error("Error deleting inquiry:", error);
    return { error: error.message };
  }
};
