module.exports = {

  // 'GET /api/user/*': 'http://1.1.1.1:8888',
  'GET /api/user/menus': {
    'code': 0,
    'data': {
        'deptName': '水鸟',
        'email': '892254112@qq.com',
        'menuAuth': [
            {
                'auth': 0,
                'icon': 'scene',
                'id': 1012971,
                'isMenu': 1,
                'menus': [
                    {
                        'auth': 0,
                        'icon': '',
                        'id': 1012972,
                        'isMenu': 1,
                        'name': '场景列表',
                        'pid': 1012971,
                        'sortVal': 10,
                        'url': '/manage/scene/list'
                    }
                ],
                'name': '场景管理',
                'pid': 0,
                'sortVal': 20,
                'url': '/manage/scene/business'
            }
        ],
        'realname': '水鸟',
        'username': 'shuiniao'
    },
    'msg': ''
  }
}
