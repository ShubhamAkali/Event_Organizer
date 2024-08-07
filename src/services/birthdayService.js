import {
    fetchBirthdays,
    fetchBirthdayById,
    createBirthday,
    updateBirthday,
    deleteBirthday
  } from '../api/birthdays';
  
  export const getBirthdays = async () => {
    const response = await fetchBirthdays();
    return response.data;
  };
  
  export const getBirthday = async (id) => {
    const response = await fetchBirthdayById(id);
    return response.data;
  };
  
  export const addBirthday = async (birthdayData) => {
    const response = await createBirthday(birthdayData);
    return response.data;
  };
  
  export const editBirthday = async (id, birthdayData) => {
    const response = await updateBirthday(id, birthdayData);
    return response.data;
  };
  
  export const removeBirthday = async (id) => {
    await deleteBirthday(id);
  };
  