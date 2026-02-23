import { NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import Stripe from 'stripe'

export async function POST(req: Request) {
  try {
    const stripe = getStripe()
    const body = await req.text()
    const signature = req.headers.get('stripe-signature') as string

    if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
      return NextResponse.json({ error: 'Missing signature or webhook secret' }, { status: 400 })
    }

    let event: Stripe.Event
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET)

    switch (event.type) {
      case 'checkout.session.completed':
        console.log('✅ Checkout completed')
        break
      case 'customer.subscription.created':
        console.log('✅ Subscription created')
        break
      case 'customer.subscription.updated':
        console.log('✅ Subscription updated')
        break
      case 'customer.subscription.deleted':
        console.log('❌ Subscription cancelled')
        break
      case 'invoice.payment_succeeded':
        console.log('✅ Payment succeeded')
        break
      case 'invoice.payment_failed':
        console.log('❌ Payment failed')
        break
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 })
  }
}
