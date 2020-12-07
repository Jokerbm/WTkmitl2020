package com.backenfdoop.serverside;

import com.backenfdoop.serverside.model.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.awt.*;
import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<UserModel,String> {
    List <UserModel> findByemail(String email);
//     findByemail(String email);
}
