import apiFetch, { APIFetchOptions } from '@wordpress/api-fetch';

const wpFetch = async < T = unknown >(
	options: APIFetchOptions
): Promise< T > => {
	return await apiFetch( options );
};

wpFetch.use = apiFetch.use;
wpFetch.setFetchHandler = apiFetch.setFetchHandler;
wpFetch.createNonceMiddleware = apiFetch.createNonceMiddleware;
wpFetch.createPreloadingMiddleware = apiFetch.createPreloadingMiddleware;
wpFetch.createRootURLMiddleware = apiFetch.createRootURLMiddleware;
wpFetch.fetchAllMiddleware = apiFetch.fetchAllMiddleware;
// @ts-ignore
wpFetch.mediaUploadMiddleware = apiFetch.mediaUploadMiddleware;

export default wpFetch;
