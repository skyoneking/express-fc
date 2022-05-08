import type { RequestConfig } from 'umi';
import { APIHost } from '@/constant/global';
import { isProd } from '@/utils/indes';

export const request: RequestConfig = {
  timeout: 10 * 60 * 1000,
  requestInterceptors: [
    (url, options) => {
      return {
        url: isProd && url.startsWith('/api') ? `${APIHost}${url}` : url,
        options,
      };
    },
  ],
};
