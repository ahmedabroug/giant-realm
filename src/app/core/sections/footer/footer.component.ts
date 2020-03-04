import { Component, OnInit } from '@angular/core';
import { Book } from '@store/models/book';

@Component({
  selector: 'gr-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  book: Book;
  constructor() { }

  ngOnInit() {
  }

}
