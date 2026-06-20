package com.srgec.expense_tracker.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.srgec.expense_tracker.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
      Optional<User> findByEmail(String email); 
    //Search for email by containing the query string 
    List<User> findByEmailContaining(String query); 
    List<User> findByEmailStartsWith(String query);
    List<User> findByEmailEndsWith(String query);
    List<User> findByNameContainingIgnoreCase(String query);
    boolean existsByEmail(String email);

}
