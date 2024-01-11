import Stripe from 'stripe'
import { NextResponse, NextRequest } from 'next/server'

export async function POST (request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    let data = await request.json()
    // let priceId = data.priceId
    // let promoId = data.promoId
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: process.env.PRICE_ID,
                quantity: 1,
            }
        ],
        // discounts: [
        //     {
        //       promotion_code: process.env.PROMO_ID,
        //     },
        // ],
        // custom_text: {
        //     shipping_address: {
        //       message: 'Please note that the email you use here is the same email you should use when making an account on our platform.',
        //     },
        //     submit: {
        //       message: 'We\'ll email you instructions on how to get started.',
        //     },
        // },
        // custom_fields: [
        //     {
        //         key: 'username',
        //         optional: false,
        //         label: {
        //           type: 'custom',
        //           custom: 'Username',
        //         },
        //         type: 'text',
        //     },
        // ],
        mode: "subscription",
        success_url: "http://app.stoiccord.com",
        cancel_url: "http://localhost:3000"
    })

    return NextResponse.json(session.url)
}