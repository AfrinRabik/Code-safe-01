import React, { useState } from 'react';
import { storageService } from '../services/storageService';

const ReportForm = ({ onComplete, onCancel }) => {
  const [formData, setFormData] = useState({
    childName: '',
    age: '',
    description: '',
    lastSeenLocation: '',
    contactNumber: '',
    lastSeenTime: ''
  });

  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const newReport = {
        ...formData,
        image,
        id: Date.now(),
        status: 'active',
        createdAt: new Date().toISOString()
      };

      storageService.saveAlert(newReport);

      alert("ALERT CREATED (Prototype Mode)");
      onComplete();
    } catch (err) {
      alert("Error saving report");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="report-form" onSubmit={handleSubmit}>
      <h2 className="emergency-header">Report Missing Child</h2>

      <input name="childName" placeholder="Child Name" onChange={handleInputChange} required />
      <input name="age" type="number" placeholder="Age" onChange={handleInputChange} required />
      <input name="lastSeenLocation" placeholder="Last Seen Location" onChange={handleInputChange} required />
      <input name="lastSeenTime" placeholder="Last Seen Time" onChange={handleInputChange} required />
      <input name="contactNumber" placeholder="Contact Number" onChange={handleInputChange} required />

      <textarea name="description" placeholder="Description" onChange={handleInputChange} required />

      <input type="file" accept="image/*" onChange={handleImageChange} />

      <div style={{ display: "flex", gap: "10px" }}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Submit Alert"}
        </button>
      </div>
    </form>
  );
};

export default ReportForm;
