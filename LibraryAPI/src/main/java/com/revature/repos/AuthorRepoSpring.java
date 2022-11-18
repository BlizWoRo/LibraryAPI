package com.revature.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.models.Author;

public interface AuthorRepoSpring extends JpaRepository<Author,Integer>{

}
