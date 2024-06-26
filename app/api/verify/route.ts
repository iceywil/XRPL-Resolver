import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {

 
  const { templateName, imageName } = await request.json();

  if (!templateName || !imageName) {
    return NextResponse.json({ error: 'Missing required fields in request body' }, { status: 400 });
  }

  try { 


    return NextResponse.json({ message: "Template created successfully" });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
