/**
 * 组件通用配置
 */

export const REQUIRED_MESSAGE = '此为必填项' // 必填项提示信息
export const REQUIRED_RULE = { required: true, message: REQUIRED_MESSAGE } // 必填项 rule

// 工单状态
export const STATUS_UNRECEIVED = 0 // 工单状态：未领取
export const STATUS_PROCESSED = 1 // 工单状态：已处理
export const STATUS_RECEIVED = 2 // 工单状态：已领取

// 分类
export const CATEGORY_TEXT = 0 // 分类：文本
export const CATEGORY_IMAGE = 1 // 分类：图片
export const CATEGORY_VIDEOURL = 2 // 分类：视频链接
export const CATEGORY_AUDIOURL = 3 // 分类：音频链接

export const FIELD_TYPES = [
    'String',
    'Long',
    'Boolean',
    'StringArray',
    'Date',
    'Float',
    'Text'
] // 字段类型

export const BASE_PAGE_SIZE = 50 // 通用 page-size
export const BASE_PAGE_SIZES = [10, 20, 50, 100, 200] // 通用 page-sizes

export const BLACKLIST = '0' // 黑名单
export const WHITELIST = '1' // 白名单
export const GREYLIST = '2' // 灰名单
export const BLACK_OR_WHITE_LIST = [BLACKLIST, WHITELIST, GREYLIST] // 名单列表
export const BLACK_OR_WHITE_LIST_TEXT = {
    [BLACKLIST]: '黑名单',
    [WHITELIST]: '白名单',
    [GREYLIST]: '灰名单'
} // 名单文本
export const MATCH_TYPE_WORD = 0 // 词性：单词
export const MATCH_TYPE_PHRASE = 1 // 词性：短语
export const MATCH_TYPE = [MATCH_TYPE_WORD, MATCH_TYPE_PHRASE] // 词性
export const MATCH_TYPE_TEXT = {
    [MATCH_TYPE_WORD]: '单词',
    [MATCH_TYPE_PHRASE]: '短语'
} // 词性

export const SENSITIVE_STATUS_ENABLE = '0' // 敏感词状态：启用
export const SENSITIVE_STATUS_DISABLE = '1' // 敏感词状态：禁用
export const SENSITIVE_STATUS = [
    SENSITIVE_STATUS_ENABLE,
    SENSITIVE_STATUS_DISABLE
] // 敏感词状态
export const SENSITIVE_STATUS_TEXT = {
    [SENSITIVE_STATUS_ENABLE]: '启用',
    [SENSITIVE_STATUS_DISABLE]: '关闭'
} // 敏感词状态文本

export const SENSITIVE_MATCH_METHOD_FUZZY = 0 // 敏感词匹配方式：模糊
export const SENSITIVE_MATCH_METHOD_EXACT = 1 // 敏感词匹配方式：精确
export const SENSITIVE_MATCH_METHODS = [
    SENSITIVE_MATCH_METHOD_FUZZY,
    SENSITIVE_MATCH_METHOD_EXACT
] // 敏感词匹配方式
export const SENSITIVE_MATCH_METHODS_TEXT = {
    [SENSITIVE_MATCH_METHOD_FUZZY]: '模糊',
    [SENSITIVE_MATCH_METHOD_EXACT]: '精确'
} // 敏感词匹配方式文本

// Datepicker daterange shortcuts
export const DATERANGE_SHORTCUTS_TODAY = {
    text: '最近一天',
    onClick(picker) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 1)
        picker.$emit('pick', [start, end])
    }
} // shortcus：今天
export const DATERANGE_SHORTCUTS_ONE_WEEK = {
    text: '最近一周',
    onClick(picker) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
        picker.$emit('pick', [start, end])
    }
} // shortcus：最近一周
export const DATERANGE_SHORTCUTS_30_DAYS = {
    text: '最近30天',
    onClick(picker) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
        picker.$emit('pick', [start, end])
    }
} // shortcus：最近30天
export const DATERANGE_SHORTCUTS_60_DAYS = {
  text: '最近60天',
  onClick(picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 60)
      picker.$emit('pick', [start, end])
  }
} // shortcus：最近60天
export const DATERANGE_SHORTCUTS_90_DAYS = {
    text: '最近90天',
    onClick(picker) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
        picker.$emit('pick', [start, end])
    }
} // shortcus：最近90天
export const DATERANGE_SHORTCUTS_THIS_MONTH = {
    text: '本月',
    onClick(picker) {
        const end = new Date()
        const start = new Date()
        start.setDate(1)
        start.setHours(0)
        start.setMinutes(0)
        start.setSeconds(0)
        start.setMilliseconds(0)
        picker.$emit('pick', [start, end])
    }
} // shortcus：本月
export const DATERANGE_SHORTCUTS_LAST_MONTH = {
    text: '上月',
    onClick(picker) {
        const end = new Date()
        const start = new Date()
        start.setMonth(start.getMonth() - 1)
        start.setDate(1)
        start.setHours(0)
        start.setMinutes(0)
        start.setSeconds(0)
        start.setMilliseconds(0)
        end.setDate(0)
        end.setHours(0)
        end.setMinutes(0)
        end.setSeconds(0)
        end.setMilliseconds(0)
        picker.$emit('pick', [start, end])
    }
} // shortcus：上月

