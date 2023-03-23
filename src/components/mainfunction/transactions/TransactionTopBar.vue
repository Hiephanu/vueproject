<template>
  <div class="flex justify-between">
      <h1 class="text-[32px] text-blue font-bold">
        Yours Transaction
      </h1>
      <div class="mt-2">
        <input type="text" placeholder="Search" class="border-2 border-gray focus:border-blue rounded-full w-56 py-1">
      </div>
      <button class="text-white bg-blue mt-3 mr-4 rounded" @click="emitFunciton">
        Add Transaction
      </button>
  </div>
</template>
<script>

  export default{
    methods:{
      emitFunciton(){
        this.$emit('addTransaction')
      }
    }
  }
</script>