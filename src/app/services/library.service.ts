import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor() { }

    getLibrary(){
      return this.http.get('https://jsonplaceholder.typicode.com/posts')
    }
}
