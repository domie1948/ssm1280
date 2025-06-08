
var projectName = '大学生兼职平台';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.jsp'
}, 
{
	name: '我的收藏',
	url: '../storeup/list.jsp'
}
]


var indexNav = [

{
	name: '企业',
	url: './pages/qiye/list.jsp'
}, 
{
	name: '兼职信息',
	url: './pages/jianzhixinxi/list.jsp'
}, 
{
	name: '职前提醒',
	url: './pages/zhiqiantixing/list.jsp'
}, 

{
	name: '留言反馈',
	url: './pages/messages/list.jsp'
}
]

var adminurl =  "http://localhost:8080/jspm6z539/index.jsp";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除","审核"],"menu":"大学生","menuJump":"列表","tableName":"daxuesheng"}],"menu":"大学生管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论","审核"],"menu":"企业","menuJump":"列表","tableName":"qiye"}],"menu":"企业管理"},{"child":[{"buttons":["查看","删除"],"menu":"求职简历","menuJump":"列表","tableName":"qiuzhijianli"}],"menu":"求职简历管理"},{"child":[{"buttons":["查看","删除","查看评论"],"menu":"兼职信息","menuJump":"列表","tableName":"jianzhixinxi"}],"menu":"兼职信息管理"},{"child":[{"buttons":["删除","查看"],"menu":"投递简历","menuJump":"列表","tableName":"toudijianli"}],"menu":"投递简历管理"},{"child":[{"buttons":["查看","删除"],"menu":"学生留言","menuJump":"列表","tableName":"xueshengliuyan"}],"menu":"学生留言管理"},{"child":[{"buttons":["查看","删除"],"menu":"签订合约","menuJump":"列表","tableName":"qiandingheyue"}],"menu":"签订合约管理"},{"child":[{"buttons":["查看","删除"],"menu":"学生法律援助","menuJump":"列表","tableName":"xueshengfalvyuanzhu"}],"menu":"学生法律援助管理"},{"child":[{"buttons":["查看","删除"],"menu":"企业法律援助","menuJump":"列表","tableName":"qiyefalvyuanzhu"}],"menu":"企业法律援助管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"信用等级评定","menuJump":"列表","tableName":"xinyongdengjipingding"}],"menu":"信用等级评定管理"},{"child":[{"buttons":["查看","删除"],"menu":"职前提醒","menuJump":"列表","tableName":"zhiqiantixing"}],"menu":"职前提醒管理"},{"child":[{"buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"企业列表","menuJump":"列表","tableName":"qiye"}],"menu":"企业模块"},{"child":[{"buttons":["查看","投递简历","学生留言"],"menu":"兼职信息列表","menuJump":"列表","tableName":"jianzhixinxi"}],"menu":"兼职信息模块"},{"child":[{"buttons":["查看"],"menu":"职前提醒列表","menuJump":"列表","tableName":"zhiqiantixing"}],"menu":"职前提醒模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"求职简历","menuJump":"列表","tableName":"qiuzhijianli"}],"menu":"求职简历管理"},{"child":[{"buttons":["查看","删除"],"menu":"投递简历","menuJump":"列表","tableName":"toudijianli"}],"menu":"投递简历管理"},{"child":[{"buttons":["查看","删除"],"menu":"学生留言","menuJump":"列表","tableName":"xueshengliuyan"}],"menu":"学生留言管理"},{"child":[{"buttons":["查看","审核"],"menu":"签订合约","menuJump":"列表","tableName":"qiandingheyue"}],"menu":"签订合约管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生法律援助","menuJump":"列表","tableName":"xueshengfalvyuanzhu"}],"menu":"学生法律援助管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"信用等级评定","menuJump":"列表","tableName":"xinyongdengjipingding"}],"menu":"信用等级评定管理"},{"child":[{"buttons":["查看","审核"],"menu":"职前提醒","menuJump":"列表","tableName":"zhiqiantixing"}],"menu":"职前提醒管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"企业列表","menuJump":"列表","tableName":"qiye"}],"menu":"企业模块"},{"child":[{"buttons":["查看","投递简历","学生留言"],"menu":"兼职信息列表","menuJump":"列表","tableName":"jianzhixinxi"}],"menu":"兼职信息模块"},{"child":[{"buttons":["查看"],"menu":"职前提醒列表","menuJump":"列表","tableName":"zhiqiantixing"}],"menu":"职前提醒模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"大学生","tableName":"daxuesheng"},{"backMenu":[{"child":[{"buttons":["查看","审核"],"menu":"求职简历","menuJump":"列表","tableName":"qiuzhijianli"}],"menu":"求职简历管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"兼职信息","menuJump":"列表","tableName":"jianzhixinxi"}],"menu":"兼职信息管理"},{"child":[{"buttons":["查看","删除","审核"],"menu":"投递简历","menuJump":"列表","tableName":"toudijianli"}],"menu":"投递简历管理"},{"child":[{"buttons":["查看","删除","审核"],"menu":"学生留言","menuJump":"列表","tableName":"xueshengliuyan"}],"menu":"学生留言管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"签订合约","menuJump":"列表","tableName":"qiandingheyue"}],"menu":"签订合约管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"企业法律援助","menuJump":"列表","tableName":"qiyefalvyuanzhu"}],"menu":"企业法律援助管理"},{"child":[{"buttons":["查看"],"menu":"信用等级评定","menuJump":"列表","tableName":"xinyongdengjipingding"}],"menu":"信用等级评定管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"职前提醒","menuJump":"列表","tableName":"zhiqiantixing"}],"menu":"职前提醒管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"企业列表","menuJump":"列表","tableName":"qiye"}],"menu":"企业模块"},{"child":[{"buttons":["查看","投递简历","学生留言"],"menu":"兼职信息列表","menuJump":"列表","tableName":"jianzhixinxi"}],"menu":"兼职信息模块"},{"child":[{"buttons":["查看"],"menu":"职前提醒列表","menuJump":"列表","tableName":"zhiqiantixing"}],"menu":"职前提醒模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"企业","tableName":"qiye"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
