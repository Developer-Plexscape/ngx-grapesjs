import { Injectable } from '@angular/core';
import { Config } from 'dist/ngx-grapesjs/lib/editor.model';

@Injectable({
  providedIn: 'root'
})
export class NgxrEditorService {

  config: Config = {
    container: '#gjs',
    plugins: [],
    components: '',
    pluginsOpts: {},
    storageManager: {
      id: 'gjs-'
    }
  };

}
