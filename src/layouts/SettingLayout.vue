<template>
    <div class="flex">
        <div>
            <NavMainLayout/>
        </div>
        <div>
            <SettingLayoutBar/>
            <slot/>
        </div>
    </div>
</template>
<script>
import SettingLayoutBar from '@/components/layoutcomponent/SettingLayoutBar.vue';
import NavMainLayout from '@/components/layoutcomponent/NavMainLayout.vue';
    export default{
        components:{
            SettingLayoutBar,
            NavMainLayout
        }
    }
</script>