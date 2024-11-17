/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51QLThJIYUsYwxgXOrUw3yim7shtRxIQaF2Fhvapf5XnvzcSBq57W62LAoiGFKlXQ7XrHcHSe4x7n70V2gzZZA93K00DUoMaoIP',
);

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
