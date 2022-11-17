package com.revature.controllers;

import com.revature.models.Book;
import com.revature.repos.BookRepo;
import com.revature.repos.BookRepoSpring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController //This annotation combines @Controller and @ResponseBody
//so this class is now a Bean that can use MVC annotations and send JSON in HTTP Responses
@RequestMapping(value="/books") //all requests ending in /library/books will go to this controller.
@CrossOrigin //This lets us take in HTTP requests from other origins (you may need to configure this later)
public class BookController {

    private BookRepo br;
    private BookRepoSpring brS;
    

    @Autowired
    public BookController(BookRepo br, BookRepoSpring brS){
        super();
        this.br = br;
        this.brS = brS;
    }

    //TODO: leave this one implemented for reference?
    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {

       //List<Book> books = br.getAllBooks();
    	List<Book> books = brS.findAll();

        if(books != null){
            return ResponseEntity.ok().body(books);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping
    public ResponseEntity<Book> insertNewBook(@RequestBody Book book){
    	
    	//Book newBook = br.insertBook(book);
    	Book newBook = brS.save(book);
    	
        return ResponseEntity.ok().build();
    }

    //these two methods have an issue with each other that won't let you compile-----
    //you have to find it :)

    @GetMapping(value="/{id}")
    public ResponseEntity<Optional<Book>> getBookById(@PathVariable int id) {
    	
    	//Book book = br.getBookById(id);
    	Optional<Book> book = brS.findById(id);
        return ResponseEntity.ok().body(book);
    }

    @GetMapping(value="/author/{id}")
    public ResponseEntity<List<Book>> getBooksByAuthorId(@PathVariable int id) {
    	
    	//List<Book> authorBooks = br.getBooksByAuthorId(id);
    	List<Book> authorBooks = brS.findByAuthorId(id);
    	
    	if(authorBooks != null){
            return ResponseEntity.ok().body(authorBooks);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PutMapping(value="/{id}")
    public ResponseEntity<Book>updateStock(@PathVariable int id){
		
    	Book book = brS.getById(id);
    	
    	if(book.getIsStocked()==true) {
    		brS.updateStock(false,id);
    	}else {
    		brS.updateStock(true,id);
    	}
    	
    	return ResponseEntity.ok().build();
		
    	
    }
    
    @DeleteMapping(value="/{id}")
    public ResponseEntity<Book>deleteBookById(@PathVariable int id){
    	
    	brS.deleteBookById(id);
		return ResponseEntity.ok().build();
    }

}

