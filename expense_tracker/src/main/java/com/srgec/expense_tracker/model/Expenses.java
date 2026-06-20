package com.srgec.expense_tracker.model;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor; 

@Entity
@Table(name ="expenses")
@Data
@NoArgsConstructor

public class Expenses {
     @Id // Primary key
    @GeneratedValue(strategy=GenerationType.IDENTITY) // Auto-incrementing ID
    private int id;
    @Column
    private String title;
     @Column
    private double amount;
     @Column
    private String category;
     @Column
    private String description;
     @Column
    private String paymentMethod;
     @Column
    private LocalDate date;
     public Expenses(String title, double amount, String category, String description, String paymentMethod,
            LocalDate date) {
        this.title = title;
        this.amount = amount;
        this.category = category;
        this.description = description;
        this.paymentMethod = paymentMethod;
        this.date = date;
     }

    
}
