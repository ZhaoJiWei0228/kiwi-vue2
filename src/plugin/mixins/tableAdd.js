/**
 * 与“添加”相关的方法
 */
export default {
  data() {
    return {
      isAddDialogVisible: false
    }
  },
  methods: {
    handleAddBtnClicked() {
      this.isAddDialogVisible = true
    },
    closeAddDialog() {
      this.isAddDialogVisible = false
    },
    handleAddDialogConfirmed() {
      this.closeAddDialog()
      this.search()
    }
  }
}
