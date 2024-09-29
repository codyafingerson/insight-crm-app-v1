import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

/**
 * Get all customers
 * @param {NextRequest} req the Next.js request object
 * @returns the json response with the customers
 */
export const GET = async (req: NextRequest) => {
    try {
        // Fetch all customers sorted by updatedAt in descending order
        const customers = await prisma.customer.findMany({
            orderBy: {
                updatedAt: 'desc',
            },
        });

        return new Response(JSON.stringify(customers), {
            status: 200,
        });
    } catch (error) {
        console.error('Error fetching customers:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch customers' }), {
            status: 500,
        });
    }
};

/**
 * Create a new customer
 * @param req 
 * @returns 
 */
export const POST = async (req: NextRequest) => {
    try {
        if (req.headers.get('content-type') !== 'application/json') {
            return new Response(JSON.stringify({ error: 'Invalid content type' }), {
                status: 400,
            });
        }

        const body = await req.json();
        const { firstName, lastName, email, phoneNumber, address, companyName, companyAddress, companyPhoneNumber } = body;

        // Create a new customer using Prisma
        const newCustomer = await prisma.customer.create({
            data: {
                firstName,
                lastName,
                email,
                phoneNumber,
                address,
                companyName,
                companyAddress,
                companyPhoneNumber,
            },
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
};
