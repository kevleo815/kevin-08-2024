<script src="./DiagramBar.ts" lang="ts" />
<template>
  <div class="diagram-bar">
    <div
      v-for="data in diagramData"
      :key="data.name"
      class="bar"
      :style="{ height: data.value + '%' }"
    >
      <div class="label">{{ data.name }} {{ data.value }}</div>
    </div>
  </div>
</template>

<style scoped>
.diagram-bar {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 200px;
  width: 95%;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.bar {
  width: 20%;
  background-color: #64b4ffcb;
  border-radius: 4px 4px 0 0;
  transition: height 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  margin: 0 10px; /* Añade margen horizontal entre las barras */
}

.bar:hover {
  background-color: #45a049;
}

.label {
  color: #fff;
  font-weight: bold;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  position: absolute;
  bottom: 100%;
  white-space: nowrap;
  transform: translateY(-10px);
  opacity: 0;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.bar:hover .label {
  opacity: 1;
  transform: translateY(0);
}
</style>