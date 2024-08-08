import React, { useState } from 'react';

const ProfileDetails = ({ user, editMode, onEditModeChange, onProfileUpdate }) => {
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onProfileUpdate(formData);
    onEditModeChange(false);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Profile Details</h2>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Save
          </button>
          <button
            type="button"
            className="ml-4 text-gray-500 p-2 rounded hover:text-gray-700 transition duration-200"
            onClick={() => onEditModeChange(false)}
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <button
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 mt-4"
            onClick={() => onEditModeChange(true)}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default ProfileDetails;
