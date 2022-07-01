/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Outlet, useLoaderData } from '@remix-run/react';
import { createPaymentIntent } from '~/payments';

const stripePromise = loadStripe(
  'pk_test_51LGAMwLqQ0xlefmLgCu85LyOt93sdRSRrPocs9YBLobWOClgtlfsplleoTdzFdZnQAm6UACCnQQGimIxxvENGVpK00oLOtPILh',
);

export const loader = async () => {
  return createPaymentIntent();
};
export const Pay = () => {
  const paymentIntent = useLoaderData();
  return (
    <div>
      <h1>Pay</h1>
      <Elements
        stripe={stripePromise}
        options={{ clientSecret: paymentIntent.client_secret }}>
        <Outlet />
      </Elements>
    </div>
  );
};

export default Pay;
