import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://grandy-vo-dashboard.vercel.app/api/about');
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}