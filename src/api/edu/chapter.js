import request from '@/utils/request'

const api_name = '/admin/edu/chapter'

export default {

  getNestedTreeList(courseId) {
    return request({
      url: `${api_name}/nested-list/${courseId}`,
      method: 'get'
    })
  },
  addChapter(chapter){
    return request({
        url: `${api_name}`,
        method: 'post',
        data: chapter
      })
  },
  deleteChapter(id){
    return request({
        url: `${api_name}/${id}`,
        method: 'delete'
      })
  },
  getChapterInfo(chapterid){
    return request({
        url: `${api_name}/${chapterid}`,
        method: 'get'
      })
  },
  updateChapter(chapter){
    return request({
        url: `${api_name}/${chapter.id}`,
        method: 'put',
        data: chapter
      })
  },
  previous() {
    console.log('previous')
    this.$router.push({ path: '/edu/course/info/' + this.courseId })
  },
  
  next() {
    console.log('next')
    this.$router.push({ path: '/edu/course/publish/' + this.courseId })
  }


}