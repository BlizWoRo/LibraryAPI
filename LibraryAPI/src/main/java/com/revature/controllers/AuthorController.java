package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Author;
import com.revature.models.Book;
import com.revature.repos.AuthorRepoSpring;

@RestController
@RequestMapping(value="/authors")
@CrossOrigin
public class AuthorController {

	@Autowired
	private AuthorRepoSpring arS;
	
	@GetMapping
	public ResponseEntity<List<Author>> getAllAuthors(){
		List<Author> authors = arS.findAll();

        if(authors != null){
            return ResponseEntity.ok().body(authors);
        } else {
            return ResponseEntity.badRequest().build();
        }
		
	}
	

}
