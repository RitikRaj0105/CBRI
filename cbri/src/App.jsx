import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from './pages/Login';
import Landing from "./pages/Landing";
import OngoingProject from "./pages/OngoingProject";
import CompletedProject from "./pages/CompletedProject";
import UpcomingProject from "./pages/UpcomingProject";
import CollaborativeProjects from "./pages/CollaborativeProjects";
// Research Pages
import Publications from "./pages/Publications";
import UserGuides from "./pages/UserGuides";
import CommunityForum from "./pages/CommunityForum";
import Gallery from "./pages/Gallery";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        <Route path="/ongoing-project" element={<OngoingProject />} />
        <Route path="/completed-project" element={<CompletedProject />} />
        <Route path="/upcoming-project" element={<UpcomingProject />} />
        <Route path="/collaborative-projects" element={<CollaborativeProjects />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/user-guides" element={<UserGuides />} />
        <Route path="/community-forum" element={<CommunityForum />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer /> {/* <- Footer shows on all pages */}
    </Router>
  );
}

export default App;
