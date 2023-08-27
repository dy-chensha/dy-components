<template>
    <div>
        <dy-form :formSetting="formSetting"  @handleEventChange="onHandleEventChange" >
        </dy-form>
        <dy-table :requestFun="requestFun" :tableColumns="tableColumns">
            <div slot="dy-header">测试表头</div>
            <template #dy-content="props">
                {{ props.scope.row.name }}
            </template>
        </dy-table>
    </div>
</template>

<script>
import { tableColumns } from './js/table'
import { formSetting } from './js/form.js'
import DyTable from '../components/DyTable.vue'
import DyForm from '../components/DyForm.vue'
export default {
    components: { DyTable, DyForm },
    data() {
        return {
            tableColumns: tableColumns,
            formSetting: formSetting,
            mockData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                },
            ],
            formData:{}
        }
    },
    methods: {
        requestFun(formData) {
            return new Promise((reslove, reject) => {
                console.log(formData);
                setTimeout(() => {
                    reslove(this.mockData)
                }, 500)
            })
        },
        onHandleEventChange(val){
            this.formData = {
                ...this.formData,
                ...val
            }
            console.log(this.formData);
        }
    },
}
</script>

<style></style>
