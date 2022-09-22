package com.example.FinalProject.student.Student;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.rmi.StubNotFoundException;
import java.util.List;



@Controller
public class StudentController {
    @Autowired private StudentService service;

    @GetMapping("/students")
    public String showStudentList(Model model) {
        List<Student> listStudent = service.listAll();
        model.addAttribute("listStudent", listStudent);
        return "students";
    }

    @GetMapping("/students/new")
    public String showNewForm(Model model) {
        model.addAttribute("student" , new Student());
        model.addAttribute("pageTitle", "Add New Student");
        return "student_form";
    }

    @PostMapping("/students/save")
    public String saveStudent(Student student, RedirectAttributes sta) {
        service.save(student);
        sta.addFlashAttribute("message", "The Student has been saved successfully");
        return "redirect:/students";
    }

    @GetMapping("/students/edit/{id}")
    public String showEditForm(@PathVariable("id") Integer id, Model model, RedirectAttributes sta) {
        try {
            Student student = service.get(id);
            model.addAttribute("student", student);
            model.addAttribute("pageTitle", "Edit Student (ID: " + id + ")");


            return "student_form";
        } catch (StudentNotFoundException e) {
            sta.addFlashAttribute("message", "The Student has been deleted");
            return "redirect:/students";
        }

    }

    @GetMapping("/students/delete/{id}")
    public String deleteStudent(@PathVariable("id") Integer id, RedirectAttributes sta) {
        try {
            service.delete(id);
            sta.addFlashAttribute("message", "The Student ID " + id + "has been deleted successfully");
        } catch (StubNotFoundException e) {
            sta.addFlashAttribute("message", e.getMessage());
        }
        return "redirect:/students";
    }





}
