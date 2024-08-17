<script src="./ShowView.ts" lang="ts" />
<template>
  <div v-if="pokemon !== null && pokemon !== undefined">
    <CardViewVue :pokemon="pokemon" />
    <lable>Evolucion del pokemon</lable>
    <div v-for="(pokemon, index) in pokemonEvolutions" :key="index">
      <img
        :src="pokemon.sprites.other.dream_world.front_default"
        alt="Pokemon Image"
        style="width: 50px"
      />
      {{ pokemon.name }}
    </div>
  </div>
</template>
