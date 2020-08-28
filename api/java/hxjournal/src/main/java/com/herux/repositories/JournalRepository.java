package com.herux.repositories;

import java.util.List;

import com.herux.models.Journal;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface JournalRepository extends MongoRepository<Journal, String> {
    @Query("{ 'description' : ?0 }")
    List<Journal> findLikeDescription( String description );
}                                
                                                                    
                                                                    