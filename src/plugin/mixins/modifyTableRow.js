export default {
  data() {
    return {
      isModifyDialogVisible: false,
      modifyRow: {}
    }
  },
  methods: {
    handleModifyBtnClicked(row) {
      this.modifyRow = row
      this.isModifyDialogVisible = true
    },
    closeModifyDialog() {
      this.isModifyDialogVisible = false
    },
    handleModifyDialogConfirmed() {
      this.closeModifyDialog()
      this.search()
    }
  }
}
