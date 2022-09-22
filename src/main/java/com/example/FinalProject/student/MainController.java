package com.example.FinalProject.student;


import com.example.FinalProject.student.Student.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
    @Autowired
    private StudentService service;

    @GetMapping("/")
    public String showHomePage(){
        return "new";
    }


}
