<template>
  <section class="flex mt-4 justify-between">
    <img class="ml-8" src="https://moneylover.me/vi/img/logo.svg" alt="" />
    <nav class="">
      <RouterLink to="/" class="focus:text-blue">Home</RouterLink>
      <RouterLink to="/AboutPage" class="focus:text-blue ml-8">About</RouterLink>
    </nav>
    <div>
      <select>
        <option value="">English</option>
        <option value="">Việt Nam</option>
      </select>
      <RouterLink to="/loginPage"><button class="text-white bg-blue mr-8 rounded" @click="onLogin">Đăng nhập</button></RouterLink>
    </div>
  </section>
</template>
<script>
  export default{
   methods:{
    onLogin(){
      this.$emit('onLogin')
    },
   }
  }
</script>
