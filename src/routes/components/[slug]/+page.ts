import type { PageLoad } from './$types';

export const load = (async ({ params: { slug } }) => {
    return { slug };
}) satisfies PageLoad;
