<template>
  <div class="column" :class="columnClasses">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "Column",
  props: {
    span: {
      type: Number,
      default: 12,
    },
    md: {
      type: Number,
      default: null,
    },
    sm: {
      type: Number,
      default: null,
    },
  },
  setup(props) {
    const columnClasses = computed(() => {
      const classes = ["column"];
      if (props.span) classes.push(`col-${props.span}`);
      if (props.md) classes.push(`col-md-${props.md}`);
      if (props.sm) classes.push(`col-sm-${props.sm}`);
      return classes;
    });

    return {
      columnClasses,
    };
  },
});
</script>

<style scoped>
.column {
  box-sizing: border-box;
  padding: 0 15px;
}

/* Default column width */
[class*="col-"] {
  flex: 0 0 auto;
  max-width: 100%;
}

/* Responsive adjustments */
.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.col-4 {
  flex: 0 0 33.3333%;
  max-width: 33.3333%;
}

@media (max-width: 768px) {
  .col-md-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-md-4 {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
  }
}

@media (max-width: 576px) {
  .col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-sm-4 {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
  }
}
</style>
