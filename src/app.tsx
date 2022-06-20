import { APIHost } from '@/constants/global';
import { isProd } from '@/utils';
import type { RequestConfig } from 'umi';
import { getAuthorization } from './constants/auth';
import './global.less';

export const request: RequestConfig = {
  timeout: 10 * 60 * 1000,
  requestInterceptors: [
    (url, options) => {
      return {
        url: isProd && url.startsWith('/api') ? `${APIHost}${url}` : url,
        options: {
          ...options,
          headers: {
            // Authorization: `Bearer ${getAuthorization()}`,
            Authorization: `Bearer ${getAuthorization(true)}`,
          },
        },
      };
    },
  ],
  errorConfig: {
    adaptor(resData: any) {
      return {
        success: !!resData.success,
        errorMessage: resData.message || '未知错误',
      };
    },
  },
};
