<template>
  <div class="w-[40rem] h-[27rem] bg-gray rounded inline-block z-10">
    <div class="flex justify-around">
      <div class="w-48 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-12"
          for=""
        >
          Money
        </label>
        <input
          v-model="money"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id=""
          type="number"
          placeholder=""
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div class="w-48 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-12"
          for=""
        >
          Time
        </label>
        <input
          v-model="time"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id=""
          type="date"
          placeholder=""
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-2/3 m-auto px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4"
          for="grid-password"
        >
          Transaction description
        </label>
        <input
          v-model="description"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-password"
          type="text"
          placeholder="Transaction Detail"
        />
        <p class="text-gray-600 text-xs italic">
          Make it as long and as crazy as you'd like
        </p>
      </div>
    </div>
    <div class="flex justify-around -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for=""
        >
          City
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-city"
          type="text"
          placeholder="Albuquerque"
        />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for=""
        >
          State
        </label>
        <div class="relative">
          <select
            v-model="selected"
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option disabled>Chose state</option>
            <option>Paying</option>
            <option>Saving</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="flex">
      <button
        @click="onSubmit"
        class="text-white bg-blue hover:text-blue hover:bg-white border-[1px] border-blue p-2 rounded mt-2 text-center"
      >
        Submit
      </button>
      <button
        @click="onCancel"
        class="text-white bg-blue hover:text-blue hover:bg-white border-[1px] border-blue p-2 rounded mt-2 text-center"
      >
        Cancel
      </button>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useUser } from "@/composables/useUser";
import { projectAuth } from "@/config/firebase.js";
import useCollection from "@/composables/useCollection";
export default {
  setup(prop, context) {
    const money = ref(0);
    const time = ref(new Date());
    const selected = ref("");
    const description = ref("");
    const { getUser } = useUser();
    const { error, addRecord } = useCollection("transaction");
    function onCancel(){
        context.emit("removeTransaction")
    }
    async function onSubmit() {
      context.emit("removeTransaction");
      console.log(getUser());
      const transaction = {
        money: money.value,
        time: time.value,
        selected: selected.value,
        description: description.value,
        userId: projectAuth.currentUser.uid,
      };
      await addRecord(transaction);
      console.log(error);
      console.log("created!");
    }
    return {
      money,
      time,
      selected,
      description,
      onSubmit,
      onCancel
    };
  },
};
</script>
