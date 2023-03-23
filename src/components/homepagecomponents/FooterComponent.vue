<template>
  <section>
    <input type="text" v-model="message">
    <div class="flex bg-blue justify-around">
      <div>
        <h1 class="text-[35px] text-white mt-24 w-[450px] font-bold">
          Quản lý tài chính cá nhân thật dễ dàng
        </h1>
        <p class="text-white">Khi đã có MoneyLover.</p>
      </div>
      <img
        class="w-[215px] h-[305px] mt-16"
        src="https://moneylover.me/vi/img/MOCKUP@4x.png"
        alt=""
      />
    </div>
    <div class="flex justify-around h-[50px] mt-16">
        <p>© 2022 GDSC Technology Co., Ltd. All rights reserved.</p>
        <div class="flex">
            <p class="">Tuyển dụng</p>
            <p class="ml-2">Blog</p>
            <p class="ml-2">Quyền riêng tư </p>
        </div>
    </div>
  </section>
</template>
<script>
import { ref } from 'vue';
  export default{
    setup(){
        const message =ref('')
        console.log(message);
        return{
          message
        }
      }
  }
</script>
