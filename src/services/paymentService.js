import { processPayment } from '../api/payments';

export const processPaymentService = async (paymentData) => {
  try {
    const result = await processPayment(paymentData);
    return result;
  } catch (error) {
    throw error;
  }
};
