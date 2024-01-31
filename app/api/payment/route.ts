import Stripe from 'stripe'
import { NextResponse, NextRequest } from 'next/server'

export async function POST (request: NextRequest) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    const data = await request.json()
    // const priceId = data.priceId
    // const promoId = data.promoId
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: process.env.PRICE_ID,
                quantity: 1,
            }
        ],
       discounts: [
            {
              promotion_code: process.env.PROMO_ID,
            },
        ],
         custom_text: {
             submit: {
                message: 'Please note that the email you use here is the same email you should use when making an account on our platform.',
             },
/*             submit: {
               message: 'We\'ll email you instructions on how to get started.',
            },*/
         },
/*         custom_fields: [
             {
                 key: 'username',
                 optional: false,
                 label: {
                   type: 'custom',
                   custom: 'Username',
                 },
                 type: 'text',
             },
         ],*/
        mode: "subscription",
        success_url:`${process.env.NEXT_PUBLIC_APP_DOMAIN}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_DOMAIN}`
    })

    return NextResponse.json(session.url)
}