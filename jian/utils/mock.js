let data = [
    {
        "title": "i麦当劳",
        "desc": "生活 美食",
        "imageurl": "../../assets/images/demo"
    },
    {
        "title": "ZAKER资讯",
        "desc": "资讯 富媒体",
        "imageurl": "../../assets/images/demo1"
    },
    {
        "title": "小微记账",
        "desc": "工具 金融",
        "imageurl": "../../assets/images/demo2"
    },
    {
        "title": "国信证券",
        "desc": "金融 理财",
        "imageurl": "../../assets/images/demo3"
    },
    {
        "title": "创意灵感",
        "desc": "科技 社交",
        "imageurl": "../../assets/images/demo"
    },
    {
        "title": "酷漫漫画+",
        "desc": "资讯 富媒体",
        "imageurl": "../../assets/images/demo1"
    },
    {
        "title": "一个电台",
        "desc": "影音",
        "imageurl": "../../assets/images/demo2"
    },
    {
        "title": "腾讯漫画",
        "desc": "富媒体",
        "imageurl": "../../assets/images/demo3"
    },{
        "title": "嘿店杂志",
        "desc": "资讯",
        "imageurl": "../../assets/images/demo"
    },
    {
        "title": "书艺公社+",
        "desc": "书法 国画 篆刻",
        "imageurl": "../../assets/images/demo1"
    },
    {
        "title": "暴走漫画BAOZOU",
        "desc": "漫画 富媒体",
        "imageurl": "../../assets/images/demo2"
    },
    {
        "title": "掌阅读书",
        "desc": "小说 阅读",
        "imageurl": "../../assets/images/demo3"
    }
]

 var getData = function(){
    return data;
 }
 
//  要引用这个文件的函数或者变量，除了在要引用的的js文件中模块化之外
// 在被引用的的js中要通过 module.exports={a:a}作为面向对象的变量输出函数如下：
 module.exports={
    mock_data: getData
 }