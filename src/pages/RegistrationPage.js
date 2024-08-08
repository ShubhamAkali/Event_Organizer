import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { register } from '../store/actions/registrationActions';
import Input from '../components/UI/Input';
import { validateEmail, validatePassword, validateMobileNumber } from '../utils/validations';

const RegistrationPage = () => {
  const { role } = useParams();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '+91', // Start with the "+91" prefix
    address: '',
    gstNumber: '', // Only for vendor
    role: role || 'user', // Default role if not specified
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.registration);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'mobileNumber') {
      let mobileNumber = value;

      // Prevent the user from deleting the +91 prefix
      if (!mobileNumber.startsWith('+91')) {
        mobileNumber = '+91';
      }

      // Ensure only digits are added after the +91 prefix
      const digitsOnly = mobileNumber.replace(/^\+91/, '').replace(/\D/g, '');
      mobileNumber = `+91${digitsOnly}`;

      setFormData((prevData) => ({
        ...prevData,
        [name]: mobileNumber,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword, mobileNumber } = formData;

    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!validateMobileNumber(mobileNumber)) {
      newErrors.mobileNumber = 'Mobile number must be exactly 10 digits with +91 prefix';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    dispatch(register(formData));
  };

  useEffect(() => {
    if (user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md sm:max-w-sm">
        <h2 className="text-2xl sm:text-lg font-bold mb-4 text-center">Register as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>
        {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
        <div className="mb-3">
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
        </div>
        <div className="mb-3">
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
          {errors.email && <div className="mt-1 text-red-500 text-xs">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
          {errors.password && <div className="mt-1 text-red-500 text-xs">{errors.password}</div>}
        </div>
        <div className="mb-3">
          <Input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
          {errors.confirmPassword && <div className="mt-1 text-red-500 text-xs">{errors.confirmPassword}</div>}
        </div>
        <div className="mb-3">
          <Input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
          {errors.mobileNumber && <div className="mt-1 text-red-500 text-xs">{errors.mobileNumber}</div>}
        </div>
        <div className="mb-3">
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
        </div>
        {role === 'vendor' && (
          <div className="mb-3">
            <Input
              type="text"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleChange}
              placeholder="GST Number"
              className="w-full p-2 border border-gray-300 rounded text-sm"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 text-sm"
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
        <div className="mt-4 text-center">
          <Link to="/login" className="text-blue-500 hover:underline text-xs">
            Already have an account? Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
