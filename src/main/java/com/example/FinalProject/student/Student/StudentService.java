package com.example.FinalProject.student.Student;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.rmi.StubNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    @Autowired private StudentRepo repo;

    public List<Student> listAll(){
        return (List<Student>) repo.findAll();
    }

    public void save(Student student) {
        repo.save(student);
    }



    public Student get(Integer id) throws StudentNotFoundException {
        Optional<Student> result = repo.findById(id);
        if (result.isPresent()) {
            return result.get();
        }
        throw  new StudentNotFoundException("Could not find any Student with ID " + id);

    }

    public void delete(Integer id) throws StubNotFoundException {
        Long count = repo.countById(id);
        if (count == null || count == 0) {
            throw new StubNotFoundException("Could not find any Students with ID: " + id);
        }
        repo.deleteById(id);
    }

}
