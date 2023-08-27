<template>
    <div class="container">
        <div class="form-wrap">
            <component
                v-for="(item, index) in formSetting"
                :key="index"
                :is="item.type"
                :configData="item"
                v-on="$listeners"
            ></component>
        </div>
    </div>
</template>

<script>
import DyInput from './searchFormComponents/DyInput.vue'
import DySelect from './searchFormComponents/DySelect.vue'
export default {
  components:{
    DyInput,
    DySelect
  },
  props:{
    formSetting:{
      type:Array,
      default(){
        return []
      }
    }
  },
    data() {
        return {
        }
    },
}
</script>

<style></style>
