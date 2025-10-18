import React, { useEffect, useState } from "react";
import "./blog.css"; 

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:8000/blog/");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-list-container">
      <h2 className="blog-list-title">My Blogs</h2>

      {blogs.length === 0 ? (
        <p className="no-blogs">No blogs yet.</p>
      ) : (
        <div className="blog-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <a
                href={blog.document}
                target="_blank"
                rel="noopener noreferrer"
              >
                {blog.thumbnail && (
                  <div className="blog-image-wrapper">
                    <img
                      src={blog.thumbnail}
                      alt={blog.title}
                      className="blog-image"
                    />
                  </div>
                )}
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
