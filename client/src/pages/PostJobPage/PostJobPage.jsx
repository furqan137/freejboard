import React, { useState } from "react";
import "./PostJobPage.css"; // Import the CSS file

const PostJobPage = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    category: "",
    description: "",
    budget: "",
    deadline: "",
  });

  const [errors, setErrors] = useState({});

  const categories = [
    "Web Development",
    "Mobile App Development",
    "Graphic Design",
    "Content Writing",
    "Digital Marketing",
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.jobTitle) newErrors.jobTitle = "Job title is required.";
    if (!formData.category) newErrors.category = "Category is required.";
    if (!formData.description) newErrors.description = "Description is required.";
    if (!formData.budget || isNaN(formData.budget))
      newErrors.budget = "Budget must be a valid number.";
    if (!formData.deadline) newErrors.deadline = "Deadline is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
      alert("Job posted successfully!");
      setFormData({
        jobTitle: "",
        category: "",
        description: "",
        budget: "",
        deadline: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="container">
      <h1 className="heading">Post a Job</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label className="label">Job Title</label>
          <input
            className="input"
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="Enter job title"
          />
          {errors.jobTitle && <p className="error">{errors.jobTitle}</p>}
        </div>

        <div className="formGroup">
          <label className="label">Category</label>
          <select
            className="input"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && <p className="error">{errors.category}</p>}
        </div>

        <div className="formGroup">
          <label className="label">Description</label>
          <textarea
            className="textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the job details"
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <div className="formGroup">
          <label className="label">Budget ($)</label>
          <input
            className="input"
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Enter budget amount"
          />
          {errors.budget && <p className="error">{errors.budget}</p>}
        </div>

        <div className="formGroup">
          <label className="label">Deadline</label>
          <input
            className="input"
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
          />
          {errors.deadline && <p className="error">{errors.deadline}</p>}
        </div>

        <button className="button" type="submit">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJobPage;
