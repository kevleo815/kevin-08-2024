<script src="./SharedSideBar.ts" lang="ts" />
<template>
  <div class="sidebar">
    <ul class="menu">
      <li class="menu-item" v-for="item in menuItems" :key="item.text">
        <router-link :to="{ name: item.name }">{{ item.text }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  width: 72px;
  background-color: #145ab6;
  height: 100%;
  position: fixed;
  top: 48px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.menu-item {
  width: 100%;
  text-align: center;
  margin: 10px 0;
}

.menu-item a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 10px;
  transition: background-color 0.3s, color 0.3s;
}

.menu-item a:hover {
  background-color: #757575;
  color: #ffffff;
}

@media (max-width: 576px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
}
</style>
