// backend/firebase/firestore.js
import { db } from "../../frontend/src/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Add blog post
export const addBlog = async (blogData) => {
  try {
    const docRef = await addDoc(collection(db, "blogs"), blogData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding blog:", error);
  }
};

// Get all blogs
export const fetchBlogs = async () => {
  const blogs = [];
  const snapshot = await getDocs(collection(db, "blogs"));
  snapshot.forEach((doc) => {
    blogs.push({ id: doc.id, ...doc.data() });
  });
  return blogs;
};
