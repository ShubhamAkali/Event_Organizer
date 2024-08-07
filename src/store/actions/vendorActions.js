import { GET_VENDORS, UPDATE_VENDOR, DELETE_VENDOR } from '../constants/actionTypes';
import vendorService from '../../services/vendorService';

export const getVendors = () => async (dispatch) => {
  try {
    const response = await vendorService.getVendors();
    dispatch({ type: GET_VENDORS, payload: response });
  } catch (error) {
    console.error(error);
  }
};

export const updateVendor = (vendorId, vendorData) => async (dispatch) => {
  try {
    const response = await vendorService.updateVendor(vendorId, vendorData);
    dispatch({ type: UPDATE_VENDOR, payload: response });
  } catch (error) {
    console.error(error);
  }
};

export const deleteVendor = (vendorId) => async (dispatch) => {
  try {
    await vendorService.deleteVendor(vendorId);
    dispatch({ type: DELETE_VENDOR, payload: vendorId });
  } catch (error) {
    console.error(error);
  }
};
