<template>
  <div id="app">
    <app-nav />
    <app-side-bar />
    <br />
    <app-header />
    <router-view />
  </div>
</template>

<script>
import AppNav from '@/components/AppNav'
import AppSideBar from '@/components/AppSideBar'
import AppHeader from '@/components/AppHeader'

export default {
  name: 'App',
  components: { AppNav, AppSideBar, AppHeader }
}
</script>

<style scoped>

</style>
