import { Component, OnInit } from '@angular/core';
import { Author, Book, BookControllerService } from 'apiclient';
import { AuthorControllerService } from 'apiclient/api/authorController.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title = 'frontend';
  test: string|undefined = "";
  test2: string|undefined = "";
  authors$: Observable<Author[]>| undefined = new Observable<Author[]>;
  //Observable|undefined = new Observable
  
  //Observable|undefined = new Observable
constructor(private acs: AuthorControllerService){

  }
  ngOnInit(): void {
    this.authors$=this.acs.getAllAuthors();
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
