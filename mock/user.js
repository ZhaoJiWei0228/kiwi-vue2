module.exports = {

  // 'GET /consec/user/*': 'http://10.190.24.65:7878',
  // 'GET /consec/satisfaction/*': 'http://10.190.24.65:7878'
  'GET /consec/user/menus': {
    'code': 0,
    'data': {
        'deptName': '安全产品技术部-信息安全部',
        'email': 'dingkaiqiang_i@didiglobal.com',
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
            },
            {
                'auth': 0,
                'icon': 'project',
                'id': 1012973,
                'isMenu': 1,
                'menus': [
                    {
                        'auth': 0,
                        'icon': '',
                        'id': 1012974,
                        'isMenu': 1,
                        'name': '场景任务',
                        'pid': 1012973,
                        'sortVal': 10,
                        'url': '/manage/tasks/scene'
                    },
                    {
                        'auth': 0,
                        'icon': '',
                        'id': 2299236,
                        'isMenu': 1,
                        'name': '标注任务',
                        'pid': 1012973,
                        'sortVal': 20,
                        'url': '/manage/tasks/mark'
                    }
                ],
                'name': '任务管理',
                'pid': 0,
                'sortVal': 30,
                'url': '/manage/tasks/list'
            },
            {
                'auth': 0,
                'icon': 'approve',
                'id': 1012968,
                'isMenu': 1,
                'menus': [
                    {
                        'auth': 0,
                        'icon': '',
                        'id': 1012970,
                        'isMenu': 1,
                        'name': '我的审核',
                        'pid': 1012968,
                        'sortVal': 10,
                        'url': '/manage/approve/own'
                    },
                    {
                        'auth': 0,
                        'icon': '',
                        'id': 1012969,
                        'isMenu': 1,
                        'name': '审核任务',
                        'pid': 1012968,
                        'sortVal': 20,
                        'url': '/manage/approve/list'
                    }
                ],
                'name': '审核管理',
                'pid': 0,
                'sortVal': 40,
                'url': '/manage/approve/list'
            },
            {
                'auth': 0,
                'icon': 'antibrush_yw',
                'id': 2306032,
                'isMenu': 1,
                'menus': [
                    {
                        'auth': 0,
                        'icon': '',
                        'id': 2306033,
                        'isMenu': 1,
                        'name': '基础服务',
                        'pid': 2306032,
                        'sortVal': 10,
                        'url': '/manage/service/base/service'
                    },
                    {
                        'auth': 0,
                        'icon': '',
                        'id': 2306034,
                        'isMenu': 1,
                        'name': '服务组',
                        'pid': 2306032,
                        'sortVal': 20,
                        'url': '/manage/service/group'
                    },
                    {
                      'auth': 0,
                      'icon': '',
                      'id': 2306035,
                      'isMenu': 1,
                      'name': '指标工具',
                      'pid': 2306032,
                      'sortVal': 20,
                      'url': '/manage/service/tool'
                  }
                ],
                'name': '服务管理',
                'pid': 0,
                'sortVal': 50,
                'url': '/manage/service/manage'
            },
            {
                'auth': 0,
                'icon': 'approve',
                'id': 1013590,
                'isMenu': 1,
                'menus': [
                    {
                        'auth': 0,
                        'icon': '',
                        'id': 1013589,
                        'isMenu': 1,
                        'name': '敏感词分类管理',
                        'pid': 1013590,
                        'sortVal': 10,
                        'url': '/manage/text/category'
                    },
                    {
                        'auth': 0,
                        'icon': '',
                        'id': 1013586,
                        'isMenu': 1,
                        'name': '敏感词管理',
                        'pid': 1013590,
                        'sortVal': 20,
                        'url': '/manage/text/sensitive'
                    },
                    {
                        'auth': 0,
                        'icon': '',
                        'id': 1013587,
                        'isMenu': 1,
                        'name': '词库管理',
                        'pid': 1013590,
                        'sortVal': 30,
                        'url': '/manage/text/thesaurus'
                    },
                    {
                        'auth': 0,
                        'icon': '',
                        'id': 2299517,
                        'isMenu': 1,
                        'name': '词库配置',
                        'pid': 1013590,
                        'sortVal': 40,
                        'url': '/manage/text/thesaurusConfig'
                    }
                ],
                'name': '文本过滤',
                'pid': 0,
                'sortVal': 60,
                'url': '/manage/text/thesaurus'
            },
            {
                'auth': 0,
                'icon': 'supervise',
                'id': 2298798,
                'isMenu': 1,
                'menus': [
                    {
                        'auth': 0,
                        'icon': '',
                        'id': 2298799,
                        'isMenu': 1,
                        'name': '数据大盘',
                        'pid': 2298798,
                        'sortVal': 10,
                        'url': '/manage/data/overview'
                    }
                ],
                'name': '数据中心',
                'pid': 0,
                'sortVal': 70,
                'url': '/manage/data/overview'
            },
            {
                'auth': 0,
                'icon': 'article1',
                'id': 1014023,
                'isMenu': 1,
                'menus': [
                    {
                        'auth': 0,
                        'icon': '',
                        'id': 1014022,
                        'isMenu': 1,
                        'name': '整体记录',
                        'pid': 1014023,
                        'sortVal': 10,
                        'url': '/manage/records/list'
                    },
                    {
                        'auth': 0,
                        'icon': '',
                        'id': 1014024,
                        'isMenu': 1,
                        'name': '文本记录',
                        'pid': 1014023,
                        'sortVal': 20,
                        'url': '/manage/records/text'
                    },
                    {
                        'auth': 0,
                        'icon': '',
                        'id': 1014025,
                        'isMenu': 1,
                        'name': '图片记录',
                        'pid': 1014023,
                        'sortVal': 30,
                        'url': '/manage/records/image'
                    }
                ],
                'name': '请求记录',
                'pid': 0,
                'sortVal': 80,
                'url': '/'
            },
            {
                'auth': 0,
                'icon': 'knowledge',
                'id': 2311885,
                'isMenu': 1,
                'menus': [
                    {
                        'auth': 0,
                        'icon': '',
                        'id': 2311886,
                        'isMenu': 1,
                        'name': '标准库',
                        'pid': 2311885,
                        'sortVal': 10,
                        'url': '/manage/knowledgeBase/standard'
                    }
                ],
                'name': '知识库',
                'pid': 0,
                'sortVal': 90,
                'url': '/manage/knowledgeBase/standard'
            }
        ],
        'realname': '丁开强',
        'username': 'dingkaiqiang_i'
    },
    'msg': ''
  }
}
