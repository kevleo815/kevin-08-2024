<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Row",
});
</script>

<style scoped>
.row {
  margin: 0 -15px;
  display: flex;
  flex-wrap: wrap;
}
</style>
