import { APIHost } from '@/constants/global';
import { isProd } from '@/utils';
import type { RequestConfig } from 'umi';
import { history } from 'umi';
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
            Authorization: `Bearer ${getAuthorization()}`,
            // Authorization: `Bearer ${getAuthorization(true)}`,
          },
        },
      };
    },
  ],
  errorConfig: {
    adaptor(resData: any) {
      if (resData.statusCode === 401) {
        history.push('/login');
        return { success: false, showType: 0 };
      }
      return {
        success: !!resData.success,
        message: resData.message || '未知错误',
      };
    },
  },
};
