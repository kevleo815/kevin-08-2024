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
      <tr v-for="(item, index) in pokemonList?.results" :key="index">
        <td>{{ index + 1 }}</td>
        <td>
          <img
            :src="item.pokemon?.sprites.other.dream_world.front_default"
            :style="{ maxWidth: '50px' }"
            alt="Pokemon Image"
          />
        </td>
        <td>{{ item.name.toUpperCase() }}</td>
        <td>
          <input
            type="checkbox"
            @change="handleSelectPokemon(item)"
            v-model="item.selected"
          />
        </td>
        <td>
          <span v-if="item.selected">Seleccionado</span>
        </td>
      </tr>
    </tbody>
  </table>

  <div v-for="(pokemon, index) in myTeam" :key="index">
    <p>{{ pokemon.name }}</p>
  </div>
</template>
