// import the Request and Response classes
import mysql from  'mysql2/promise';
import { NextResponse, NextRequest } from 'next/server'

// define and export the GET handler function
export async function GET(request) {
    // this is going to be my JSON response

    const results = {
        message: 'Hello World!',
    }

    // response with the JSON object

    return NextResponse.json(results)
}