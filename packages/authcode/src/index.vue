<template>
  <div>
    <h1>{{title ? title : '请输入验证码'}}</h1>
    <div ref="inputList">
      <input type="text" maxlength="1" autofocus="autofocus" v-for="(item,index) in code" :key="index" v-model.number="code[index]" @keyup="handleKey(index)" />
    </div>
    <br />
    <button @click="handleSubmit">提交</button>
  </div>
</template>

<script>
export default {
  name: 'TdsAuthCode',
  props:{
    title: String,
    length:{
      type: String,
      default: '4'
    } 
  },
  data(){
    return{
      code: []
    }
  },
  created(){
    const length = Number(this.length)
    this.code = new Array(length)
  },
  methods: {
    handleSubmit(){
      // 处理数据，发请求
      alert('提交成功')
    },
    handleKey(index){
      const inputNodes = this.$refs.inputList.childNodes
      if(index==(inputNodes.length-1)){
        inputNodes[index].blur()
        this.$emit('typeend', this.code.join(''))
      }
      if(inputNodes[index].value){
        if(index<(inputNodes.length-1)){
          inputNodes[index+1].focus()
        }
      }else if(!inputNodes[index].value && index>0){
        inputNodes[index-1].focus()
      }
    }
  },
}
</script>

<style scoped>
input{
  height: 50px;
  width: 30px;
  line-height: 40px;
  font-size: 40px;
  margin-left: 15px;
  text-align: center;
  border: 1px solid #000;
  border-radius: 5px;
}
input:nth-child(1){
  margin-left: 0;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
}
input[type='number'] {
    -moz-appearance: textfield !important;
}
</style>