import ajax from './request';
/**
 * @param { get: params }
 * @param { post: data }
 */

export const getTabData = ({url, method, params}) => {
  return ajax({
    url: url,
    method: method,
    params
  })
}

