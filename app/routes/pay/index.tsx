import { Form, useSubmit } from '@remix-run/react';
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';

export const Index = () => {
  const elements = useElements();
  const stripe = useStripe();
  const submit = useSubmit();
  const handleSubmit = async (e: {
    preventDefault: () => void;
    currentTarget:
      | HTMLFormElement
      | HTMLButtonElement
      | HTMLInputElement
      | FormData
      | URLSearchParams
      | { [name: string]: string }
      | null;
  }) => {
    e.preventDefault();

    await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/pay/success',
      },
    });

    return submit(e.currentTarget);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <PaymentElement />
      <button>Pay</button>
    </Form>
  );
};
export default Index;
