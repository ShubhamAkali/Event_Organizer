import instance from './index';

const API_URL = '/seminars';

export const fetchSeminars = () => instance.get(API_URL);
export const fetchSeminarById = (id) => instance.get(`${API_URL}/${id}`);
export const createSeminar = (seminarData) => instance.post(API_URL, seminarData);
export const updateSeminar = (id, seminarData) => instance.put(`${API_URL}/${id}`, seminarData);
export const deleteSeminar = (id) => instance.delete(`${API_URL}/${id}`);
