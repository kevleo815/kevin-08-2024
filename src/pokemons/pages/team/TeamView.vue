<script src="./TeamView.ts" lang="ts" />
<template>
  <Row>
    <Column v-if="myTeam.length == 0" :span="12" :md="12" :sm="12">
      <p class="message">Todavia no Seleccionas ningún pokemón</p>
    </Column>
    <Column
      v-for="(member, index) in myTeam"
      :key="index"
      class="element"
      :span="6"
      :md="6"
      :sm="12"
    >
      <div class="divider"></div>
      <button class="btn-unlink" @click="removeMember(member.name)">
        <font-awesome-icon :icon="['fas', 'unlink']" /> Desvincular
      </button>
      <CardViewVue :showAllInformation="false" :pokemon="member" @click="handleIndividualShow(member.id)" />
    </Column>
  </Row>
</template>

<style scoped>
.message {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  font-family: "Helvetica", sans-serif;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4 columnas */
  gap: 100px; /* Espacio entre elementos */
  /* border: 1px solid #ccc; */
  width: 100%;
}

.grid-item {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  width: 100%;
  overflow: auto; /* Añadir overflow para permitir el scroll */
}

.btn-unlink {
  background-color: #aa1e14; /* Color rojo */
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
}

.divider {
  margin: 20px 0;
  border-bottom: 1px solid #ccc;
}
</style>
