package studybuddy.backend.rest;

import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import studybuddy.backend.models.Course;
import studybuddy.backend.models.Student;
import studybuddy.backend.repository.CourseRepository;
import studybuddy.backend.repository.StudentRepository;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/students")
public class StudentController {

  private final StudentRepository studentRepository;
  private final CourseRepository courseRepository;

  public StudentController(StudentRepository studentRepository, CourseRepository courseRepository) {
    this.studentRepository = studentRepository;
    this.courseRepository = courseRepository;
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
  @GetMapping("/courses/{id}")
  public ResponseEntity<List<Course>> getCoursesForStudent(@PathVariable Long id) {
    List<Long> courseIds = this.studentRepository.findAllCoursesForStudent(id);

    return ResponseEntity.ok(courseIds.stream()
      .map(cid -> this.courseRepository.findById(cid).orElseThrow(ResourceNotFoundException::new))
      .collect(Collectors.toList())
    );
  }

  @CrossOrigin("*")
  @PostMapping("/add/{id}")
  public ResponseEntity<Student> addStudent(@PathVariable(required = false) String id, @RequestBody Student student) {
    Student newStudent;

    if (id != null){
      newStudent = this.studentRepository.findById(Long.parseLong(id)).orElseThrow(ResourceNotFoundException::new);

      newStudent.setFirstName(student.getFirstName());
      newStudent.setLastName(student.getLastName());
      newStudent.setEmailAddress(student.getEmailAddress());
      newStudent.setHomeAddress(student.getHomeAddress());
      newStudent.setPassword(student.getPassword());
      newStudent.setStudentPoints(student.getStudentPoints());
    }
    else{
      newStudent = student;
    }

    this.studentRepository.save(newStudent);

    return ResponseEntity.ok(newStudent);
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
