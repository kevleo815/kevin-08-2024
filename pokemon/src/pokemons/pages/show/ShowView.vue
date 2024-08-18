<script src="./ShowView.ts" lang="ts" />
<template>
  <div v-if="pokemon !== null && pokemon !== undefined">
    <CardViewVue :pokemon="pokemon" />
    <h3>Evoluciones</h3>
    <Row>
      <Column
        v-for="(pokemon, index) in pokemonEvolutions"
        :key="index"
        class="element"
        :span="4"
        :md="6"
        :sm="12"
      >
        <Row>
          <Column :span="4" :md="12" :sm="12">
            <img
              :src="pokemon.sprites.other.dream_world.front_default"
              alt="Pokemon Image"
              style="width: 100px"
            />
          </Column>
          <Column :span="6" :md="12" :sm="12">
            <h4>Nombre: {{ pokemon.name.toUpperCase() }}</h4>
          </Column>
        </Row>
      </Column>
    </Row>

  <!--   <div
      class="tree-family"
      v-for="(pokemon, index) in pokemonEvolutions"
      :key="index"
    >
      <img
        :src="pokemon.sprites.other.dream_world.front_default"
        alt="Pokemon Image"
        style="width: 50px"
      />
      {{ pokemon.name }}
    </div> -->
  </div>
</template>

<style scoped>
.tree-family {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
