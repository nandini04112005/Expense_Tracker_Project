package com.srgec.expense_tracker.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.srgec.expense_tracker.model.Expenses;

@Repository
public interface ExpensesRepository extends JpaRepository<Expenses,Integer> {

    
}
