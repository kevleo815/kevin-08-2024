<script src="./TablePokemon.ts" lang="ts" />
<template>
  <table>
    <thead>
      <tr>
        <th>No.</th>
        <th>IMAGEN</th>
        <th>NOMBRE</th>
        <th>SELECCIONAR</th>
        <th>seleccionado</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(pokemon, index) in pokemonList?.results" :key="index">
        <td>{{ index + 1 }}</td>
        <td>
          <img
            :src="pokemon.pokemon?.sprites.other.dream_world.front_default"
            :style="{ maxWidth: '50px' }"
            alt="Pokemon Image"
          />
        </td>
        <td>{{ pokemon.name.toUpperCase() }}</td>
        <td>
          <input
            type="checkbox"
            @change="handleSelectPokemon(pokemon.name)"
            v-model="pokemon.selected"
          />
        </td>
        <td>
          <span v-if="pokemon.selected">Seleccionado</span>
        </td>
      </tr>
    </tbody>
  </table>
  {{ myTeam }}
</template>
