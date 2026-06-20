package com.srgec.expense_tracker.service;

import java.util.Optional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.srgec.expense_tracker.config.JwtService;
import com.srgec.expense_tracker.model.User;
import com.srgec.expense_tracker.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository repository;
    private final PasswordEncoder encoder;
    private final JwtService jwtService;

    public UserService(UserRepository repository, PasswordEncoder encoder, JwtService jwtService) {
        this.repository = repository;
        this.encoder = encoder;
        this.jwtService = jwtService;
    }

    public User registerUser(User user) throws Exception {
        Optional<User> foundUser = repository.findByEmail(user.getEmail());
        if (foundUser.isPresent()) {
            throw new Exception("User already exists");
        }
        String encodedPassword = encoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        return repository.save(user);
    }

    public String login(String email, String password) throws Exception {
        // check if the user exists by email
        Optional<User> foundUser = repository.findByEmail(email);
        if (!foundUser.isPresent()) {
            throw new Exception("No User found with this email");
        }
        // Check if the password is correct
        User user = foundUser.get();
        boolean matches = encoder.matches(password, user.getPassword());
        if (!matches) {
            throw new RuntimeException("Password Incorrect");
        }
        return jwtService.generateToken(email);
    }
}