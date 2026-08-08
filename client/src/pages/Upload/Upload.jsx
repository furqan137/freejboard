import React, { useState } from "react";
import "./Upload.css";

const Upload = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: null,
    tags: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.file) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    console.log("Form data submitted:", formData);
    // Placeholder for form submission logic (e.g., API call)
  };

  return (
    <div className="upload-container">
      <h2>Upload Content</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="upload-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="file"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          value={formData.tags}
          onChange={handleChange}
        />
        <button type="submit" className="upload-button">Upload</button>
      </form>
    </div>
  );
};

export default Upload;
