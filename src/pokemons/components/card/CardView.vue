<script src="./CardView.ts" lang="ts" />
<template>
  <div class="card-container">
    <Row>
      <Column class="element-image" :span="12" :md="12" :sm="12">
        <img
          :src="pokemon.sprites.other.dream_world.front_default"
          alt="Pokemon Image"
          style="width: 100px"
        />
        <div class="divider"></div>
      </Column>
      <Column class="element" :span="12" :md="12" :sm="12">
        <h3 class="text">Datos</h3>
        <div class="divider"></div>
      </Column>
      <Column class="element" :span="6" :md="12" :sm="12">
        <h4 class="text">Nombre:</h4>
      </Column>
      <Column class="element" :span="6" :md="12" :sm="12">
        <p class="text">{{ pokemon.name.toUpperCase() }}</p>
      </Column>
      <Column
        v-if="showAllInformation"
        class="element"
        :span="6"
        :md="12"
        :sm="12"
      >
        <h4 class="text">Descripción:</h4>
      </Column>
      <Column
        v-if="showAllInformation"
        class="element"
        :span="6"
        :md="12"
        :sm="12"
      >
        <p class="text">{{ individualDescription.toUpperCase() }}</p>
      </Column>
      <Column
        v-if="showAllInformation"
        class="element"
        :span="6"
        :md="12"
        :sm="12"
      >
        <h4 class="text">Altura:</h4>
      </Column>
      <Column
        v-if="showAllInformation"
        class="element"
        :span="6"
        :md="12"
        :sm="12"
      >
        <p class="text">{{ pokemon.height }} unds.</p>
      </Column>
      <Column
        v-if="showAllInformation"
        class="element"
        :span="6"
        :md="12"
        :sm="12"
      >
        <h4 class="text">Peso:</h4>
      </Column>
      <Column
        v-if="showAllInformation"
        class="element"
        :span="6"
        :md="12"
        :sm="12"
      >
        <p class="text">{{ pokemon.weight }} unds.</p>
      </Column>
      <Column class="element" :span="6" :md="12" :sm="12">
        <h4 class="text">Tipo:</h4>
      </Column>
      <Column class="element" :span="6" :md="12" :sm="12">
        <div class="text" v-for="(type, indexTypes) in pokemon.types" :key="indexTypes">
          -{{ type.type.name.toUpperCase() }}
        </div>
      </Column>

      <Column class="element" :span="12" :md="12" :sm="12">
        <div class="divider"></div>
        <h3 class="text">Sonidos</h3>
        <div class="divider"></div>
      </Column>
      <Column class="element" :span="12" :md="12" :sm="12">
        <audio controls>
          <source :src="pokemon.cries?.latest" type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
        <audio controls>
          <source :src="pokemon.cries?.legacy" type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
      </Column>

      <Column class="element" :span="12" :md="12" :sm="12">
        <div class="divider"></div>
        <h3 class="text">Estádisticas</h3>
        <div class="divider"></div>
      </Column>
      <Column class="element" :span="12" :md="12" :sm="12">
        <DiagramBarVue :diagramData="stats" />
      </Column>
    </Row>
  </div>
</template>

<style scoped>
.card-container {
  background-color: #ffffff;
  border-radius: 8px;
  /*   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  border: 1px solid rgb(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px 0;
  cursor: pointer;
}

.card-container:hover {
  box-shadow: 0 4px 12px rgba(37, 157, 255, 0.8);
  transition: 0.3s;
}

.element {
  margin-bottom: 16px;
}

h4 {
  margin: 0 0 16px;
}

.element-image {
  text-align: center;
}

.divider {
  border-bottom: 1px solid #ccc;
  margin: 1px 0;
}

.text {
  font-family: "Helvetica", sans-serif;
  font-weight: 400;
}
</style>
