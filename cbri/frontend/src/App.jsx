import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Landing from "./pages/Landing";
import OngoingProject from "./pages/OngoingProject";
import CompletedProject from "./pages/CompletedProject";
import UpcomingProject from "./pages/UpcomingProject";
import CollaborativeProjects from "./pages/CollaborativeProjects";
import Publications from "./pages/Research/Publications";
import UserGuides from "./pages/Research/UserGuides";
import CommunityForum from "./pages/Research/CommunityForum";
import Photos from "./pages/Gallery/Photos";
import Videos from "./pages/Gallery/videos";
import Events from "./pages/Gallery/Events";
import Blog from "./pages/Other/Blog";
import Documentation from "./pages/Other/Documentation";
import Webinars from "./pages/Other/Webinars";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./components/auth/Login";
import UploadImage from "./pages/UploadImage";
import UploadVideo from "./pages/UploadVideo";
import LiveDetection from "./pages/LiveDetection";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/ongoing-project" element={<OngoingProject />} />
        <Route path="/completed-project" element={<CompletedProject />} />
        <Route path="/upcoming-project" element={<UpcomingProject />} />
        <Route path="/collaborative-projects" element={<CollaborativeProjects />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/user-guides" element={<UserGuides />} />
        <Route path="/community-forum" element={<CommunityForum />} />
        <Route path="/gallery" element={<Photos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/webinars" element={<Webinars />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/upload-image" element={<UploadImage />} />
        <Route path="/upload-video" element={<UploadVideo />} />
        <Route path="/live-detection" element={<LiveDetection />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
