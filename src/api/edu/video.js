import request from '@/utils/request'

export default {
    //添加的方法
    addVideo(video) {
        return request({
            url: '/admin/edu/video/save-video-info',
            method: 'post',
            data: video
        })
    },
    //根据id查询的方法
    getVideoInfo(videoId) {
        return request({
            url: '/admin/edu/video/video-info/'+videoId,
            method: 'get'
        })
    },
    //修改的方法
    updateVideo(video) {
        return request({
            url: '/admin/edu/video/update-video-info/'+video.id,
            method: 'put',
            data: video
        })
    },
    //删除的方法
    deleteVideo(videoId) {
        return request({
            url: '/admin/edu/video/'+videoId,
            method: 'delete'
        })
    },
    //删除阿里云视频的方法
    removeAliyunVideo(videoId) {
        return request({
            url: '/admin/edu/vod/'+videoId,
            method: 'delete'
        })
    }
}