import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        try {
          const response = await fetch(`/api/users/${userId}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setUser(data);
        } catch (error) {
          setError(error);
        }
      }
    };

    fetchUser();
  }, [userId]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile: {user.name}</h1>
      {/* Display user details */}
    </div>
  );
};

export default UserProfile;