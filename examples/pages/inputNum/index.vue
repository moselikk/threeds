<template>
  <div>
    <h1>验证码输入框</h1>
    <div ref="inputList">
      <input type="text" maxlength="1" autofocus="autofocus" v-for="(item,index) in code" :key="index" v-model.number="code[index]" @keyup="handeleKey(index)" />
    </div>
    <br />
    <button @click="logRed">111</button>
  </div>
</template>

<script>
export default {
  name: 'inputNum',
  props:{
    length: String
  },
  data(){
    return{
      num: 1,
      code: ['','','','']
    }
  },
  mounted(){
    const length = Number(this.length)
    if(this.length){
      this.code = new Array(length)
    }
    console.log('加载了');
  },
  methods: {
    logRed(){
      console.log(this.$refs.inputList.childNodes[0]);
    },
    handeleKey(index){
      console.log(index);
      const inputNodes = this.$refs.inputList.childNodes
      if(index==(inputNodes.length-1)){
        inputNodes[index].blur()
        // this.typeend(this.code.join(''))
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
  watch:{
    length: function(){

    },
    num: function(){
      console.log('111');
    }
  }
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