<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column
            v-for="(item, index) in tableColumns"
            :key="index"
            :label="item.columnName"
            :prop="item.columnCode"
        >
            <template slot="header" slot-scope="scope">
                <slot v-if="item.showHeader" :name="item.headerSlotProp"></slot>
				<div v-else>{{item.columnName}}</div>
            </template>
            <template slot-scope="scope">
				<template v-if="item.contentSlotProp">
					<slot :name="item.contentSlotProp" :scope="scope" ></slot>
				</template>
                <p v-else>{{ scope.row[item.columnCode] }}</p>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    props: {
        tableColumns: {
            type: Array,
            default() {
                return []
            },
        },
		requestFun:{
			type:Function,
			required: true,
		}
    },
	created(){
		this.getData()
	},
    data() {
        return {
            tableData: [
            ],
        }
    },
	methods:{
		getData(){
			this.requestFun({}).then((res)=>{
				this.tableData=res
			})
		}
	}
}
</script>
