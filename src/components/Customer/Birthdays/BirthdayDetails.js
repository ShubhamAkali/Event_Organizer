import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBirthdayById } from '../../api/birthdays';

const BirthdayDetails = () => {
  const { id } = useParams();
  const [birthday, setBirthday] = useState(null);

  useEffect(() => {
    const getBirthday = async () => {
      const response = await fetchBirthdayById(id);
      setBirthday(response.data);
    };
    getBirthday();
  }, [id]);

  if (!birthday) return <div>Loading...</div>;

  return (
    <div>
      <h1>{birthday.title}</h1>
      <p>{birthday.description}</p>
      <p>{birthday.date}</p>
    </div>
  );
};

export default BirthdayDetails;
