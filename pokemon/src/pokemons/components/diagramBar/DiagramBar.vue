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
  width: 100%;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 20px;
}

.bar {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 20px;
  background-color: rgb(115, 234, 255);
}

.label {
  margin-top: 5px;
}
</style>
