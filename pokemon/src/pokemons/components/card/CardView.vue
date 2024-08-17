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
    <!-- {{ pokemon.cries?.legacy }} -->
    <audio controls>
      <source :src="pokemon.cries?.latest" type="audio/ogg" />
      Your browser does not support the audio element.
    </audio>
    <audio controls>
      <source :src="pokemon.cries?.legacy" type="audio/ogg" />
      Your browser does not support the audio element.
    </audio>

    <DiagramBarVue :diagramData="stats" />
  </div>
</template>
