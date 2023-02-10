<script setup lang="ts">
    import router from "@/router"
</script>

<!-- https://bulma.io/documentation/components/menu/ -->
<template>
    <div class="box has-background-white">
        <aside class="menu">
            <p class="menu-label">
                this is SideMenu
            </p>
            <ul class="menu-list">

                <!-- 
                <li><a :class="{'is-active': router.currentRoute.value.name == 'home'}" @click="router.push('/')">Home</a></li>
                <li><a :class="{'is-active': router.currentRoute.value.name == 'about'}" @click="router.push('/about')">About</a></li>
                 -->

                 <li v-for="route in router.getRoutes()">
                    <a :class="{'is-active': router.currentRoute.value.name == route.name}" 
                        @click="router.push(route.path)">
                        {{ route.name }}
                    </a>
                </li>
            </ul>
        </aside>
    </div>
</template>