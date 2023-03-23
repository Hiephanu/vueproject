<template>
    <section class="h-screen w-full">
        <DasdBoardTopBar/>
        <div v-if="user">{{ user.displayName }}</div>
        <div class="grid grid-cols-5">
            <div class="col-start-1 col-end-4 ml-4">
                <DashBoardTop/>
                <DasdBoardContent/>
                <div>
                    <canvas id="myChart" width="250" height="250"></canvas>
                </div>
            </div>
            <div class="col-start-4 col-end-6 border-2 h-full border-gray">
                <div>
                    <DashBoardRightContent/>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import {fireStoreCore} from '@/config/firebase.js'
import DasdBoardTopBar from './DasdBoardTopBar.vue';
import DashBoardTop from './leftDasdBoard/DashBoardTop.vue';
import DashBoardRightContent from './rightDashBoard/DashBoardRightContent.vue';
import Chart from 'chart.js/auto';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useUser } from '@/composables/useUser';
    export default{
        components:{
            DashBoardTop,
            DasdBoardTopBar,
            DashBoardRightContent
        },
        setup(){
            async function getTransactions(){
                const res = await await fireStoreCore.collection('Transactions').get()
                console.log(res.docs);
                const data= res.docs.map(doc =>{
                    return {...doc.data(), id: doc.id};
                })
                console.log(data);
            }
            getTransactions()
            const {getUser} = useUser();
            const {user} = getUser();
            console.log("2");
            console.log(user.displayName);
            return user
        },
        mounted(){
            const store = useStore()
            const ctx = document.getElementById('myChart')
            const myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Total Income', 'Total Saving', 'Total exprense', 'Goals saving'],
                    datasets: [{
                        label: '# of Votes',
                        data: computed(()=>{
                            return [
                                store.state.Salary,
                                store.state.CurrentSaving,
                                store.state.TotalExpenses,
                                store.state.Saving
                            ]
                        }).value,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1,
                        barThickness:40,
                        maxBarThickness:20
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
            myChart
        }
    }
        
</script>