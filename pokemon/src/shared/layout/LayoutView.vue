<script src="./LayoutView.ts" lang="ts" />
<template>
  <div class="layout rounded-md">
    <div class="system-bar grey-darken-3"></div>
    <div class="navigation-drawer grey-darken-2">
      <SharedSideBar :menuItems="menuItems" />
    </div>
    <!--  <div class="navigation-drawer wide grey-darken-1"></div> -->
    <!--   <div class="app-bar grey"></div> -->
    <!--  <div class="navigation-drawer right grey-lighten-1"></div> -->
    <!--   <div class="app-bar bottom grey-lighten-2"></div> -->
    <div style="background-color: aqua" class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<style scoped>
@import "../assets/Layout.css";
</style>
