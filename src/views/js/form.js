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
      {label:'成都',value:'chengdu'}
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
        })
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