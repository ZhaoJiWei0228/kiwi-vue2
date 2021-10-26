export const APP_AJAX_TIMEOUT = 0;
export const APP_AJAX_BASEURL = '/consec';

export const APP_BASEURL = '/';
export const APP_ROUTE_MODE = 'history';
export const APP_ROUTE_SEC = 'app-router';

export const APP_THEME_DEFAULT = 'default';
export const APP_THEME_BLACK = 'black';
export const APP_THEME_BLUE = 'blue';
export const APP_THEME_ORANGE = 'orange';

export const APP_LANG_ZH = 'zh';

export const APP_EVENT_PREFIX = 'app-event';

export const APP_SERVER_ERROR = '系统繁忙，请稍后再试';
export const APP_PROCESS_ERROR = '接口处理错误';
export const APP_FORMAT_ERROR = '接口数据格式错误';
export const APP_FORMDATA_ERROR = '请使用FormData格式';
export const APP_PROCESS_HINT = '请检查参数，接口是否正确';
export const APP_FORMAT_HINT = '请检查数据返回格式';

export const DATE_FORMAT = 'YYYY-MM-DD';
export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

// 数据字典
export const CODE_TYPE_PROTOCOL = 10000; // URL访问协议
export const CODE_TYPE_METHOD = 10010; // URL请求方式
export const CODE_TYPE_AUDIT = 10020; // 数据处理状态
export const CODE_TYPE_DATA_LEVEL = 10030; // 数据级别
export const CODE_TYPE_BOOLEAN = 10040; // 布尔状态
export const CODE_TYPE_SIGNATURE_STATUS = 10050; // URL签名验证状态
export const CODE_TYPE_POSITION = 10060; // URL参数位置
export const CODE_TYPE_LEVEL = 10070; // 规则优先级
export const CODE_TYPE_PARAM_STATUS = 10090; // URL参数状态
export const CODE_TYPE_RULE_TYPE = 10100; // URL规则类型
export const CODE_TYPE_DOMAIN_TYPE = 10130; // 域名类型
export const CODE_TYPE_DOMAIN_SOURCE = 10140; // 域名数据来源
export const CODE_TYPE_DOMAIN_RES = 10150; // 域名解析

export const DARA_STATUS_ON = 1; // 数据启用/有效数据
export const DARA_STATUS_OFF = 0; // 禁用
export const DARA_STATUS_IGNORE = 9; // 删除/忽略

export const DATA_STATUS_OPTIONS = [{
        code: 1,
        name: '启用'
    },
    {
        code: 0,
        name: '禁用'
    }
];

export const TASK_TYPE_SCENE = 'scene'
export const TASK_TYPE_MARK = 'mark'
