import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'id'] as const;
export const defaultLocale = 'id';

export const routing = defineRouting({
    locales,
    defaultLocale
});
