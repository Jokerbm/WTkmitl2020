package com.backenfdoop.serverside.model;


import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Repository;

import java.util.Arrays;

@Repository
@Document(collection = "story")
public class StoryModel {
    private String _id;
    private boolean advice;
    private String category;
    private String img_cate;
    private String intro;
    private String time;
    private int recommended;
    private String banner;
    private String paragraph;
    private String[] tag;
    private String image_profile;
    private String name;
    private String nickname;
    private String subject;
    private String authorID;


    public StoryModel() {

    }

    public String getAuthorID() {
        return authorID;
    }

    public void setAuthorID(String authorID) {
        this.authorID = authorID;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getImage_profile() {
        return image_profile;
    }

    public void setImage_profile(String image_profile) {
        this.image_profile = image_profile;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getBanner() {
        return banner;
    }

    public void setBanner(String banner) {
        this.banner = banner;
    }

    public String getParagraph() {
        return paragraph;
    }

    public void setParagraph(String paragraph) {
        this.paragraph = paragraph;
    }

    public String[] getTag() {
        return tag;
    }

    public void setTag(String[] tag) {
        this.tag = tag;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getImg_cate() {
        return img_cate;
    }

    public void setImg_cate(String img_cate) {
        this.img_cate = img_cate;
    }

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getRecommended() {
        return recommended;
    }

    public void setRecommended(int recommended) {
        this.recommended = recommended;
    }


    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public boolean isAdvice() {
        return advice;
    }

    public void setAdvice(boolean advice) {
        this.advice = advice;
    }

    @Override
    public String toString() {
        return "StoryModel{" +
                "_id='" + _id + '\'' +
                ", advice=" + advice +
                ", category='" + category + '\'' +
                ", img_cate='" + img_cate + '\'' +
                ", intro='" + intro + '\'' +
                ", time='" + time + '\'' +
                ", recommended=" + recommended +
                ", banner='" + banner + '\'' +
                ", paragraph='" + paragraph + '\'' +
                ", tag=" + Arrays.toString(tag) +
                ", image_profile='" + image_profile + '\'' +
                ", name='" + name + '\'' +
                ", nickname='" + nickname + '\'' +
                ", subject='" + subject + '\'' +
                ", AuthorID='" + authorID + '\'' +
                '}';
    }
}