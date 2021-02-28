package studybuddy.backend.rest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import studybuddy.backend.models.Student;
import studybuddy.backend.repository.StudentRepository;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/students")
public class StudentController {

  private final StudentRepository studentRepository;

  public StudentController(StudentRepository studentRepository) {
    this.studentRepository = studentRepository;
  }

  @CrossOrigin("*")
  @GetMapping
  public List<Student> getAllStudents() {
    return this.studentRepository.findAll();
  }

}
