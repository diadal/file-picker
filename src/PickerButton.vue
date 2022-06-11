<template>
  <div v-bind="$attrs" @click="openDialog" class="col-2">
    <slot />
  </div>
</template>
<script>
import { inject } from 'vue';
export default {
  setup() {
    const openDialog = inject('openDialog');

    return {
      openDialog,
    };
  },
};
</script>
