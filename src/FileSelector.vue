<script setup lang="ts">
import { provide, ref } from "vue";

type Booleanish = boolean | "true" | "false";

interface Pros {
  modelValue: string[];
  allowMultiple: Booleanish;
  accept: string;
}

// emits: ["update:modelValue"];

const emit = defineEmits(["update:modelValue"]);
const props = defineProps<Pros>();
const inputRef = ref<HTMLInputElement>(<HTMLInputElement>(<unknown>null));
const openDialog = () => {
  inputRef.value.click();
};

provide("openDialog", openDialog);

provide("addFiles", (files: File[]) => {
  emit("update:modelValue", [...props.modelValue, ...files]);
});

const updateFiles = () => {
  if (inputRef.value.files?.length) {
    const files = <File[]>(<unknown>inputRef.value.files);
    emit("update:modelValue", [...props.modelValue, ...files]);
  }
};
</script>

<template>
  <div>
    <input
      style="display: none"
      type="file"
      ref="inputRef"
      :multiple="allowMultiple"
      :accept="accept"
      @change="updateFiles"
    />
    <slot :openDialog="openDialog" />
  </div>
</template>
