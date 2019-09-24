import request from './request'
import qs from 'qs'
// 该接口仅限于测试，不可用
export function listApi(data) {
  return request.post('/overview/list', qs.stringify(data))
}
