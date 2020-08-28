package com.herux.services;

import java.util.ArrayList;
import java.util.List;

import com.herux.models.Journal;

import org.springframework.stereotype.Service;

@Service("journalService")
public class JournalService {
    
    private Journal journal;

    public Journal getJournal() {
        return journal;
    }

    public void setJournal(Journal journal) {
        this.journal = journal;
    }

    public List<Journal> getAllJournals() {
        List<Journal> listJournal = new ArrayList<Journal>();

        return listJournal;
    }

}