package studybuddy.backend.rest;

import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import studybuddy.backend.models.Course;
import studybuddy.backend.repository.CourseRepository;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/courses")
public class CourseController {

  private final CourseRepository courseRepository;

  public CourseController(CourseRepository courseRepository) {
    this.courseRepository = courseRepository;
  }

  @CrossOrigin("*")
  @GetMapping
  public List<Course> getAllCourses() {
    return this.courseRepository.findAll();
  }

  @CrossOrigin("*")
  @GetMapping("/{id}")
  public ResponseEntity<Course> getCourseById(@PathVariable Long id) {
    Course course = this.courseRepository.findById(id)
      .orElseThrow( () -> new ResourceNotFoundException("not found"));

    return ResponseEntity.ok(course);
  }

  @CrossOrigin("*")
  @PostMapping("/add")
  public ResponseEntity<Course> addCourse(@RequestBody Course course) {
    this.courseRepository.save(course);

    return ResponseEntity.ok(course);
  }

  @CrossOrigin("*")
  @DeleteMapping("/delete/{id}")
  public ResponseEntity<Course> deleteCourseById(@PathVariable Long id) {
    Course course = this.courseRepository.findById(id)
      .orElseThrow( () -> new ResourceNotFoundException("not found"));
    this.courseRepository.deleteById(id);

    return ResponseEntity.ok(course);
  }
}
