import { Component, OnInit } from '@angular/core';
import { BookControllerService } from 'typescript-angular-client-generated';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'frontend';
  test: string|undefined = "";
  test2: string|undefined = "";
constructor(private bcs: BookControllerService){

  }
  ngOnInit(): void {
    this.bcs.getAllBooks();
    this.bcs.getBookById(2).subscribe((data)=>{
      console.log(data);
      
      //this.test = data.authorFk;
      this.test2 = data.authorFk?.authorName;
      // data.bookId;
      // data.isStocked;
      this.test=data.title;
     
    })
    
  }



}
