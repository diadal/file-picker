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

<script lang="ts">
import { provide, ref, defineComponent } from 'vue';
export default defineComponent({
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
    allowMultiple: {
      type: Boolean,
      default: true,
    },
    accept: {
      type: String,
      default: undefined,
    },
  },
  setup(props, { emit }) {
    const inputRef = ref<HTMLInputElement>(<HTMLInputElement>(<unknown>null));
    const openDialog = () => {
      inputRef.value.click();
    };

    provide('openDialog', openDialog);

    provide('addFiles', (files: File[]) => {
      emit('update:modelValue', [...props.modelValue, ...files]);
    });

    const updateFiles = () => {
      if (inputRef.value.files?.length) {
        const files = <File[]>(<unknown>inputRef.value.files);
        emit('update:modelValue', [...props.modelValue, ...files]);
      }
    };

    return {
      inputRef,
      openDialog,
      updateFiles,
    };
  },
});
</script>