export const DICT_TASK_TYPE = ['审核', '管控', '质检']

export const SCENE_FIELD_SOURCE = [{ label: '业务入参', value: 0 }, { label: '保留字段', value: 1 }, { label: '补全字段', value: 2 }, { label: '扩展字段', value: 3 }, { label: '服务补全', value: 4 }, { label: '函数补全', value: 5 }]

export const DATA_TYPE_LIST = [{label: '文本', value: 0}, {label: '图片', value: 1}, {label: '视频', value: 2}, {label: '音频', value: 3}]

export const DATA_STATUS_LIST = [{label: '未配置', value: 0}, {label: '已配置', value: 1}, {label: '标注中', value: 2}, {label: '已标注', value: 3}, {label: '执行中', value: 4}, {label: '入库中', value: 5}, {label: '已入库', value: 6}]

export const DATA_TYPE_FMT = ['文本', '图片', '视频', '音频']

export const DATA_STATUS_FMT = ['未配置', '已配置', '标注中', '已标注', '执行中', '入库中', '已入库']

export const DATA_SOURCE_FMT = ['外部导入', '业务线抽取']

export const UPLOAD_STATUS_FMT = ['未上传', '上传中', '上传失败', '上传成功']

export const DATA_SOURCE_LIST = [{label: '外部导入', value: 0}, {label: '业务线抽取', value: 1}]

export const MARK_TYPES = [{label: 'IAA标注', value: 1}, {label: '常规标注', value: 2}]

export const MARK_TYPE_FMT = ['比对标注', 'IAA标注', '常规标注']

export const COM_TYPE_FMT = ['', '人工比对模型', '人工比对人工']

export const MARK_STATUS_FMT = ['未标注', '标注中', '已标注']

export const MARK_ROUNDS_FMT = ['', '一轮标注', '二轮标注', '三轮标注', '四轮标注']

export const COM_TYPES = [{label: '人工比对模型', value: 1}, {label: '人工比对人工', value: 2}]

export const CPT_TASK_TYPE = ['投诉', '质检']

export const APL_TASK_TYPE = ['申诉', '质检']

export const CPTAPL_TYPES = [{label: '投诉', value: 4}, {label: '申诉', value: 5}]

export const QUALITY_OBJ_TYPE = ['审核/管控任务', '用户管控任务', '投诉任务', '申诉任务']

export const LABEL_LEVEL_FMT = ['', '一级标签', '二级标签', '三级标签']

export const ACCOUNT_STATUS = ['暂无授权接口', '验证失败', '验证失败', '验证成功']

export const IF_CONTROL = ['是', '否']

export const SEARCH_RESULT_TYPE = ['', '等待中', '搜索中', '已完成']

export const ACCOUNT_STATUS_FAIL = ['', 'AppID或秘钥错误', '未配置白名单', '']

export const ACCORDANCE_STATUS_FMT = ['', '不一致', '一致']

export const AUDIT_RESULT_TYPE = ['安全审核', '质量审核']

export const CALLBACK_LIST = [{label: '一级标签', value: 1}, {label: '二级标签', value: 2}, {label: '三级标签', value: 3}]

export const CALLBACK_RESULT_TYPE = [{label: '老安全审核（兼容）', value: 0}, {label: '安全审核', value: 1}, {label: '质量审核', value: 2}, {label: '安全及质量审核', value: 3}]

export const ACCESS_STATUS = [{label: '已下线', value: '0'}, {label: '接入中', value: '1'}, {label: '已接入', value: '2'}]

