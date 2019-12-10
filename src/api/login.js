import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/admin/sysuser/login',
    method: 'post',
    data: {
      username,
      password
    },
    baseURL:"http://localhost:8120"
  })
}

export function getInfo(token) {
  return request({
    url: '/admin/sysuser/info',
    method: 'get',
    params: { token },
    baseURL:"http://localhost:8120"
  })
}

export function logout() {
  return request({
    url: '/admin/sysuser/logout',
    method: 'post',
    baseURL:"http://localhost:8120"
  })
}
