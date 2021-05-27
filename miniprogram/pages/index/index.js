//index.js
const app = getApp()

Page({
  data: {
    queryResult: '',
    randomNum: Math.floor(Math.random()*4)
  },

  onQuery: function() {
    const db = wx.cloud.database()
    db.collection('drawlots').where({
      lotsid: this.data.randomNum
    }).get({
      success: res => {
        this.setData({
          queryResult: res.data[0].lotsname
        })
        console.log('[数据库] [查询记录] 成功: ', res.data[0].lotsname)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '占卜失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  },
})
