import { stripe } from "../app.js";

const frontEndUrl = process.env.FRONT_END_URL;

export const createSession = async (req, res, next) => {
    const { items } = req.body;

    const line_items = items.map((item) => ({ price: item.stripePriceId, quantity: item.qty }))

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: "payment",
        cancel_url: `${frontEndUrl}/cancel`,
        success_url: `${frontEndUrl}/success`,
    });

    return res.json({ session_url: session.url })
};