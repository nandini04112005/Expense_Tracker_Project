package com.srgec.expense_tracker.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.srgec.expense_tracker.model.Expenses;
import com.srgec.expense_tracker.repository.ExpensesRepository;


@Service
public class ExpensesService {
    public final ExpensesRepository repository;
     public ExpensesService(ExpensesRepository repository) {
        this.repository = repository;
    }
     public List<Expenses> getAllExpenses() {
        return repository.findAll();
    }
    public Expenses createExpenses(Expenses expenses) {
        return repository.save(expenses);
    }
      public Expenses updateExpenses(int id, Expenses expenses) {
        expenses.setId(id);
        return repository.save(expenses);
}
    public String deleteExpenses(int id) {
        repository.deleteById(id);
        return "User with ID " + id + " has been deleted.";
    }
  
    
}
