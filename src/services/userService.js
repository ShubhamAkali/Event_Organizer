import { fetchUsers } from '../api/users';

export const fetchUsersService = async () => {
  try {
    const users = await fetchUsers();
    return users;
  } catch (error) {
    throw error;
  }
};
