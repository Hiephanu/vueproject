<template>
    <SuccessComponent />
    <InformationComponent />
    <FooterComponent />
</template>
<script>
import SuccessComponent from '@/components/homepagecomponents/SuccessComponent.vue';
import InformationComponent from '@/components/homepagecomponents/InformationComponent.vue';
import FooterComponent from '@/components/homepagecomponents/FooterComponent.vue';
export default{
      components:{
        SuccessComponent,
        InformationComponent,
        FooterComponent
      },
    
    }
</script>