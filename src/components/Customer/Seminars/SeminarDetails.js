import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSeminarById } from '../../api/seminars';

const SeminarDetails = () => {
  const { id } = useParams();
  const [seminar, setSeminar] = useState(null);

  useEffect(() => {
    const getSeminar = async () => {
      const response = await fetchSeminarById(id);
      setSeminar(response.data);
    };
    getSeminar();
  }, [id]);

  if (!seminar) return <div>Loading...</div>;

  return (
    <div>
      <h1>{seminar.title}</h1>
      <p>{seminar.description}</p>
      <p>{seminar.date}</p>
    </div>
  );
};

export default SeminarDetails;
