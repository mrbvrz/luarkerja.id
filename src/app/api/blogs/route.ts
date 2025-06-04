import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const supabase = createRouteHandlerClient({ cookies });
    const { searchParams } = new URL(request.url);

    const locale = searchParams.get('locale') || 'id';
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '9', 10);
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, error } = await supabase
        .from('blogs')
        .select('id, title, description, slug, lang, status')
        .eq('lang', locale)
        .eq('status', 'published')
        .order('created_at', { ascending: false })
        .range(from, to);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
}
