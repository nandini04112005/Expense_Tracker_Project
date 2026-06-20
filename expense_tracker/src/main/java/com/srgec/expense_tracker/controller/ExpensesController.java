package com.srgec.expense_tracker.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.srgec.expense_tracker.model.Expenses;
import com.srgec.expense_tracker.service.ExpensesService;

@RestController
@CrossOrigin(origins = "*")
public class ExpensesController {
     private final ExpensesService service;
    public ExpensesController(ExpensesService service) {
        this.service = service;
    }
    @GetMapping("/expenses")
    public List<Expenses> getAllExpenses() {
        // Sample data
        return service.getAllExpenses(); 
    }
    @GetMapping("/expenses/{id}")
    public Expenses getExpenseById(@PathVariable int id) {
        return service.getExpenseById(id);
    }
    @PostMapping("/expenses")
    public Expenses addExpenses(@RequestBody Expenses expenses) {
        return service.createExpenses(expenses);

    }
    @DeleteMapping("/expenses/{id}")
    public String deleteExpense(@PathVariable int id) {
        
        return service.deleteExpenses(id);
    }
    @PutMapping("/expenses/{id}")
    public Expenses updateExpenses(@PathVariable int id, @RequestBody Expenses updatedExpenses) {
        return service.updateExpenses(id, updatedExpenses);
    }
    
}
