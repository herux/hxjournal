package com.herux.repositories;

import java.util.List;

import com.herux.models.Journal;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface JournalRepository extends MongoRepository<Journal, String> {
    @Query("{ 'description' : ?0 }")
    List<Journal> findLikeDescription( String description );
}


// DATA DARI PUSAT : 


// 641,1 641,2 641,3 641,4 641,1 641,3 641,5 641,4 641,1 641,6
// | --------------------------------------------------------| 
// INI DATA NILAI CRYPTO SEBANYAK 10 , PADA RANGE WAKTU 5 DETIK

// KETIK DI BIKIN RATA RATA, MAKA 
// 641,1 + 641,2 + 641,3 + 641,4 + 641,1 + 641,3 + 641,5 + 641,4 + 641,1 + 641,6
// -----------------------------------------------------------------------------
//                                     10
                                                                    
                                                                    