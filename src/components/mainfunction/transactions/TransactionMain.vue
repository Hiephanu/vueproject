<template>
   <div class="w-screen relative">
        <TransactionTopBar @add-transaction="changeState"/>
        <div v-if="display" class="absolute text-center ml-32">
            <TransactionForm @remove-transaction="changeState"/>
        </div>
        <TransactionContent/>
   </div>
</template>
<script>
import TransactionTopBar from './TransactionTopBar.vue';
import TransactionForm from './TransactionForm.vue';
import TransactionContent from './TransactionContent.vue';
import {ref} from 'vue'
    export default{
        components:{
            TransactionTopBar,
            TransactionForm,
            TransactionContent
        },
        setup(){
            const display = ref(false)
            console.log(display);
            function changeState(){
                display.value=!display.value
                console.log('1');
            }
            console.log();
            return {
                display,
                changeState
            }
        }
    }
</script>