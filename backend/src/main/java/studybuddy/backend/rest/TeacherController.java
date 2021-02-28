package studybuddy.backend.rest;

import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import studybuddy.backend.models.Teacher;
import studybuddy.backend.repository.TeacherRepository;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/teachers")
public class TeacherController {

  private final TeacherRepository teacherRepository;

  public TeacherController(TeacherRepository teacherRepository) {
    this.teacherRepository = teacherRepository;
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
  @PostMapping("/add")
  public ResponseEntity<Teacher> addTeacher(@RequestBody Teacher teacher) {
    this.teacherRepository.save(teacher);

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
