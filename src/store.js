
import { createStore } from "vuex"
const store = createStore({
    state () {
      return {
          transactionArr:[],
          Salary:0,
          Saving:0,
          CurrentSaving:0,
          TotalExpenses:0,
      }
    },
    //getters la ham de lay ra state
    getters:{
      transactionArr:state => state.transactionArr,
      Salary:state => state.Salary,
      Saving:state => state.Saving,
      CurrentSaving:state=>state.CurrentSaving,
      TotalExpenses:state=>state.TotalExpenses
    },
    //mutations la cac ham thay doi state 
    mutations: {
      deleteTransaction(state,TransactionId){
        state.transactionArr  = state.transactionArr.filter(Transaction=>Transaction.id !== TransactionId)
      },
      addNewTransaction(state,newTransaction){
        state.transactionArr.push(newTransaction)
      },
      addSalary(state,Salary){
        state.Salary=Salary
      },
      addSaving(state,Saving){
        state.Saving=Saving
      },
      addCurrentSaving(state,CurrentSaving){
        state.CurrentSaving=CurrentSaving
      },
      TotalExpenses(state,TotalExpenses){
        state.TotalExpenses=TotalExpenses
      }
    },
    actions:{
      deleteTransaction({commit},TransactionId){
        commit("deleteTransaction",TransactionId)
      },
      addNewTransaction({commit},NewTransaction){
        commit("addNewTransaction",NewTransaction)
      },
      addSalary({commit},Salary){
        commit("addSalary",Salary)
      },
      addSaving({commit},Saving){
        commit("addSaving",Saving)
      },
      addCurrentSaving({commit},CurrentSaving){
        commit("addCurrentSaving",CurrentSaving)
      },
      TotalExpenses({commit},TotalExpenses){
        commit("TotalExpenses",TotalExpenses)
      }
    }
  })
export default store