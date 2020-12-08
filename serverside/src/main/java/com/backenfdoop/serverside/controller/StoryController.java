package com.backenfdoop.serverside.controller;


import com.backenfdoop.serverside.StoryRepository;
import com.backenfdoop.serverside.UserRepository;
import com.backenfdoop.serverside.model.StoryModel;
import com.backenfdoop.serverside.model.UserModel;
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


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StoryController {
    @Autowired
    private List<UserModel> usersModelList;

    @Autowired
    private UserRepository usersRepository;

    private static final Logger log = LoggerFactory.getLogger(StoryController.class);

    @Autowired
    private StoryModel quotesModel;
    @Autowired
    private UserModel usersModel;

    @Autowired
    private List<StoryModel> quotesModelList;

    @Autowired
    private StoryRepository quotesRepository;

    @ApiIgnore
    @RequestMapping(value = "/")
    public void redirect(HttpServletResponse response) throws IOException {
        response.sendRedirect("/swagger-ui.html");
    }

    @PostMapping("/addStory")
    public ResponseEntity<StoryModel> addStory(@RequestBody StoryModel quotes) {

        quotesModel = quotesRepository.save(quotes);
        usersModelList = usersRepository.findBy_id(quotes.getAuthorID());
        System.out.println(usersModelList.get(0).setStories(usersModelList.get(0).getStories() + 1));
        System.out.println(usersModelList.get(0).getStories());
        usersRepository.save(usersModelList.get(0));
        log.info("Saved quote="+quotesModel.toString());
        if (quotesModel != null)
            return ResponseEntity.status(HttpStatus.CREATED).body(quotesModel);

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

    }

    @PostMapping("/updateStory")
    public ResponseEntity<StoryModel> updateStory(@RequestBody StoryModel quotes) {

        quotesModel = quotesRepository.save(quotes);
        log.info("Saved quote="+quotesModel.toString());
        if (quotesModel != null)
            return ResponseEntity.status(HttpStatus.CREATED).body(quotesModel);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

    }

    @GetMapping("/allStorys")
    public ResponseEntity<List<StoryModel>> getAllStory() {

        quotesModelList = quotesRepository.findAll();
        if (quotesModelList.isEmpty())
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

        return ResponseEntity.status(HttpStatus.CREATED).body(quotesModelList);
    }

    @GetMapping("/story={authorID}")
    public ResponseEntity<List<StoryModel>> getByauthorID(@PathVariable String authorID) {

        quotesModelList = quotesRepository.findByauthorID(authorID);
        if (quotesModelList.isEmpty())
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

        return ResponseEntity.status(HttpStatus.CREATED).body(quotesModelList);
    }
    @GetMapping("/subject={subject}")
    public ResponseEntity<List<StoryModel>> getBysubject(@PathVariable String subject) {

        quotesModelList = quotesRepository.findBysubject(subject);
        if (quotesModelList.isEmpty())
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        return ResponseEntity.status(HttpStatus.CREATED).body(quotesModelList);
    }
//
//    @GetMapping("/storys={word}")
//    public ResponseEntity<List<StoryModel>> getByWord(@PathVariable String word) {
//
//        quotesModelList = quotesRepository.findByQuoteContainsAllIgnoreCase(word);
//        if (quotesModelList.isEmpty())
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
//
//        return ResponseEntity.status(HttpStatus.CREATED).body(quotesModelList);
//    }
@GetMapping("/del={id}")
    public ResponseEntity<List<StoryModel>> deleteByID(@PathVariable String id) {

        quotesModelList = quotesRepository.deleteBy_id(id);
        if (quotesModelList.isEmpty())
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

        return ResponseEntity.status(HttpStatus.CREATED).body(quotesModelList);
    }



}