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
    <!--  <div style="background-color: aqua" class="main">
      <div class="header" style="width: 100%">
        <h1 class="title">Title</h1>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div> -->

    <div class="main">
      <div class="header">
        <h2 class="title">{{ title }}</h2>
    
        <h3 class="subtitle">{{ subtitle }}</h3>
        <hr class="divider" />
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* assets/Layout.css */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
.rounded-md {
  border-radius: 4px;
}
.grey-darken-3 {
  background-color: #424242;
}
.grey-darken-2 {
  background-color: #616161;
}
.grey-darken-1 {
  background-color: #757575;
}
.grey {
  background-color: #9e9e9e;
}
.grey-lighten-1 {
  background-color: #bdbdbd;
}
.grey-lighten-2 {
  background-color: #e0e0e0;
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.system-bar,
.app-bar {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navigation-drawer {
  width: 72px;
  background-color: #616161;
  height: 100%;
  position: fixed;
  top: 48px;
  left: 0;
}
.navigation-drawer.right {
  left: auto;
  right: 0;
  width: 150px;
  background-color: #bdbdbd;
}
.navigation-drawer.wide {
  width: 150px;
  background-color: #757575;
  left: 72px;
}
.app-bar.bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.main {
  display: flex;
  flex-direction: column;
  min-height: 300px;
  margin-top: 48px;
  margin-bottom: 48px;
  margin-left: 222px;
  margin-right: 150px;
  background-color: rgb(255, 255, 255);
  overflow: auto; /* Añadir overflow para permitir el scroll */
  border: 1px solid rgba(0, 0, 0, 0.1); /* Borde suave */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para efecto de tarjeta */
}

.header {
  width: 100;
  height: 130px;
  background-color: rgb(255, 255, 255);
  padding: 15px;
  overflow: auto; /* Añadir overflow para permitir el scroll */
}

.content {
  flex: 1;
  padding: 25px;
  overflow: auto; /* Añadir overflow para permitir el scroll en el contenido */
}

.title {
  font-family: "Helvetica", sans-serif;
  font-weight: 700;
}

.subtitle {
  font-family: "Helvetica", sans-serif;
  font-weight: 400;
}

.divider {
  width: 100%;
  border: none;
  border-top: 1px solid rgb(0, 0, 0, 0.2); /* Puedes ajustar el color y grosor de la línea */
  margin: 10px 0; /* Espaciado entre el título y el subtítulo */
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .navigation-drawer.wide {
    left: 72px;
    width: 100px;
  }
  .main {
    margin-left: 172px;
  }
  .header {
    height: 10%;
  }
}

@media (max-width: 992px) {
  .navigation-drawer {
    width: 60px;
  }
  .navigation-drawer.wide {
    left: 60px;
    width: 100px;
  }
  .main {
    margin-left: 160px;
  }
}

@media (max-width: 768px) {
  .navigation-drawer {
    width: 50px;
  }
  .navigation-drawer.wide {
    left: 50px;
    width: 80px;
  }
  .main {
    margin-left: 130px;
  }
  .header {
    height: 10%;
  }
}

@media (max-width: 400px) {
  .navigation-drawer,
  .navigation-drawer.wide,
  .navigation-drawer.right {
    width: 100%;
    height: auto;
    position: relative;
  }
  .main {
    margin: 0;
    margin-top: 40%;
    margin-bottom: 48px; /* Ensure space for the footer */
  }
  .app-bar.bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .title {
    font-size: 1.5rem;
  }

  .title {
    font-size: 1.5rem;
  }
  .subtitle {
    font-size: 1rem;
  }
}
</style>
