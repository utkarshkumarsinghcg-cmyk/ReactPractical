import React, { useState } from 'react';

const AddStudent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: 'Male',
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');
  const [recentStudent, setRecentStudent] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear success message on typing
    if (successMsg) setSuccessMsg('');
    // Clear specific error on typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name cannot be empty';
    if (!formData.email.includes('@')) newErrors.email = 'Email must contain "@"';
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone must be exactly 10 digits';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMsg('');
      return;
    }

    // Validation success
    const newStudent = { ...formData, id: Date.now() };
    const existingStudents = JSON.parse(localStorage.getItem('students')) || [];
    existingStudents.push(newStudent);
    localStorage.setItem('students', JSON.stringify(existingStudents));

    setSuccessMsg('Student added successfully!');
    setRecentStudent(newStudent);
    setFormData({
      name: '',
      email: '',
      phone: '',
      gender: 'Male', // Reset to default
    });
    setErrors({});
  };

  return (
    <div className="container">
      <h2>Add Student</h2>
      {successMsg && <p className="success-text">{successMsg}</p>}
      
      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error-text">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {recentStudent && (
        <div className="recent-student">
          <h3>Recently Added Student</h3>
          <div className="card">
            <p><strong>Name:</strong> {recentStudent.name}</p>
            <p><strong>Email:</strong> {recentStudent.email}</p>
            <p><strong>Phone:</strong> {recentStudent.phone}</p>
            <p><strong>Gender:</strong> {recentStudent.gender}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddStudent;
