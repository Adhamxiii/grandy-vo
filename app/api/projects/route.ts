import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://grandy-vo-dashboard.vercel.app/api/projects');
    const data = await response.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: 'Failed to fetch data', e }, { status: 500 });
  }
}
