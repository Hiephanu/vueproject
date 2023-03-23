<template>
  <section class="h-screen bg-blue">
    <div class="w-44">
      <div>
        <h1 class="text-white text-center font-bold text-[20px]">
          Lover Money
        </h1>
        <!-- <RouterLink to="/DasdBoardMain">
          <p
            class="mt-[20px] text-center text-white hover:bg-white hover:text-blue h-10 pt-2"
          >
            DasdBoard
          </p>
        </RouterLink> -->
        <RouterLink to="/TransactionMain">
          <p
            class="mt-[20px] text-center text-white hover:bg-white hover:text-blue focus:bg-white h-10 pt-2"
          >
            Transaction
          </p>
        </RouterLink>
        <RouterLink to="/ReportMain">
          <p
            class="mt-[20px] text-center text-white hover:bg-white hover:text-blue h-10 pt-2"
          >
            Report
          </p>
        </RouterLink>
        <RouterLink to="/TransactionMain">
          <p
            class="mt-[20px] text-center text-white hover:bg-white hover:text-blue h-10 pt-2"
          >
            Chart
          </p>
        </RouterLink>
        <RouterLink to="/SettingAccount">
          <p
            class="mt-[20px] text-center text-white hover:bg-white hover:text-blue h-10 pt-2"
          >
            Setting
          </p>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
<script>
export default {

};
</script>
