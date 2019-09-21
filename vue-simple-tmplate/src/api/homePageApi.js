import request from './request'
import qs from 'qs'
export function listApi(data) {
  return request.post('/overview/list', qs.stringify(data))
}
