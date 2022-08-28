<template>
  <div id="app">
    <TdsLink type="primary" href="https://www.moselikk.com">我的个人主页</TdsLink>
    <br />
    <TdsButton @click="handleClick">一般按钮</TdsButton>
    <br />
    <TdsButton type="warning">警告按钮</TdsButton>
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
