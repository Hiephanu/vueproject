<template>
    <div>
        <h1>LogoutPage</h1>
    </div>
</template>
<script>
import { useLogOut } from '@/composables/logout';

    export default{
        setup(){
            const {error,logout} = useLogOut()
            logout();
            return{error}
        }
    }
</script>