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
package com.herux.services;

import java.util.ArrayList;
import java.util.List;

import com.herux.models.Journal;
import com.herux.repositories.JournalRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * JournalService class.
 * 
 * @author Heru Susanto
 */
@Service
public class JournalService {
    
    @Autowired
    private JournalRepository repository;
    private Journal journal;

    public Journal getJournal() {
        return journal;
    }

    public void setJournal(Journal journal) {
        this.journal = journal;
    }

    public List<Journal> getAllJournals() {
        // repository.save(new Journal("1", "Journal 1"));
		// repository.save(new Journal("2", "Journal 2"));
		// repository.save(new Journal("3", "Journal 3"));
        List<Journal> listJournal = repository.findAll();
        return listJournal;
    }

}