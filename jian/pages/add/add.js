Page({
    data: {

    },
    onLoad: function(option){
        wx.setNavigationBarTitle({
            title: "推荐" + option.title
        })
    }
})