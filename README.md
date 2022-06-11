[![Known Vulnerabilities](https://snyk.io/test/github/diadal/file-picker/badge.svg)](https://snyk.io/test/github/diadal/file-picker)



# file-picker
 Vue3 File-Picker

`Vue3`


*if you wish you can buy me a coffee @ [Patreon](https://www.patreon.com/diadal)*


## Next install file-picker

```bash
npm install @diadal/file-picker
```

## Usage

```typescript

<script setup lang="ts">
import {
  ref,
  watch,
} from 'vue';

import { FileSelector, PickerButton, toBlob } from 'components/file-picker';

const files = ref([]);


watch(files, async () => {
  if (files.value.length) {
    const image = files.value[0];
    const imgpath = await toBlob(image);
    console.log("imgpath: ", imgpath);
  }
});


</script>

<template>
  <div class="row text-center">
   <FileSelector v-model="files" accept="image/*" :allowMultiple="false">
            <PickerButton>
              <q-btn
                label="Change Logo"
                class="text-capitalize"
                rounded
                style="max-width: 120px"
              ></q-btn>
            </PickerButton>
          </FileSelector>
  </div>
</template>


```

if any issue [check](https://github.com/diadal/file-picker/issues)

*if you wish you can buy me a coffee @ [Patreon](https://www.patreon.com/diadal)*

## License

The MIT License (MIT)

Copyright (c) 2018 Diadal Nig LTD

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
