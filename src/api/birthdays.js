import instance from './index';

const API_URL = '/birthdays';

export const fetchBirthdays = () => instance.get(API_URL);
export const fetchBirthdayById = (id) => instance.get(`${API_URL}/${id}`);
export const createBirthday = (birthdayData) => instance.post(API_URL, birthdayData);
export const updateBirthday = (id, birthdayData) => instance.put(`${API_URL}/${id}`, birthdayData);
export const deleteBirthday = (id) => instance.delete(`${API_URL}/${id}`);
