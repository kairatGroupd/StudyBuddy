package studybuddy.backend.rest;

import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import studybuddy.backend.models.Course;
import studybuddy.backend.models.Teacher;
import studybuddy.backend.repository.CourseRepository;
import studybuddy.backend.repository.TeacherRepository;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/teachers")
public class TeacherController {

  private final TeacherRepository teacherRepository;
  private final CourseRepository courseRepository;

  public TeacherController(TeacherRepository teacherRepository, CourseRepository courseRepository) {
    this.teacherRepository = teacherRepository;
    this.courseRepository = courseRepository;
  }

  @CrossOrigin("*")
  @GetMapping
  public List<Teacher> getAllTeachers() {
    return this.teacherRepository.findAll();
  }

  @CrossOrigin("*")
  @GetMapping("/{id}")
  public ResponseEntity<Teacher> getTeacherById(@PathVariable Long id) {
    Teacher teacher = this.teacherRepository.findById(id)
      .orElseThrow( () -> new ResourceNotFoundException("not found"));

    return ResponseEntity.ok(teacher);
  }

  @CrossOrigin("*")
  @GetMapping("/courses/{id}")
  public ResponseEntity<List<Course>> getCoursesForTeacher(@PathVariable Long id) {
    List<Long> courseIds = this.teacherRepository.findAllCoursesForTeacher(id);

    return ResponseEntity.ok(
      courseIds.stream()
      .map(cid -> this.courseRepository.findById(cid).
        orElseThrow(ResourceNotFoundException::new))
      .collect(Collectors.toList())
    );
  }

  @CrossOrigin("*")
  @PostMapping("/add/{id}")
  public ResponseEntity<Teacher> addTeacher(@PathVariable(required = false) String id, @RequestBody Teacher teacher) {
    Teacher newTeacher;

    if (id != null){
      newTeacher = this.teacherRepository.findById(Long.parseLong(id)).orElseThrow(ResourceNotFoundException::new);

      newTeacher.setFirstName(teacher.getFirstName());
      newTeacher.setLastName(teacher.getLastName());
      newTeacher.setEmailAddress(teacher.getEmailAddress());
      newTeacher.setPassword(teacher.getPassword());
      newTeacher.setTeacherSalary(teacher.getTeacherSalary());
    }
    return ResponseEntity.ok(teacher);
  }

  @CrossOrigin("*")
  @DeleteMapping("/delete/{id}")
  public ResponseEntity<Teacher> deleteTeacherById(@PathVariable Long id) {
    Teacher teacher = this.teacherRepository.findById(id)
      .orElseThrow( () -> new ResourceNotFoundException("not found"));

    this.teacherRepository.deleteById(id);

    return ResponseEntity.ok(teacher);
  }

}
