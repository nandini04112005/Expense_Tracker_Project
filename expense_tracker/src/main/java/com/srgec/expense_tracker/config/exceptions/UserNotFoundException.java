package com.srgec.expense_tracker.config.exceptions;

public class UserNotFoundException extends Exception{
    public UserNotFoundException(){
        super("User Not Found");
    }

}