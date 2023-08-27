export default {
 data() {
    return {
      searchVal: this.configData.defaultValue
    };
  },
 props: {
    configData: {
      type: Object,
      required: true
    },
    formData: {
      type: Object,
      required: true
    },
  },
  created(){
    this.initWatch()
  },
  methods: {
    translateData(data){
      let obj = {}
      data.forEach((item)=>{
        obj[item]=this.formData[item]
      })
      return obj
    },
    handleSearch() {
      this.$emit("handleEventChange", {
        [this.configData.propName]: this.searchVal,
      });
    },
    // 初始化动态监听需要监听的字段
    initWatch(){
      if (this.configData.linkValue&&this.configData.linkValue.length>0) {
        this.configData.linkValue.forEach((item,index)=>{
          const watchKey = `formData.${item}`
          this.$watch(watchKey,async(val, oldVal) => {
            console.log(val);
            if (val === oldVal || Number.isNaN(val)) {
              return
            }
            let tslObj = this.translateData(this.configData.linkValue)
            this.searchVal = await this.configData.linkValueFun(tslObj)
            // 改变的数据需要手动传递给总数据
            this.handleSearch(this.searchVal)
          })
        })
      }
    }
  }
};