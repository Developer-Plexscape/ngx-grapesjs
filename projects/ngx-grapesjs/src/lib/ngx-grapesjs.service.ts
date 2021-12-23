import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxGrapesjsService {

  parserHtml = (input: string) => {
    const parser = new DOMParser();
    return parser.parseFromString(input, 'text/html');
  };

}
