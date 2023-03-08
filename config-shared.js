export const isCi = !!process.env.CI;

export const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1] ?? 'mw3-playground';
export const kitBasePath = isCi ? `/${repoName}` : '/';
export const viteBasePath = isCi ? `/${repoName}/` : '/';
