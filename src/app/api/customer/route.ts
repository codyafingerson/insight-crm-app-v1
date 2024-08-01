import connectDatabase from "@/config/database";
import Customer from "@/models/Customer";
import { NextRequest } from "next/server";

/**
 * Get all customers
 * @param {NextRequest} req the Next.js request object
 * @returns the json response with the customers
 */
export const GET = async (req: NextRequest) => {
    try {
        await connectDatabase();

        const customers = await Customer.find().sort({ updatedAt: -1 });

        return new Response(JSON.stringify(customers), {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to fetch customers' }), {
            status: 500,
        });
    }
}

/**
 * Create a new customer
 * @param req 
 * @returns 
 */
export const POST = async (req: NextRequest) => {
    try {
        await connectDatabase();

        if (req.headers.get('content-type') !== 'application/json') {
            return new Response(JSON.stringify({ error: 'Invalid content type' }), {
                status: 400,
            });
        }

        const body = await req.json();
        const { firstName, lastName, email, phoneNumber, address, companyName, companyAddress, companyPhoneNumber } = body;

        const newCustomer = await Customer.create({
            firstName,
            lastName,
            email,
            phoneNumber,
            address,
            companyName,
            companyAddress,
            companyPhoneNumber
        });

        return new Response(JSON.stringify(newCustomer), {
            status: 201,
        });
    } catch (error) {
        console.error('Error creating customer:', error);
        return new Response(JSON.stringify({ error: 'Failed to create customer' }), {
            status: 500,
        });
    }
}