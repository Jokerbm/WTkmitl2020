package com.backenfdoop.serverside;

import com.backenfdoop.serverside.model.StoryModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StoryRepository extends MongoRepository<StoryModel,String> {
    List <StoryModel> deleteBy_id(String id);

    List<StoryModel> findByauthorID(String authorID);

    List<StoryModel> findBysubject(String subject);
//    List<StoryModel> findByQuoteContainsAllIgnoreCase(String author);

}