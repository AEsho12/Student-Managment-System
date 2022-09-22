package com.example.FinalProject;


import com.example.FinalProject.student.Student.Student;
import com.example.FinalProject.student.Student.StudentRepo;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.Optional;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class StudentRepoTest {

    @Autowired private StudentRepo repo;

    @Test
    public void testAddNew() {
        Student student = new Student();
        student.setLastName("Cenat");
        student.setFirstName("Kai");
        student.setEmail("kc300@gmail.com");
        student.setJobTitle("Streamer");
        student.setCompany("Twitch");


        Student savedStudent = repo.save(student);

        Assertions.assertThat(savedStudent).isNotNull();
        Assertions.assertThat(savedStudent.getId()).isGreaterThan(0);


    }

    @Test
    public void testListAll(){
        Iterable<Student> students = repo.findAll();
        Assertions.assertThat(students).hasSizeGreaterThan(0);


        for (Student student : students){
            System.out.println(student);
        }
    }

    @Test
    public void testUpdate() {
        Integer studentId = 1;
        Optional<Student> optionalStudent = repo.findById(studentId);
        Student student = optionalStudent.get();
        student.setCompany("Netflix");
        repo.save(student);

        Student updateStudent = repo.findById(studentId).get();
        Assertions.assertThat(updateStudent.getCompany()).isEqualTo("Netflix");
    }

    @Test
    public void testGet() {
        Integer studentId =2 ;
        Optional<Student> optionalStudent = repo.findById(studentId);
        Assertions.assertThat(optionalStudent).isPresent();
        System.out.println(optionalStudent.get());
    }

    @Test
    public void testDelete() {
       Integer studentId = 2;
       repo.deleteById(studentId);

       Optional<Student> optionalStudent = repo.findById(studentId);
       Assertions.assertThat(optionalStudent).isNotPresent();



    }
}
