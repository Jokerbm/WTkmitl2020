package com.backenfdoop.serverside.controller;


import com.backenfdoop.serverside.StoryRepository;
import com.backenfdoop.serverside.UserRepository;
import com.backenfdoop.serverside.model.StoryModel;
import com.backenfdoop.serverside.model.UserModel;
import com.backenfdoop.serverside.model.EmailModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RestController
public class UserController {
    private static final Logger log = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserModel usersModel;

    @Autowired
    private List<UserModel> usersModelList;

    @Autowired
    private UserRepository usersRepository;

    @GetMapping("/allusers")
    public ResponseEntity<List<UserModel>> getAllUser() {

        usersModelList = usersRepository.findAll();
        if (usersModelList.isEmpty())
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        return ResponseEntity.status(HttpStatus.CREATED).body(usersModelList);
    }

    @PostMapping("/addUser")
    public ResponseEntity<UserModel> addStory(@RequestBody UserModel user) {

        usersModel = usersRepository.save(user);
        log.info("Saved quote="+usersModel.toString());
        if (usersModel != null)
            return ResponseEntity.status(HttpStatus.CREATED).body(usersModel);

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

    }
    @PostMapping("/auth")
    public ResponseEntity<List<UserModel>>auth(@RequestBody UserModel email) {

        usersModelList = usersRepository.findByemail(email.getEmail());
//        System.out.println(usersModelList.get(0).getEmail());
//        System.out.println(usersModelList.get(0).getPassword());
        System.out.println(email.getPassword());
        if (usersModelList.isEmpty()) {
            System.out.println("not found");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        else if(usersModelList.get(0).getPassword().equals(email.getPassword())){
            return ResponseEntity.status(HttpStatus.CREATED).body(usersModelList);
        }
        System.out.println("error");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

    }
}
