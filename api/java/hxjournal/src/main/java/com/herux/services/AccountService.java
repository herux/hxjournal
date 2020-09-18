package com.herux.services;

import java.util.List;

import com.herux.models.Account;
import com.herux.repositories.AccountRepository;

import org.springframework.beans.factory.annotation.Autowired;

public class AccountService {

    @Autowired
    private AccountRepository repository;

    public List<Account> getAllAccount() {
        List<Account> listAccount = repository.findAll();
        return listAccount;
    }
    
}
