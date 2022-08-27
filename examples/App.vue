<template>
  <div id="app">
    <lyLink type="primary" href="https://www.moselikk.com">我的个人主页</lyLink>
    <br />
    <TdsButton @click="handleClick">一般按钮</TdsButton>
    <br />
    <TdsButton type="waning">警告按钮</TdsButton>
    <br />
    <TdsButton @click="handleClick" size="medium" type="success">中按钮</TdsButton>
    <br />
    <TdsButton @click="handleClick" size="big" >大按钮</TdsButton>
    <TdsAuthCode length="6"></TdsAuthCode>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    handleClick(){
      alert("按钮被点击了")
    }
  }
}
</script>

<style scoped>
#app{
  text-align: center;
}
</style>
