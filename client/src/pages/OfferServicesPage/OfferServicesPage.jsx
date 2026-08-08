import React, { useState } from "react";
import "./OfferServicesPage.css"; // Import the CSS file

const OfferServicesPage = () => {
  const [formData, setFormData] = useState({
    serviceTitle: "",
    category: "",
    description: "",
    price: "",
    deliveryTime: "",
    revisions: "",
  });

  const [errors, setErrors] = useState({});

  const categories = [
    "Web Development",
    "Graphic Design",
    "Content Writing",
    "Digital Marketing",
    "Mobile App Development",
  ];

  const deliveryOptions = ["1 Day", "3 Days", "7 Days", "14 Days", "30 Days"];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.serviceTitle) newErrors.serviceTitle = "Service title is required.";
    if (!formData.category) newErrors.category = "Category is required.";
    if (!formData.description) newErrors.description = "Description is required.";
    if (!formData.price || isNaN(formData.price))
      newErrors.price = "Price must be a valid number.";
    if (!formData.deliveryTime) newErrors.deliveryTime = "Delivery time is required.";
    if (!formData.revisions) newErrors.revisions = "Revisions field is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Service Data Submitted:", formData);
      alert("Service offered successfully!");
      setFormData({
        serviceTitle: "",
        category: "",
        description: "",
        price: "",
        deliveryTime: "",
        revisions: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="offer-services-container">
      <h1 className="offer-heading">Offer Your Services</h1>
      <form className="offer-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Service Title</label>
          <input
            className="form-input"
            type="text"
            name="serviceTitle"
            value={formData.serviceTitle}
            onChange={handleChange}
            placeholder="Enter the title of your service"
          />
          {errors.serviceTitle && <p className="error">{errors.serviceTitle}</p>}
        </div>

        <div className="form-group">
          <label className="form-label">Category</label>
          <select
            className="form-input"
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

        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea
            className="form-textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your service in detail"
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <div className="form-group">
          <label className="form-label">Price ($)</label>
          <input
            className="form-input"
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter the price for your service"
          />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>

        <div className="form-group">
          <label className="form-label">Delivery Time</label>
          <select
            className="form-input"
            name="deliveryTime"
            value={formData.deliveryTime}
            onChange={handleChange}
          >
            <option value="">Select delivery time</option>
            {deliveryOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.deliveryTime && <p className="error">{errors.deliveryTime}</p>}
        </div>

        <div className="form-group">
          <label className="form-label">Number of Revisions</label>
          <input
            className="form-input"
            type="text"
            name="revisions"
            value={formData.revisions}
            onChange={handleChange}
            placeholder="Enter the number of revisions you offer"
          />
          {errors.revisions && <p className="error">{errors.revisions}</p>}
        </div>

        <button className="form-button" type="submit">
          Offer Service
        </button>
      </form>
    </div>
  );
};

export default OfferServicesPage;
