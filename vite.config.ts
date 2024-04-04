/**
 * SDaiLover Web Packages.
 *
 * @fullname  : Stephanus Bagus Saputra,
 *              ( 戴 Dai 偉 Wie 峯 Funk )
 * @email     : wiefunk@stephanusdai.web.id
 * @contact   : https://t.me/wiefunkdai
 * @support   : https://opencollective.com/wiefunkdai
 * @link      : https://www.sdailover.web.id,
 *              https://www.stephanusdai.web.id
 * @license   : https://www.sdailover.web.id/license/
 * @copyright : (c) 2023 StephanusDai Developer. All rights reserved.
 * This software has released under the terms of the BSD License.
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  mode: 'production',
  build: {
    outDir: path.resolve('dist'),
    manifest: path.join('manifest.json'),
    rollupOptions: {
        output:{
            manualChunks(lib) {
                if (lib.includes('node_modules')) {
                    return lib.toString().split('node_modules/')[1].split('/')[0].toString();
                }
            }
        }
    }
  },
  plugins: [
      react({}),
  ],
})
