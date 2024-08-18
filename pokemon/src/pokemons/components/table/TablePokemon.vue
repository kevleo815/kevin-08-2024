<script src="./TablePokemon.ts" lang="ts" />
<template>
  <Row>
    <Column
      class="element"
      v-for="(item, index) in pokemonList?.results"
      :key="index"
      :span="4"
      :md="6"
      :sm="12"
      @click="handleSelectPokemon(item)"
    >
      <Row>
        <Column :span="6" :md="12" :sm="12">
          <img
            :src="item.pokemon?.sprites.other.dream_world.front_default"
            :style="{ maxWidth: '100px' }"
            alt="Pokemon Image"
          />
        </Column>
        <Column :span="6" :md="12" :sm="12">
          <p>{{ item.name.toUpperCase() }}</p>
          <div v-if="item.selected" class="check">
            <span>✔</span>
          </div>
        </Column>
      </Row>
    </Column>
  </Row>
  <div class="divider"></div>
  <Row class="pagination">
    <Column class="button-pagination" :span="12" :md="12" :sm="12">
      <Row>
        <Column :span="6" :md="12" :sm="12">
          <button
            class="button-page"
            @click="handlePageChange(currentPage - 1)"
            :disabled="currentPage === 1"
          >
            Anterior
          </button>
        </Column>
        <Column :span="6" :md="12" :sm="12">
          <button
            class="button-page"
            @click="handlePageChange(currentPage + 1)"
            :disabled="currentPage * itemsPerPage >= totalPokemons"
          >
            Siguiente
          </button>
        </Column>
      </Row>
    </Column>
  </Row>
  <div class="divider"></div>
  <!-- <table>
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
  </table> -->
</template>

<style scoped>
.element:hover {
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(37, 157, 255, 0.5);
  transition: 0.3s;
  border-radius: 8px;
}
.element {
  margin-bottom: 16px;
}

.check {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #6ab87e;
  border: 1px solid #ffffff;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  display: flex;
  color: #ffffff;
}

.pagination {
  margin-bottom: 25px;
}

.button-pagination {
  display: flex;
  justify-content: center;
}

.button-page {
  background-color: #6ab87e;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
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
