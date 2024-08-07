import {
    fetchSeminars,
    fetchSeminarById,
    createSeminar,
    updateSeminar,
    deleteSeminar
  } from '../api/seminars';
  
  export const getSeminars = async () => {
    const response = await fetchSeminars();
    return response.data;
  };
  
  export const getSeminar = async (id) => {
    const response = await fetchSeminarById(id);
    return response.data;
  };
  
  export const addSeminar = async (seminarData) => {
    const response = await createSeminar(seminarData);
    return response.data;
  };
  
  export const editSeminar = async (id, seminarData) => {
    const response = await updateSeminar(id, seminarData);
    return response.data;
  };
  
  export const removeSeminar = async (id) => {
    await deleteSeminar(id);
  };
  