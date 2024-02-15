<script setup lang="ts">
import { inject } from "vue";

const openDialog = <() => void>inject("openDialog");
</script>

<template>
  <div v-bind="$attrs" @click="openDialog" class="col-2">
    <slot />
  </div>
</template>
