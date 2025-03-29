package com.gemini4.gemini4_backend.controller;


import com.gemini4.gemini4_backend.repository.UserRepository;
import com.gemini4.gemini4_backend.model.User;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @CrossOrigin
    @GetMapping("/")
    public @ResponseBody String welcome(){
        return "Hello, welcome to gemini 4 web application";
    }

    @CrossOrigin
    @PostMapping("/register")
    public @ResponseBody
    String addUser(@RequestBody Map<String,Object> body) {
        System.out.println(body);

        if (body.get("role").toString().equals("administrator")) {
            User u = createNewUserWithId(Integer.parseInt(body.get("id").toString()), body);
            userRepository.save(u);
            return "Saved: " + u;
        } else if (body.get("type").toString().equals("astronomer")) {
            Astronomer v = createNewAstronomerWithId(Integer.parseInt(body.get("id").toString()), body);
            userRepository.save(v);
            return "Saved: " + v;
        } else if (body.get("type").toString().equals("telescope_operator")) {
            TelescopeOperator v = createNewTelescopeOperatorWithId(Integer.parseInt(body.get("id").toString()), body);
            userRepository.save(v);
            return "Saved: " + v;
        } else if (body.get("type").toString().equals("science_observer")) {
            ScienceObserver v = createNewScienceObserverWithId(Integer.parseInt(body.get("id").toString()), body);
            userRepository.save(v);
            return "Saved: " + v;
        } else if (body.get("type").toString().equals("support")) {
            Support v = createNewSupportWithId(Integer.parseInt(body.get("id").toString()), body);
            userRepository.save(v);
            return "Saved: " + v;
        }

        return "Error: wrong user role";
    }

    private User createNewUserWithId(int id, Map<String,Object> body) {
        // create a new hero with the given info
        User u = new User();
        u.setId(id);
        return setUserInfo(u, body);
    }

    private User setUserInfo(User u, Map<String,Object> body) {
        u.setUsername(body.get("name").toString());
        u.setPassword(body.get("type").toString());
        u.setRole(body.get("realname").toString());
        return u;
    }






}
