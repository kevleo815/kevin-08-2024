<script src="./CardView.ts" lang="ts" />
<template>
  <div class="card">
    <img
      :src="pokemon.sprites.other.dream_world.front_default"
      alt="Pokemon Image"
      style="width: 50px"
    />
    <p>{{ pokemon.name }}</p>
    <p>{{ pokemon.height }}</p>
    <p>{{ pokemon.weight }}</p>
    <p v-for="(type, indexTypes) in pokemon.types" :key="indexTypes">
      {{ type.type.name }}
    </p>
    

    <p v-for="(crie, indexCries) in pokemon.cries" :key="indexCries">
      <audio controls>
        <source :src="crie" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </p>

    <DiagramBarVue :diagramData="stats" />
  </div>
</template>
