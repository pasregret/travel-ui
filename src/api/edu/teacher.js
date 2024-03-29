import request from '@/utils/request'

const api_name = '/admin/edu/teacher/'
export default {

  getPageList(page, limit, pageQuery) {
    return request({
      url: `${api_name}/pageQuery/${page}/${limit}`,
      method: 'get',
      params: pageQuery
    })
  },
  removeById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
    })
  },
  save(teacher) {
    return request({
      url: api_name,
      method: 'post',
      data: teacher
    })
  },
  getById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'get'
    })
  },
  updateById(teacher) {
    return request({
      url: `${api_name}/${teacher.id}`,
      method: 'put',
      data: teacher
    })
  },
  getList() {
    return request({
        url: api_name,
        method: 'get'
    })
},
}