export const COMPLIANCE = [{label: '覆盖不合规', value: '0'}, {label: '覆盖合规', value: '1'}, {label: '不覆盖不合规', value: '2'}]

export const SCENE_TYPE = [{label: 'UGC', value: '1'}, {label: 'PGC', value: '2'}]

export const UGC_TYPE = [{label: 'U1:基础功能型UGC', value: '4'}, {label: 'U2：发帖评论类UGC', value: '5'}, {label: '3.1:IM群', value: '6'}, {label: '3.2:一对一即时消息', value: '7'}, {label: '3.3:在线客服（IM机器人/人工）', value: '8'}, {label: '4:个人（商户）信息', value: '9'}, {label: '6.1:云盘', value: '12'}, {label: '6.2:网盘', value: '13'}, {label: '6.3:网站', value: '14'}]

export const PGC_TYPE = [{label: 'P1:基础功能型PGC', value: '1'}, {label: 'P2：运营类PGC', value: '2'}, {label: 'P3：第三方PGC', value: '3'}, {label: '3.1:IM群', value: '6'}, {label: '3.3:在线客服（IM机器人/人工）', value: '8'}, {label: '5.1:服务功能类', value: '10'}, {label: '5.2:营销运营类', value: '11'}, {label: '6.1:云盘', value: '12'}, {label: '6.2:网盘', value: '13'}, {label: '6.3:网站', value: '14'}]

export const ACCESS_PLAN = ['纯机器审核', '机器审核 + 线下管控', '机器审核 + 人工审核（先审后发）+ 线上管控', '机器审核 + 人工审核（先发后审）+ 线上管控']

export const PROD_PERSON = ['出行用户', '车主用户', '滴滴用户', '外部用户', '第三方用户', '内部员工']

export const DISPLAY_PERSON = ['滴滴乘客', '滴滴车主', '滴滴用户', '外部用户', '内部用户', '第三方用户']

export const CONTENT_FORMAT_TXT = ['单文本', '多文本']

export const CONTENT_FORMAT_PIC = ['单图片', '多图片']

export const CONTENT_FORMAT_AUD = ['单音频', '多音频']

export const CONTENT_FORMAT_VUD = ['单视频', '多视频']

export const AUDIT_STATEGY = ['机审', '人审']

export const ACCOUNT_CHECKSTATUS = ['暂无权限接口', 'AppID或秘钥错误', '未配置白名单', '验证成功']

export const ACCOUNT_TYPE = ['微信订阅号', '微信服务号', 'B站', '今日头条号', '即刻', '微信视频号', '微博', '快手', '抖音', '知乎', '支付宝生活号', '其他']

export const ACCOUNT_CATEGORY = ['业务线账号', '区域账号', '职能部门账号', '集团账号']

export const ACCOUNT_ENTERPRISE = ['CTO', '体验服务发展平台（ESE）', '总裁', '普惠', '橙心优选', '滴滴云', '网约车', '车服', '金融', '其他']

export const PGC_UGC_TYPE = [{label: 'P1:基础功能型PGC', value: '1'}, {label: 'P2：运营类PGC', value: '2'}, {label: 'P3：第三方PGC', value: '3'}, {label: '3.3:在线客服（IM机器人/人工）', value: '8'}, {label: '5.1:服务功能类', value: '10'}, {label: '5.2:营销运营类', value: '11'}, {label: '6.1:云盘', value: '12'}, {label: '6.2:网盘', value: '13'}, {label: '6.3:网站', value: '14'}, {label: 'U1:基础功能型UGC', value: '4'}, {label: 'U2：发帖评论类UGC', value: '5'}, {label: '3.1:IM群', value: '6'}, {label: '3.2:一对一即时消息', value: '7'}, {label: '4:个人（商户）信息', value: '9'}]

export const CYCLE = [{label: '滑动周期', value: 0}, {label: '自然日', value: 1}]

export const TASK_TYPE_LIST = ['管控', '审核', '质检', '标注', '用户管控', '投诉', '申诉']

export const ALARM_INDEX_LIST = ['命中量', '命中率']

export const NPS_LOW_LIST = ['审核操作繁琐复杂', '页面信息凌乱缺失', '视觉效果令人疲劳', '系统响应卡顿', '其他']

export const NPS_HIGH_LIST = ['审核操作便捷', '页面布局清晰', '视觉体验良好', '系统响应流畅', '其他']

export const AFFECT_TYPE_LIST = [{label: '机器处置', value: 0}, {label: '机器辅助', value: 1}]
