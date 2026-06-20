package com.srgec.expense_tracker.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.srgec.expense_tracker.dto.LoginRequest;
import com.srgec.expense_tracker.model.User;
import com.srgec.expense_tracker.service.UserService;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
     private final UserService service;
    public UserController(UserService service) {
        this.service = service;
    }
    @PostMapping("/register")
    public User registerUser(@RequestBody User user) throws Exception {
        return service.registerUser(user);
    }
     @PostMapping("/login")
    public String login(@RequestBody LoginRequest login) throws Exception{
        return service.login(login.getEmail(),login.getPassword());
    }
   
   
    
}
