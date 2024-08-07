import { GET_VENDORS, UPDATE_VENDOR, DELETE_VENDOR } from '../constants/actionTypes';

const initialState = {
  vendors: [],
};

const vendorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VENDORS:
      return { ...state, vendors: action.payload };
    case UPDATE_VENDOR:
      return {
        ...state,
        vendors: state.vendors.map((vendor) =>
          vendor.id === action.payload.id ? action.payload : vendor
        ),
      };
    case DELETE_VENDOR:
      return {
        ...state,
        vendors: state.vendors.filter((vendor) => vendor.id !== action.payload),
      };
    default:
      return state;
  }
};

export default vendorReducer;
