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
package com.herux.models;

import java.util.Currency;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * JournalDetail document classes.
 * 
 * @author Heru Susanto
 */
@Document
public class JournalDetail {
    
    @Id
    private String id;
    private Account account;
    private Currency debit;
    private Currency credit;

    public JournalDetail() {

    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Currency getDebit() {
        return debit;
    }

    public void setDebit(Currency debit) {
        this.debit = debit;
    }

    public Currency getCredit() {
        return credit;
    }

    public void setCredit(Currency credit) {
        this.credit = credit;
    }

}
