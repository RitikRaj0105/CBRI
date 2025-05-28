import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "./CommunityForum.css";

const forumCategories = ["General Discussion", "Technical Help", "Feature Requests", "Off-Topic"];
const threads = [
  {
    title: "How to integrate API with React?",
    category: "Technical Help",
    author: "John Doe",
    date: "2025-04-01",
    content: "I need help with integrating a third-party API in my React app. Any suggestions?",
    replies: 5,
    upvotes: 12,
  },
  {
    title: "What new features would you like to see?",
    category: "Feature Requests",
    author: "Jane Smith",
    date: "2025-04-05",
    content: "What are some new features you'd like to see in the app?",
    replies: 3,
    upvotes: 8,
  },
];

const CommunityForum = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle search input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle category filter
  const handleCategoryFilter = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Filter threads based on search query and category
  const filteredThreads = threads.filter((thread) => {
    return (
      thread.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "" || thread.category === selectedCategory)
    );
  });

  // Toggle modal for creating a new thread
  const handleCreateThread = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Navbar />
      <div className="forum-container">
        <h2>Community Forum</h2>

        {/* Search & Category Filter */}
        <div className="search-filter">
          <input
            type="text"
            className="search-input"
            placeholder="Search threads..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <select
            className="category-select"
            onChange={handleCategoryFilter}
            value={selectedCategory}
          >
            <option value="">All Categories</option>
            {forumCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Create New Thread */}
        <div className="create-thread">
          <button className="create-thread-btn" onClick={handleCreateThread}>
            Create New Thread
          </button>
        </div>

        {/* Modal for creating new thread */}
        {isModalOpen && (
          <div className="create-thread-modal">
            <h3>Create a New Thread</h3>
            {/* Form for thread creation can go here */}
            <input type="text" placeholder="Thread Title" />
            <textarea placeholder="Thread Content" />
            <button>Create Thread</button>
            <button onClick={handleCreateThread}>Close</button>
          </div>
        )}

        {/* Thread List */}
        <div className="thread-list">
          {filteredThreads.length > 0 ? (
            filteredThreads.map((thread, index) => (
              <div className="thread-card" key={index}>
                <h3>{thread.title}</h3>
                <p className="category-badge">{thread.category}</p>
                <p>{thread.content}</p>
                <div className="thread-meta">
                  <span className="author">Posted by {thread.author}</span>
                  <span className="date">{thread.date}</span>
                  <span className="replies">{thread.replies} replies</span>
                  <div className="upvotes">{thread.upvotes} upvotes</div>
                </div>
                <button className="reply-btn">Reply</button>
              </div>
            ))
          ) : (
            <p>No threads found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CommunityForum;
