import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const supabase = createRouteHandlerClient({ cookies });
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'id';

    const { data } = await supabase
        .from('blogs')
        .select('id, title, description, slug, lang, status')
        .eq('lang', locale)
        .eq('status', 'published')
        .order('created_at', { ascending: false });

    return NextResponse.json(data);
}
