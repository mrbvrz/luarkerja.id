import { NextRequest, NextResponse } from 'next/server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
    const supabase = createServerComponentClient({ cookies });
    const slug = params.slug;
    const url = new URL(req.url);
    const locale = url.searchParams.get('locale') || 'id';

    const { data: blog, error } = await supabase
        .from('blogs')
        .select('title, content, description, created_at')
        .eq('slug', slug)
        .eq('lang', locale)
        .eq('status', 'published')
        .single();

    if (error || !blog) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json(blog);
}
