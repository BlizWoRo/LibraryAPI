import { Component, OnInit } from '@angular/core';
import { Book, BookControllerService } from 'apiclient';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title = 'frontend';
  test: string|undefined = "";
  test2: string|undefined = "";
  books$: Observable<Book[]>| undefined = new Observable<Book[]>;
  //Observable|undefined = new Observable
  
  //Observable|undefined = new Observable
constructor(private bcs: BookControllerService){

  }
  ngOnInit(): void {
    this.books$=this.bcs.getAllBooks();
    //this.books$ = this.bcs.getBookById(2)
    // .subscribe((data)=>{
    //   console.log("Im a pirate");
    //   console.log(data);
    //  // data.
      
    //   //this.test = data.authorFk;
    //   this.test2 = data.authorFk?.authorName;
    //   // data.bookId;
    //   // data.isStocked;
    //   this.test=data.title;
     
    // })
    
  }




}
