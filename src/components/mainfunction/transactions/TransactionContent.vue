<template>
  <section>
    <div class="flex">
      <h1 class="" @click="allTransaction">
        All transaction
      </h1>
      <h1 class="ml-4" @click="todayTransaction">
        Today
      </h1>
      <h1 class="ml-4" @click="yesterdayTransaction">
        Yesterday
      </h1>
    </div>
      <div v-for="transaction,index in transactions" :key="index">
        <div v-if="this.checkId == transaction.id">
          <div class="grid grid-cols-4 mt-8" v-if="filterTransactionState==='allTransaction'">
            <p>{{ transaction.description }}</p>
            <p>{{ transaction.money }}</p>
            <p>{{ transaction.time }}</p>
            <p>{{ transaction.selected }}</p>
          </div>
          <div v-else-if="filterTransactionState==='todayTransaction' && transaction.time===new Date()">
            <p>{{ transaction.description }}</p>
            <p>{{ transaction.money }}</p>
            <p>{{ transaction.time }}</p>
            <p>{{ transaction.selected }}</p>
          </div>
          <div v-else-if="filterTransactionState==='yesterdayTransaction' && transaction.time===new Date()-1">
            <p>{{ transaction.description }}</p>
            <p>{{ transaction.money }}</p>
            <p>{{ transaction.time }}</p>
            <p>{{ transaction.selected }}</p>
          </div>
        </div>
      </div>
  </section>
</template>
<script>
import {db} from '@/config/firebase.js'
import {ref} from 'vue'
import { collection,query,orderBy,onSnapshot } from "firebase/firestore";
import {projectAuth} from '@/config/firebase.js'
  export default{
    setup(){
      const transactions=ref([])
      console.log(transactions);
      const checkId= projectAuth.currentUser.uid
      const state = ref('allTransaction')
      const filterTransactionState= ref('allTransaction')
      function allTransaction(){
        filterTransactionState.value= 'allTransaction'
      }
      function todayTransaction(){
        filterTransactionState.value= 'todayTransaction'
      }
      function yesterdayTransaction(){
        filterTransactionState.value= 'yesterdayTransaction'
      } 
      return {
        transactions,checkId,state,filterTransactionState,allTransaction,todayTransaction,yesterdayTransaction
      }
    },
    created(){
      const res = query(collection(db,'transaction'),orderBy('time'))
      onSnapshot(res,(snapshot)=>{
        this.transactions = snapshot.docs.map((doc)=>{
          return {
            description:doc.data().description,
            money:doc.data().money,
            selected:doc.data().selected,
            time:doc.data().time,
            id:doc.data().userId
          }
        })
      })
    }
  }
</script>
