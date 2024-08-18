<script src="./LayoutView.ts" lang="ts" />
<template>
  <div class="layout rounded-md">
    <div class="system-bar">
      <div class="system-name title">Sistema Pokédex</div>
      <div class="system-icon">
        <i class="fas fa-icon"></i>
      </div>
    </div>
    <div class="navigation-drawer">
      <SharedSideBar :menuItems="menuItems" />
    </div>

    <div class="app-bar bottom">
      <div class="text-footer">© 2024 - Todos los derechos reservados</div>
    </div>

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

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.system-bar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #145ab6;
  height: 50px;
  right: 0px;
  /*display: flex;
  align-items: center;
  justify-content: center;
  background-color: #145ab6; */
}

.system-name {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 10px;
}

.navigation-drawer {
  width: 100px;
  background-color: #145ab6;
  height: 100%;
  position: fixed;
  top: 50px;
  left: 0;
}

.app-bar.bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #145ab6;
  align-items: end;
  justify-content: end;
  display: flex;
  right: 1px;
}

.text-footer {
  color: white;
  font-size: 0.5 rem;
  font-weight: 200;
  padding: 5px;
}

.main {
  display: flex;
  flex-direction: column;
  min-height: 300px;
  margin-top: 100px;
  margin-bottom: 48px;
  margin-left: 125px;
  margin-right: 100px;
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

.system-name {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 10px;
}

.system-icon {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 10px;
}

/* ajustes responsive */
@media (max-width: 1200px) {
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

  .main {
    margin-left: 160px;
  }
}

@media (max-width: 768px) {
  .navigation-drawer {
    width: 100%;
    height: 200%;
    position: relative;
  }

  .main {
    margin-left: 0px;
    width: 100%;
  }
  .header {
    height: 10%;
  }
}

@media (max-width: 400px) {
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
