let utils = require("../../utils/mock.js");

Page({
  data:{
    tabs: ['小程序', '公众号', '应用'],
    mockData: utils.mock_data(),
    windowWidth: 0,
    lineWidth: 0,
    lineOffset: 0,
    pageOffset: 0,
    activeTab: 0
  },
  onLoad:function(options){
    try {
        let {tabs} = this.data;
        var res = wx.getSystemInfoSync()
        this.windowWidth = res.windowWidth;
        this.data.lineWidth = (this.windowWidth - 45) / this.data.tabs.length;
        this.data.windowWidth = res.windowWidth;
        this.setData({
          lineWidth: this.data.lineWidth,
          windowWidth: this.data.windowWidth
          })
        this.tabsCount = tabs.length;
      } catch (e) {
      }
  },
  handlerTabTap(e) {
    let {tabs, windowWidth, activeTab} = this.data;
    activeTab = e.currentTarget.dataset.index;
    this.setData({activeTab: activeTab})
    this.data.lineOffset = (windowWidth - 45)*activeTab;
    this.data.pageOffset = windowWidth*activeTab;
    this.setData({
      lineOffset: this.data.lineOffset,
      pageOffset: this.data.pageOffset
    })
  },
  handlerSearch(e) {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  handlerAddApp(e) {
    let {tabs, activeTab} = this.data;
    wx.navigateTo({
      url: '../add/add?title=' + tabs[activeTab]
    })
  }
})