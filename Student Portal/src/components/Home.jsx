import React, { useState, useEffect } from 'react';

const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(storedStudents);
  }, []);

  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>Student Portal</h1>
        {students.length === 0 ? (
          <p>No students added yet.</p>
        ) : (
          <p>Total number of students: {students.length}</p>
        )}
      </div>

      {students.length > 0 && (
        <div className="card-container">
          {students.map((student) => (
            <div className="card" key={student.id}>
              <h3>{student.name}</h3>
              <p><strong>Email:</strong> {student.email}</p>
              <p><strong>Phone:</strong> {student.phone}</p>
              <p><strong>Gender:</strong> {student.gender}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
