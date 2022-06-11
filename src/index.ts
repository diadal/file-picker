import FileSelector from './FileSelector.vue'
import PickerButton from './PickerButton.vue'

const toBlob = async (file: File) => {
  const buffer = await file.arrayBuffer();
  const blob = new Blob([buffer]);
  const srcBlob = URL.createObjectURL(blob);
  return srcBlob;
};

export { toBlob, FileSelector, PickerButton };

