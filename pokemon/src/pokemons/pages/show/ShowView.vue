<script src="./ShowView.ts" lang="ts" />
<template>
  <div v-if="pokemon !== null && pokemon !== undefined">
    <CardViewVue :showAllInformation="true" :pokemon="pokemon" />
    <h3 class="text">Evoluciones</h3>
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
            <h4 class="text">Nombre: {{ pokemon.name.toUpperCase() }}</h4>
          </Column>
        </Row>
      </Column>
    </Row>
  </div>
</template>

<style scoped>
.tree-family {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  font-family: "Helvetica", sans-serif;
  font-weight: 400;
}
</style>
