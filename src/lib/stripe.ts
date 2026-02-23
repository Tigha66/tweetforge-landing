import Stripe from 'stripe'

const stripeKey = process.env.STRIPE_SECRET_KEY

export const stripe = stripeKey 
  ? new Stripe(stripeKey, {
      apiVersion: '2023-10-16',
      typescript: true,
    })
  : null

export function getStripe() {
  if (!stripe) {
    throw new Error('Stripe is not configured')
  }
  return stripe
}
