import React from "react";
import "./Blog.css";

const blogs = [
  {
    title: "The Future of Structural Safety: AI in Building Defect Detection",
    author: "Dr. A.K. Sharma",
    date: "April 10, 2025",
    image: "/assets/ai_building_safety.jpg",
    description: `
      As infrastructure grows, so does the need to ensure safety, quality, and longevity. One of the most impactful transformations in recent years is the integration of Artificial Intelligence (AI) into civil engineering. Specifically, AI models like YOLO (You Only Look Once) have revolutionized how we detect structural defects in buildings. Traditionally, structural assessments relied on manual inspection, which was time-consuming and often inaccurate due to human error.

      By incorporating deep learning, AI enables rapid, accurate defect recognition through photos, videos, or real-time camera feeds. These systems can detect cracks, corrosion, vegetation overgrowth, dampness, and more—issues that could compromise the integrity of structures if left unchecked. YOLOv8, a cutting-edge version, has made these detections even faster and more precise.

      CSIR-CBRI's vision aligns with using AI to ensure safety for all. Our hybrid system integrates a YOLOv8 model in the backend with an intuitive frontend for user-friendly interaction. The streamlined platform allows architects, engineers, and administrators to identify risks and plan repairs effectively.

      As we look forward, the synergy between AI and structural engineering will continue to deepen. With real-time monitoring, historical data analysis, and predictive maintenance, AI will not just detect but also prevent structural failures. In essence, AI isn't just helping us see better—it's helping us build smarter.
    `,
  },
  {
    title: "Green Building Innovation at CSIR-CBRI: Toward Sustainable Infrastructure",
    author: "Prof. Sunita Das",
    date: "March 30, 2025",
    image: "/assets/green_building.jpg",
    description: `
      Sustainability has become more than a buzzword—it's a necessity. As global temperatures rise and resources dwindle, building responsibly has never been more critical. CSIR-CBRI is at the forefront of green innovation, developing construction materials, technologies, and strategies that minimize environmental impact.

      Our research focuses on reducing carbon footprints through recycled materials, energy-efficient designs, and renewable energy integration. One recent breakthrough includes the use of AI to optimize the use of natural light in architectural designs, reducing the need for artificial lighting and cooling systems.

      In our labs, scientists are testing smart glass, bio-based bricks, and modular building systems that cut down on waste. Our educational programs also empower engineers to adopt sustainable practices from the ground up.

      The journey toward sustainability is continuous. At CSIR-CBRI, we are committed to advancing this journey—one eco-friendly building at a time. The future is green, and we are proud to lead the way.
    `,
  },
  // Add more blog entries similarly
];

const Blog = () => {
  return (
    <div className="blog-page">
      <h1 className="blog-title">📚 CSIR-CBRI Blog</h1>
      <p className="blog-subtitle">Insights, research, and innovations from our institute</p>

      <div className="blog-container">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p className="blog-meta">By {blog.author} | {blog.date}</p>
              <p className="blog-description">
                {blog.description.slice(0, 300)}...
                <span className="read-more">Read More</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
