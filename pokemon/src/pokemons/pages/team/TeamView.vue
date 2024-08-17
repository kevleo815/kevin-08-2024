<script src="./TeamView.ts" lang="ts" />
<template>
  <div class="grid-container">
    <div class="grid-item" v-for="(member, index) in myTeam" :key="index">
      {{ member.id }}
      <CardViewVue
        :pokemon="member"
        @click="handleIndividualShow(member.id)"
      />
      <button @click="removeMember(member.name)">Desvincular del equipo</button>
    </div>
  </div>
</template>

<style scoped>
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
}
</style>
