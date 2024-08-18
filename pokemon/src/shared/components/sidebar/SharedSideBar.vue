<script src="./SharedSideBar.ts" lang="ts" />
<template>
  <div class="sidebar">
    <!-- ----vamos a agregar un titulo -->

    <ul class="menu">
      <li class="menu-item" v-for="item in menuItems" :key="item.text">
        <div class="divider"></div>
        <router-link class="text-option" :to="{ name: item.name }">{{
          item.text
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  width: 100px;
  /* background-color: #145ab6; */
  height: 100%;
  position: fixed;
  top: 48px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.menu-item {
  width: 100%;
  text-align: start;
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
  background-color: #73c0ffd8;
  color: #ffffff;
}

.divider {
  margin: 0px 0;
  border-bottom: 1px solid #ccc;
}

.text-option {
  font-family: "Helvetica", sans-serif;
  font-weight: 400;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: 100%;
    position: relative;
  }
}
</style>
