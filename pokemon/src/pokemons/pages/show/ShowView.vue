<script src="./ShowView.ts" lang="ts" />
<template>
  <div v-if="pokemon !== null && pokemon !== undefined">
    <CardViewVue :pokemon="pokemon" />
    <lable>Evolucion del pokemon</lable>
    <div v-for="(pokemon, index) in evolutions" :key="index">
      {{ pokemon.name }}
    </div>
  </div>
</template>
