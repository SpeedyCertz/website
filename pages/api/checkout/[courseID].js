import { stripe } from "../../../Stripe/Stripe"

var jwt = require('jsonwebtoken');


export default async function handler(req, res) {

    const endpoint = process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_dev_domain : process.env.NEXT_PUBLIC_prod_domain

    try {
        const fees = (((req.body.price * 3) / 100) + 0.30);
        const ClientToken = await createClientToken(req.body, fees);

        /*const promotionCode = await stripe.promotionCodes.create({
            coupon: 'WFyxwUML',
            code: 'PARTNER2023',
        });*/

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                  quantity: 1,
                  price: req.query.courseID,
                },
                {
                  price_data: {
                    currency: 'usd',
                    product_data: {
                      name: 'Processing Fees',
                      // other tax details...
                    },
                    unit_amount: Math.round(fees * 100),
                  },
                  quantity: 1,
                },                
            ],
            mode: 'payment',
            allow_promotion_codes: true,
            payment_method_types: ['card', 'cashapp','link', 'us_bank_account', 'affirm'],
            phone_number_collection: {
                enabled: true,
            },
            //payment_method_types: ['card'],
            success_url: `${endpoint}/checkoutsuccess?token=${ClientToken}`,
            cancel_url: `${endpoint}/`,
            
        }); 
        res.status(200).send({id: session.id});
        return

    } catch (error) {
        console.log(error)
        res.status(400).send({message:'error'});
        return
    }

}


async function createClientToken (payload,fees){

    const token = jwt.sign({
        data:{
            firstName: payload.firstName,
            lastName: payload.lastName,
            Email: payload.Email,
            phoneNumber: payload.phoneNumber,
            DTL: payload.DTL,
            course: payload.course,
            price: payload.price + fees
        },
        // expires in 300 seconds = 5min
        exp: Math.floor(Date.now() / 1000) + (1800)
    }, process.env.NEXT_PUBLIC_TOKEN_SECRETKEY);

    return token  
}
  