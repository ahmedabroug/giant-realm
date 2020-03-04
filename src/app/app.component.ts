import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '@store/models/book';


@Component({
  selector: 'gr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  public books: Observable<Book[]>;
  public totalElements: any;


  constructor(private db: AngularFirestore) {
    this.books = db.collection<Book>('books', queryFn => queryFn.orderBy('name'))
    .snapshotChanges()
    .pipe(map(books => {
      return books.map(data => {
        const book: Book = data.payload.doc.data() as Book;
        book.id = data.payload.doc.id;
        return book;
      });
    }));
    this.books.subscribe(books => this.totalElements = books.length);
  }

  public AddBook(): void {
    this.books.subscribe(books => this.totalElements = books.length);
    const newBook = { name: 'New Book:' + this.totalElements, author: 'Nice Author' };
    this.db.collection('books').add(newBook);
    this.books = this.db.collection<Book>('books', queryFn => queryFn.orderBy('name'))
    .snapshotChanges()
    .pipe(map(books => {
      return books.map(data => {
        const book = data.payload.doc.data() as Book;
        const id = data.payload.doc.id;
        return { id, ...book };
      });
    }));
  }

  public deletBook(id: string): Promise<void> {
    return this.db.doc('/books/' + id ).delete();
  }
}
