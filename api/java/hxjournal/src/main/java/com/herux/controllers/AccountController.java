/*
 * Copyright 2020 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.herux.controllers;

import java.util.List;

import com.herux.models.Account;
import com.herux.services.AccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * AccountController class.
 * 
 * @author Heru Susanto
 */

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/apis/v1")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @PostMapping("/accounts")
    public Account addAccount(@Validated Account account) {
        accountService.addAccount(account);
        return account;
    }

    @GetMapping("/accounts")
    public List<Account> getAll() {
        return accountService.getAllAccounts();
    }

}
