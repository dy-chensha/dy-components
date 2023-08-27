<template>
    <div class="container">
        <div class="form-wrap">
            <component
                v-for="(item, index) in formSetting"
                :key="index"
                :is="item.type"
                :configData="item"
                v-on="$listeners"
                :formData="formData"
                @handleEventChange="onHandleEventChange"
            ></component>
            <!-- 时间选择器 -->
            <slot name="timePicker"></slot>
            <!-- 日期选择器 -->
            <slot name="datePicker"></slot>
            <!-- 日期时间选择器 -->
            <slot name="dateTimePicker"></slot>
            <!-- 默认插槽 -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
import DyInput from './searchFormComponents/DyInput.vue'
import DySelect from './searchFormComponents/DySelect.vue'
export default {
    components: {
        DyInput,
        DySelect,
    },
    props: {
        formSetting: {
            type: Array,
            default() {
                return []
            },
        },
    },
    created() {
        this.initFormData()
    },
    data() {
        return {
            formData: {},
        }
    },
    methods: {
        initFormData() {
            this.formSetting.forEach((item) => {
                this.formData = {
                    ...this.formData,
                    [item.propName]: item.defaultValue,
                }
            })
        },
        onHandleEventChange(val) {
            this.formData = {
                ...this.formData,
                ...val,
            }
            console.log(this.formData)
        },
    },
}
</script>

<style></style>
