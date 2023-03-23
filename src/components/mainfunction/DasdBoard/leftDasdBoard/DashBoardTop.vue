<template>
  <section>
    <div>
      <div class="flex justify-around mt-4">
        <!-- <div class="w-[160px] h-[120px] border-2 border-gray-200 rounded-xl">
          <div class="flex justify-around mt-4">
            <img
              src="@/assets/images/DashBroadImages/TotalMoney.png"
              alt=""
              class="w-8 h-8"
            />
            <p>icon</p>
          </div>
          <div class="mt-4 ml-8">
            <p class="text-gray-400">Goals saving</p>
            <p>{{ this.$store.state.Saving }} $</p>
          </div>
        </div> -->
        <div class="w-[160px] h-[120px] border-2 border-gray rounded-xl ml-2">
          <div class="flex justify-around mt-4">
            <img
              src="@/assets/images/DashBroadImages/TotalIncome.png"
              alt=""
              class="w-8 h-8"
            />
            <p>icon</p>
          </div>
          <div class="mt-4 ml-8">
            <p class="text-gray-400">Total Income</p>
            <p>{{ this.$store.state.Salary }} $</p>
          </div>
        </div>
        <div class="w-[160px] h-[120px] border-2 border-gray rounded-xl ml-2">
          <div class="flex justify-around mt-4">
            <img
              src="@/assets/images/DashBroadImages/TotalSavings.png"
              alt=""
              class="w-8 h-8"
            />
            <p>icon</p>
          </div>
          <div class="mt-4 ml-8">
            <p class="text-gray-400">Total Saving</p>
            <p>{{ TotalSaving }} $</p>
          </div>
        </div>
        <div class="w-[160px] h-[120px] border-2 border-gray rounded-xl ml-2">
          <div class="flex justify-around mt-4">
            <img
              src="@/assets/images/DashBroadImages/TotalExpenses.png"
              alt=""
              class="w-8 h-8"
            />
            <p>icon</p>
          </div>
          <div class="mt-4 ml-8">
            <p class="text-gray-400">Total Expenses</p>
            <p>{{ TotalExpenses }} $</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const TotalExpensesArr = store.state.transactionArr;
    const TotalExpenses = computed(() => {
      return TotalExpensesArr.reduce((a, b) => a + b.money, 0);
    });
    const TotalSaving = computed(() => {
      return store.state.Salary - TotalExpenses.value;
    });
    store.dispatch("addCurrentSaving", TotalSaving);
    store.dispatch("TotalExpenses",TotalExpenses.value)

    return {
      store,
      TotalExpensesArr,
      TotalExpenses,
      TotalSaving,
    };
  },
};
</script>
