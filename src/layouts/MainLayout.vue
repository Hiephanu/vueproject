<template>
    <div class="flex">
        <NavMainLayout/>
        <slot/>
    </div>
</template>
<script>    
    import NavMainLayout from '@/components/layoutcomponent/NavMainLayout.vue';
    export default{
    components: { NavMainLayout }
}
</script>