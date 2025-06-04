import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const supabase = createRouteHandlerClient({ cookies });
    const body = await request.json();

    const email = body.email?.toLowerCase()?.trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json(
            { error: 'invalid_email', message: 'Invalid email address' },
            { status: 400 }
        );
    }

    // Cek apakah sudah ada email di DB
    const { data: existing, error: selectError } = await supabase
        .from('newsletter_subscribers')
        .select('email')
        .eq('email', email)
        .single();

    if (selectError && selectError.code !== 'PGRST116') {
        // Error selain "no rows"
        return NextResponse.json(
            { error: 'server_error', message: 'Database error' },
            { status: 500 }
        );
    }

    if (existing) {
        return NextResponse.json(
            { error: 'exists', message: 'Email already subscribed' },
            { status: 409 }
        );
    }

    // Insert email baru
    const { error: insertError } = await supabase.from('newsletter_subscribers').insert({ email });

    if (insertError) {
        return NextResponse.json(
            { error: 'server_error', message: 'Failed to save email' },
            { status: 500 }
        );
    }

    return NextResponse.json({ message: 'Successfully subscribed' }, { status: 201 });
}
