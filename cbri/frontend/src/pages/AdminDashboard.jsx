import React, { useState, useEffect } from "react";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDoc
} from "firebase/firestore";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const AdminDashboard = () => {
  const [files, setFiles] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentUserRole, setCurrentUserRole] = useState("");

  // Fetch user role
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setCurrentUserRole(userDoc.data().role); // 'admin' or 'user'
        }
      }
    });

    return () => unsubscribe();
  }, []);

  // Fetch files and users
  useEffect(() => {
    fetchFiles();
    if (currentUserRole === "admin") {
      fetchUsers();
    }
  }, [currentUserRole]);

  const fetchFiles = async () => {
    const snapshot = await getDocs(collection(db, "files"));
    const fileList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setFiles(fileList);
  };

  const fetchUsers = async () => {
    const snapshot = await getDocs(collection(db, "users"));
    const userList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setUsers(userList);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) return;

    try {
      await addDoc(collection(db, "files"), {
        name: selectedFile.name
        // Add metadata or upload to Firebase Storage if needed
      });
      fetchFiles();
    } catch (err) {
      console.error("Error uploading file:", err);
    }
  };

  const handleDeleteFile = async (fileId) => {
    try {
      await deleteDoc(doc(db, "files", fileId));
      fetchFiles();
    } catch (err) {
      console.error("Error deleting file:", err);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteDoc(doc(db, "users", userId));
      fetchUsers();
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🔐 Admin Dashboard</h2>

      {currentUserRole === "admin" && (
        <section>
          <h3>📂 Upload File</h3>
          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <button onClick={handleFileUpload}>Upload</button>
        </section>
      )}

      <section>
        <h3>📁 Uploaded Files</h3>
        <ul>
          {files.map((file) => (
            <li key={file.id}>
              {file.name}
              {currentUserRole === "admin" && (
                <button onClick={() => handleDeleteFile(file.id)}>Delete</button>
              )}
            </li>
          ))}
        </ul>
      </section>

      {currentUserRole === "admin" && (
        <section>
          <h3>👥 Users</h3>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} ({user.email}){" "}
                <button onClick={() => handleDeleteUser(user.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default AdminDashboard;
