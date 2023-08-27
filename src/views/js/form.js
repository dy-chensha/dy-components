export const formSetting = [
  {
    type:'DyInput',
    defaultValue:'',
    propName: "name", //字段名
    size:'small'
  },
  {
    type:'DySelect',
    defaultValue:'',
    propName: "address1", //字段名
    clearable:true,
    defaultOptions:[
    ],
    getInitData(){
      let arr = []
      for (let i = 0; i < 20; i++) {
        arr.push({label:'上海'+i,value:'shanghai'+i},)
      }
      return new Promise((reslove,reject)=>{
        setTimeout(()=>{
          reslove(arr)
        },2000)
      })
    }
  },{
    type:'DySelect',
    defaultValue:'',
    propName: "address2", //字段名
    clearable:true,
    defaultOptions:[
    ],
    getInitData(){
      return new Promise((reslove,reject)=>{
        setTimeout(()=>{
          reslove([
            {label:'上海',value:'shanghai'},
            {label:'南京',value:'nanjing'},
            {label:'北京',value:'bejing'},
            {label:'海南',value:'hainan'},
          ])
        },6000)
      })
    }
  },
]