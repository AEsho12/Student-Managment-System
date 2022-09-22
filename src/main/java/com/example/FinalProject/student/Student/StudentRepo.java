package com.example.FinalProject.student.Student;


import org.springframework.data.repository.CrudRepository;

public interface StudentRepo extends CrudRepository<Student, Integer> {
    public Long countById(Integer id);

}
