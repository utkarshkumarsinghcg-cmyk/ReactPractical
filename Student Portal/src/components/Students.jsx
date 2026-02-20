import React, { useState, useEffect } from 'react';

const Students = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setUsers(data.slice(0, 6)); // Display only the first 6 users
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="container"><p>Loading...</p></div>;
  }

  if (error) {
    return <div className="container"><p className="error-text">Error: {error}</p></div>;
  }

  return (
    <div className="container">
      <h2>Students List</h2>
      <div className="card-container">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
