<template>
    <div class="at-form-component" :class="configData.className || ''">
        <el-select
            v-model="searchVal"
            :size="configData.size || ''"
            :placeholder="configData.placeholder || ''"
            v-bind="propAttrs"
            @change="handleSearch"
            popper-class="virtualSelect"
        >
            <virtual-list v-if="options.length>200" style="max-height: 245px; overflow-y: auto;"
            :data-key="'value'"
            :data-sources="options"
            :data-component="itemComponent"
            :keeps="50"
            :extra-props="{
                label: 'label',
                value: 'value'
            }" /> 
            <el-option
                v-else
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
            >
            </el-option>
        </el-select>
    </div>
</template>
<script>
import minxi from './mixin'
// 单个文件引入
import virtualList from 'vue-virtual-scroll-list'
import ElOptionNode from './DyVirtualOption.vue';

export default {
    components: { 'virtual-list': virtualList,ElOptionNode },

    data() {
        return {
            options: this.configData.defaultOptions || [],
            itemComponent: ElOptionNode,
        }
    },
    mixins: [minxi],
    computed: {
        propAttrs() {
            let attrs = {}
            if (this.configData.clearable) {
                attrs = {
                    ...attrs,
                    clearable: true,
                }
            }

            if (this.configData.filterable) {
                attrs = {
                    ...attrs,
                    filterable: true,
                }
            }
            if (this.configData.filterable && this.configData.filterMethod) {
                attrs = {
                    ...attrs,
                    'filter-method': this.configData.filterMethod,
                }
            }
            if (this.configData.multiple) {
                attrs = {
                    ...attrs,
                    multiple: true,
                }
            }
            if (this.configData.multiple && this.configData.multipleLimit) {
                attrs = {
                    ...attrs,
                    'multiple-limit': this.configData.multipleLimit,
                }
            }
            if (this.configData.multiple && this.configData.collapseTags) {
                attrs = {
                    ...attrs,
                    'collapse-tags': true,
                }
            }

            return attrs
        },
    },
    async created() {
        //   如果不能给初始值  那就传入一个方法去获取值
        if (
            !this.configData.defaultOptions ||
            this.configData.defaultOptions.length === 0
        ) {
            this.options = await this.configData.getInitData()
        }
    },
}
</script>
<style lang='less' >
.virtualSelect .el-scrollbar .el-scrollbar__bar.is-vertical{
    width: 0;
}
</style>