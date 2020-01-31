import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../services/library.service'

@Component({
  selector: 'app-vids',
  templateUrl: './vids.component.html',
  styleUrls: ['./vids.component.scss']
})
export class VidsComponent implements OnInit {

  constructor(private libraryServe: LibraryService) { }

  showLibrary(){
    this.libraryServe.getLibrary().subscribe(data => {
      this.library.data
    })
  }

  ngOnInit() {
  }

}
