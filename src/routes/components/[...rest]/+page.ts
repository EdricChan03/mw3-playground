import type { PageLoad } from './$types';

export const load = (async ({ params: { rest: slug } }) => {
    return { slug };
}) satisfies PageLoad;
