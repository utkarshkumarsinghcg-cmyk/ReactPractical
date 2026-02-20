import React, { useState, useEffect } from 'react';

const Home = () => {
  const [studentsCount, setStudentsCount] = useState(0);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStudentsCount(storedStudents.length);
  }, []);

  return (
    <div className="container home-container">
      <h1>Student Portal</h1>
      {studentsCount === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <p>Total number of students: {studentsCount}</p>
      )}
    </div>
  );
};

export default Home;
