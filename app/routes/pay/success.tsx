/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/return-await */
import { useLoaderData } from '@remix-run/react';
import { retrievePaymentIntent } from '~/payments';
export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const id = url.searchParams.get('payment_intent');
  return await retrievePaymentIntent(id);
};
export const Success = () => {
  const paymentIntent = useLoaderData();

  return (
    <>
      <h3>Thank you for your payment</h3>
      <pre>{JSON.stringify(paymentIntent, null, 2)}</pre>
    </>
  );
};

export default Success;
