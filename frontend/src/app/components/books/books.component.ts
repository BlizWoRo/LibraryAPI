import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Book, BookControllerService } from 'apiclient';
import { filter, map, Observable, tap, take } from 'rxjs';

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
  book$:Observable<Book>| undefined = new Observable<Book>;
  id:number = NaN;
  //Observable|undefined = new Observable
  
  //Observable|undefined = new Observable
constructor(private bcs: BookControllerService){
this.book$?.subscribe((data)=>{
  console.log(data)
})
  
}
// sortBy(prop: string) {
//   return this.composer.arrcompositions.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
// }
  getBookById(){
    this.book$ = this.bcs.getBookById(this.id).pipe(
      map((book)=>{
        console.log(book)
        return book;
      })
    );

  }
  

  ngOnInit(): void {
    this.book$?.subscribe((data)=>{
      console.log(data)
    })
    this.books$=this.bcs.getAllBooks()
    .pipe(
      // filter((books:any)=>books instanceof Book[]),
      // tap((books:Book[])=>books as Book[]),
      map((data: Book[])=>{
         return data.sort((a:Book,b:Book)=>{
          if(a.bookId && b.bookId){
             if(a.bookId > b.bookId){
               return 1;
               
             }
             if(a.bookId<b.bookId){
              return -1;
             }
             
            }
            return 0;
           })

        })
        
    )
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
