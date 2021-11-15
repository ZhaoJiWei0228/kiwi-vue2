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
