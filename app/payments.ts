import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

export const createPaymentIntent = async () => {
  return stripe.paymentIntents.create({
    amount: 2000,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
  });
};

export const retrievePaymentIntent = async id => {
  return stripe.paymentIntents.retrieve(id);
};
