package com.srgec.expense_tracker.model;
import  jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity 
@Table(name = "users")
@Data
@NoArgsConstructor

public class User {
    @Id // Primary key
    @GeneratedValue(strategy=GenerationType.IDENTITY) // Auto-incrementing ID
    private int id;
    @Column(nullable = false )
    private String name;
    @Column(nullable=false, unique = true) // Ensure email is unique
    private String email;
    @Column(nullable=false)
    private String password;

    
    public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    
    
    
}

