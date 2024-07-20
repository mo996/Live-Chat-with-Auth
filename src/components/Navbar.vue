<template>
    <nav v-if="user">
        <div>
            <p>Hey there... {{ user.displayName }}</p>
            <p class="email">Currently logged in as... {{ user.email }}</p>
        </div>
        <button @click="handleClick">Logout</button>
    </nav>
</template>

<script>
import getUser from '@/composables/getUser';
import useLogout from '@/composables/useLogout';

export default {
    setup() {
        const { error, logout } = useLogout()
        const { user } = getUser()

        const handleClick = async () => {
            await logout()
            if (!error.value) {
                console.log('user logged out');
            }

        }

        return { handleClick, user }
    }

}

</script>

<style></style>