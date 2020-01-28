import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-facts',
  templateUrl: './movie-facts.component.html',
  styleUrls: ['./movie-facts.component.scss']
})
export class MovieFactsComponent implements OnInit {

  authorName;
  filmFact: string;
  factList: Array<any> =[];
  constructor() { }

  factCreator = new FormGroup({
    authorName: new FormControl('Author', Validators.required),
    filmFact: new FormControl('Film Fact', Validators.required)

  })

  showFacts() {
    document.getElementsByTagName('ol')[0].setAttribute('class', 'showFacts')
  }
  redFacts() {
    document.getElementsByTagName('li')[1].setAttribute('class', 'red')
  }

  onSubmit() {
    this.authorName = this.factCreator.value.authorName
    this.filmFact = this.factCreator.value.filmFact

    console.log(this.authorName, this.filmFact);
    if(this.factList == []){
      this.factList = [
        this.filmFact,
      ]
    }
    else{
      this.factList.push(this.filmFact)
    }
    console.log(this.factList);
    this.factCreator.reset(this.factCreator.value);
  }

  ngOnInit() {
  }

}
