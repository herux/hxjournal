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

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


/**
 * Journal document classes.
 * 
 * @author Heru Susanto
 */
@Document
public class Journal {
    
    @Id
    private String id;
    private String transno;
    private Date dates;
    private String reffno;
    private String description;
    @Autowired
    private List<JournalDetail> journalDetail;

    public Journal(String description){
        this.description = description;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTransNo() {
        return transno;
    }

    public void setTransNo(String transno) {
        this.transno = transno;
    }

    public Date getDates() {
        return dates;
    }

    public void setDates(Date dates) {
        this.dates = dates;
    }

    public String getReffNo() {
        return reffno;
    }

    public void setReffNo(String reffno) {
        this.reffno = reffno;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<JournalDetail> getJournalDetail() {
        return journalDetail;
    }

    public void setJournalDetail(List<JournalDetail> journalDetail) {
        this.journalDetail = journalDetail;
    }

    @Override
    public String toString() {
        return String.format(
        "Journal[id=%s, description='%s']",
            id, description);
    }

}