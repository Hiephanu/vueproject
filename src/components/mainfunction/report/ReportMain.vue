<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Transaction report</h1>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 lg:w-1/3 p-2">
        <div class="bg-white rounded-lg shadow p-4">
          <h2 class="text-xl font-bold mb-2">Revenue</h2>
          <canvas id="revenue-chart"></canvas>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 p-2">
        <div class="bg-white rounded-lg shadow p-4">
          <h2 class="text-xl font-bold mb-2">Sales by Product</h2>
          <canvas id="product-sales-chart"></canvas>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 p-2">
        <div class="bg-white rounded-lg shadow p-4">
          <h2 class="text-xl font-bold mb-2">Traffic Sources</h2>
          <canvas id="traffic-chart"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import {db,projectAuth} from '@/config/firebase.js'
import {ref} from 'vue'
import { collection,query,orderBy,onSnapshot } from "firebase/firestore";


export default {
  setup(){
      const transactions=ref([])
     
      return {
        transactions}
    },
    created(){
      const res = query(collection(db,'transaction'),orderBy('time'))
      onSnapshot(res,(snapshot)=>{
        this.transactions = snapshot.docs.map((doc)=>{
          return {
            money:doc.data().money,
            id:projectAuth.currentUser.uid
          }
        })
      })
    },
  mounted() {
    const revenueData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Revenue',
        backgroundColor: '#4c51bf',
        data: [1000, 1500, 2000, 2500, 3000, 3500],
      }],
    };

    const revenueConfig = {
      type: 'line',
      data: revenueData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    const revenueChart = new Chart(
      document.getElementById('revenue-chart'),
      revenueConfig,
    );

    const productSalesData = {
      labels: ['Product A', 'Product B', 'Product C', 'Product D'],
      datasets: [{
        label: 'Sales',
        backgroundColor: ['#4c51bf', '#a3a3c2', '#dcdcdc', '#f7f7f7'],
        data: [10, 20, 15, 25],
      }],
    };

    const productSalesConfig = {
      type: 'doughnut',
      data: productSalesData,
      options: {
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    };

    const productSalesChart = new Chart(
      document.getElementById('product-sales-chart'),
      productSalesConfig,
    );

    const trafficData = {
      labels: ['Direct', 'Organic', 'Referral', 'Social'],
      datasets: [{
        label: 'Traffic Sources',
        backgroundColor: ['#4c51bf', '#a3a3c2', '#dcdcdc', '#f7f7f7'],
        data: [30, 25, 20, 25],
      }],
    };

    const trafficConfig = {
      type: 'pie',
      data: trafficData,
      options: {
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    };

    const trafficChart = new Chart(
      document.getElementById('traffic-chart'),
      trafficConfig
)
    return revenueChart,productSalesChart,trafficChart
}
};
</script>

<style>
canvas {
  max-width: 100%;
}
</style>