package studybuddy.backend.rest;

import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import studybuddy.backend.models.Course;
import studybuddy.backend.models.Student;
import studybuddy.backend.models.Teacher;
import studybuddy.backend.repository.CourseRepository;
import studybuddy.backend.repository.StudentRepository;
import studybuddy.backend.repository.TeacherRepository;

import java.util.List;

@RestController
@RequestMapping("/courses")
@CrossOrigin(origins = "http://localhost:4200")
public class CourseController {

  private final CourseRepository courseRepository;

  public CourseController(CourseRepository courseRepository) {
    this.courseRepository = courseRepository;
  }

  @GetMapping
  @CrossOrigin(origins = "http://localhost:4200")
  public List<Course> getAllCourses() {
    return this.courseRepository.findAll();
  }

  @PutMapping("/add")
  @CrossOrigin(origins = "http://localhost:4200")
  public ResponseEntity<Course> addActivity(@RequestBody Course course) {
    this.courseRepository.save(course);
    return ResponseEntity.ok().body(course);
  }
}
