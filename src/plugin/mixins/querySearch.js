export default {
  methods: {

    /**
     * 返回模糊查询方法
     * @param {Array} list 查询的所有数据
     */
    querySearch(list) {
      return (queryString, callback) => {
        const results = queryString
          ? list.filter(this.createFilter(queryString))
          : list
        callback(results.map(ele => ({ value: ele })))
      }
    },

    /**
     * 创建查询所用过滤器
     * @param {String} queryString 要查询的字符串
     */
    createFilter(queryString) {
      return str =>
        str
          ? str.toLowerCase().indexOf(queryString.toLowerCase()) !== -1
          : false
    }
  }
}
