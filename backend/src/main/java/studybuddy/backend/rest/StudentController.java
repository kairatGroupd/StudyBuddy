package studybuddy.backend.rest;

import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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

  @CrossOrigin("*")
  @GetMapping("/{id}")
  public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
    Student student = this.studentRepository.findById(id)
      .orElseThrow( () -> new ResourceNotFoundException("not found"));

    return ResponseEntity.ok(student);
  }

  @CrossOrigin("*")
  @PostMapping("/add")
  public ResponseEntity<Student> addStudent(@RequestBody Student student) {
    this.studentRepository.save(student);

    return ResponseEntity.ok(student);
  }

  @CrossOrigin("*")
  @DeleteMapping("/delete/{id}")
  public ResponseEntity<Student> deleteStudentById(@PathVariable Long id) {
    Student student = this.studentRepository.findById(id)
      .orElseThrow( () -> new ResourceNotFoundException("not found"));
    this.studentRepository.deleteById(id);

    return ResponseEntity.ok(student);
  }
}
