// src/app/api/products/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const data = await request.json();
        console.log('Received data:', JSON.stringify(data, null, 2));

        // Detailed validation
        const missingFields = [];
        if (!data.name) missingFields.push('name');
        if (!data.category) missingFields.push('category');
        if (!data.price && data.price !== 0) missingFields.push('price');
        if (data.inStock === undefined) missingFields.push('inStock');
        
        if (missingFields.length > 0) {
            console.log('Validation failed - missing fields:', missingFields);
            return NextResponse.json({
                error: 'Missing required fields',
                missingFields: missingFields,
                receivedData: data
            }, { status: 400 });
        }

        // Type validation
        if (typeof data.price !== 'number') {
            console.log('Invalid price type:', typeof data.price);
            return NextResponse.json({
                error: 'Invalid price format',
                received: data.price,
                expectedType: 'number'
            }, { status: 400 });
        }

        if (typeof data.inStock !== 'number') {
            console.log('Invalid inStock type:', typeof data.inStock);
            return NextResponse.json({
                error: 'Invalid inStock format',
                received: data.inStock,
                expectedType: 'number'
            }, { status: 400 });
        }

        // Save product to the database
        const product = await prisma.product.create({
            data: {
                category: data.category,
                name: data.name,
                description: data.description || '',
                price: data.price,  // Already validated as number
                inStock: data.inStock,  // Already validated as number
                size: data.size || null,
                color: data.color || null,
                material: data.material || null,
                imageURL1: data.imageURLs?.[0] || null,
                imageURL2: data.imageURLs?.[1] || null,
                imageURL3: data.imageURLs?.[2] || null,
                imageURL4: data.imageURLs?.[3] || null,
            },
        });

        return NextResponse.json(product, { status: 201 });
    } catch (error) {
        console.error('Failed to create product:', error);
        return NextResponse.json({
            error: 'Failed to save product',
            details: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}

export async function GET() {
    try {
        const products = await prisma.product.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        
        return NextResponse.json(products);
    } catch (error) {
        console.error('Failed to fetch products:', error);
        return NextResponse.json(
            { error: 'Failed to fetch products' },
            { status: 500 }
        );
    }
}