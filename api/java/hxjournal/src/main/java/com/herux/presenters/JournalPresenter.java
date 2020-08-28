package com.herux.presenters;

import java.util.List;

import com.herux.models.Journal;
import com.herux.services.JournalService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/apis/v1")
public class JournalPresenter {
    
    @Autowired
    private JournalService journalService;

    @GetMapping("/journals")
    public List<Journal> all() {
        return journalService.getAllJournals();
    }
}