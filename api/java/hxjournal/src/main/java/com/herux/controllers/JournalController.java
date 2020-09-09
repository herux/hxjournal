/*
 * Copyright 2012 the original author or authors.
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

import java.util.ArrayList;
import java.util.List;

// import com.herux.models.Journal;
import com.herux.services.JournalService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * JournalController class.
 * 
 * @author Heru Susanto
 */
@RestController
public class JournalController {
    
    @Autowired
    // private JournalService journalService;

    @RequestMapping("/apis/v1/journals")
    public List<String> all() {
        // return "test journals";
        return new ArrayList<String>();
    }
}