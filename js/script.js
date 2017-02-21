$(function() {
    //自适应高度
    function courseHeight() {
        var height = $(window).height() - 180;
        $('.course-main').css('min-height', height + 'px');
        $('.tab-content').css('min-height', height - 150 + 'px');
    }
    courseHeight()
    $(window).resize(function() {
        courseHeight()
    });

    var data = {
        "result": 0,
        "message": "success",
        "data": [{
            "url": "./details/detail01.html",
            "img": "http://szimg.mukewang.com/588170340001b26105400300-360-202.jpg",
            "title": "计算机系统结构",
            "subtitle": "国家级精品课程",
            "view": 132
        }, {
            "url": "./details/detail01.html",
            "img": "http://img.mukewang.com/589d25820001497206000338-240-135.jpg",
            "title": "Software Testing",
            "subtitle": "上海市精品课程",
            "view": 431
        }, {
            "url": "./details/detail01.html",
            "img": "http://img.mukewang.com/58807245000110e206000338-240-135.jpg",
            "title": "计算机组成原理",
            "subtitle": "上海市精品课程",
            "view": 13
        }, {
            "url": "./details/detail01.html",
            "img": "http://img.mukewang.com/5878a4180001d86f06000338-240-135.jpg",
            "title": "计算机系统结构",
            "subtitle": "上海市精品课程",
            "view": 1432
        }, {
            "url": "./details/detail01.html",
            "img": "http://img.mukewang.com/589a813c0001527a06000338-240-135.jpg",
            "title": "大型计算机的高可用性和灾难恢复解决方案",
            "subtitle": "教育部-IBM专业综合改革项目",
            "view": 1651
        }, {
            "url": "./details/detail01.html",
            "img": "http://img.mukewang.com/587db7af00016b7e06000338-240-135.jpg",
            "title": "云计算安全",
            "subtitle": "教育部-IBM专业综合改革项目",
            "view": 7539
        }, {
            "url": "./details/detail01.html",
            "img": "http://img.mukewang.com/587c69610001b37b06000338-240-135.jpg",
            "title": "商务智能案例分析",
            "subtitle": "教育部-IBM专业综合改革项目",
            "view": 4528
        }, {
            "url": "./details/detail01.html",
            "img": "http://img.mukewang.com/5885a1f5000113a506000338-240-135.jpg",
            "title": "云计算核心技术",
            "subtitle": "教育部-IBM专业综合改革项目",
            "view": 872
        }, {
            "url": "./details/detail01.html",
            "img": "http://img.mukewang.com/586f60d90001776a06000338-240-135.jpg",
            "title": "Power System(IBM i)企业级服务器应用开发",
            "subtitle": "教育部-IBM专业综合改革项目",
            "view": 863
        }, {
            "url": "./details/detail01.html",
            "img": "http://img.mukewang.com/5858d4400001fb9d06000338-240-135.jpg",
            "title": "大型主机应用上的开放系统和中间件",
            "subtitle": "教育部-IBM专业综合改革项目",
            "view": 7809
        }, {
            "url": "./details/detail01.html",
            "img": "http://img.mukewang.com/5811cf4700010ea806000338-240-135.jpg",
            "title": "大型企业级数据库管理与优化",
            "subtitle": "教育部-IBM专业综合改革项目",
            "view": 11234
        }, {
            "url": "./details/detail01.html",
            "img": "http://img.mukewang.com/587dd3d50001112f06000338-240-135.jpg",
            "title": "IT服务管理",
            "subtitle": "教育部-IBM专业综合改革项目",
            "view": 341
        }, {
            "url": "./details/detail01.html",
            "img": "http://img.mukewang.com/5861d2500001d39406000338-240-135.jpg",
            "title": "大型主机系统管理的案例分析与实践",
            "subtitle": "教育部-IBM精品课程",
            "view": 276
        }, {
            "url": "./details/detail01.html",
            "img": "http://img.mukewang.com/5858a0370001890306000338-240-135.jpg",
            "title": "大型主机的存储管理和实施",
            "subtitle": "教育部-IBM精品课程",
            "view": 76
        }, {
            "url": "./details/detail01.html",
            "img": "http://img.mukewang.com/5873534e0001ecb106000338-240-135.jpg",
            "title": "DB2高级数据库管理",
            "subtitle": "教育部-IBM精品课程",
            "view": 42
        }, {
            "url": "./details/detail01.html",
            "img": "http://img.mukewang.com/587deb6f00013fa006000338-240-135.jpg",
            "title": "大型主机平台系统概论",
            "subtitle": "教育部-IBM精品课程",
            "view": 49
        }, {
            "url": "./details/detail01.html",
            "img": "http://img.mukewang.com/58733f730001a55406000338-240-135.jpg",
            "title": "J2EE企业级开发",
            "subtitle": "教育部-IBM精品课程",
            "view": 80
        }, {
            "url": "./details/detail01.html",
            "img": "http://img.mukewang.com/584685e600010f8a06000338-240-135.jpg",
            "title": "大型主机系统管理技能",
            "subtitle": "教育部-英特尔精品课程",
            "view": 81
        }, {
            "url": "./details/detail01.html",
            "img": "http://img.mukewang.com/586395f4000145e006000338-240-135.jpg",
            "title": "同济大学研究生优质课程",
            "subtitle": "软件测试",
            "view": 540
        }, {
            "url": "./details/detail01.html",
            "img": "http://img.mukewang.com/58329e8a0001068806000338-240-135.jpg",
            "title": "银行主机系统业应用案例",
            "subtitle": "同济大学优质课程",
            "view": 1715
        }]
    }

    //首页列表遍历显示
    var list = data.data;
    $.each(list, function(key, val) {
        $('.course-list').append('<div class="col-sm-3 col-xs-6"><a href="' + val.url + '" target="_blank"><div class="course-card"><img alt="' + val.title + '" src="' + val.img + '"><div class="course-info"><p>' + val.title + '</p><span>' + val.subtitle + '</span></div><div class="course-state"><i class="fa fa-eye"> ' + val.view + '</i></div></div></a></div>')
    })







})
