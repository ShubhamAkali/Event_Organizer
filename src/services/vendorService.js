import { fetchVendors } from '../api/vendors';

export const fetchVendorsService = async () => {
  try {
    const vendors = await fetchVendors();
    return vendors;
  } catch (error) {
    throw error;
  }
};
