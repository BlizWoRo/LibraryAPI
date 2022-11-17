package com.revature.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.Book;

@Repository
public interface BookRepoSpring extends JpaRepository<Book,Integer>{
	
	@Modifying
	@Transactional
	@Query (nativeQuery = true, value = "select * from library.books where author_id_fk=?1")
	List<Book> findByAuthorId(int id);
	
	@Modifying
	@Transactional
	@Query (nativeQuery = true, value = "update library.books set is_Stocked=?1 where book_id=?2")
	void updateStock(boolean stock, int id);
	
	@Modifying
	@Transactional
	@Query (nativeQuery=true, value="delete from library.books where book_id=?1")
	void deleteBookById(int id);
}
