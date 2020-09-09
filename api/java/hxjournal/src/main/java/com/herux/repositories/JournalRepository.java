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
package com.herux.repositories;

import java.util.List;

import com.herux.models.Journal;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * JournalRepository interface.
 * 
 * @author Heru Susanto
 */
@Repository
public interface JournalRepository extends MongoRepository<Journal, String> {
    @Query("{ 'description' : ?0 }")
    List<Journal> findLikeDescription( String description );
}                                
                                                                    
                                                                    