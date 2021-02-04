package studybuddy.backend.rest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import studybuddy.backend.models.Teacher;
import studybuddy.backend.repository.TeacherRepository;

import java.util.List;

@RestController
@RequestMapping("/teachers")
@CrossOrigin(origins = "http://localhost:4200")
public class TeacherController {

  private final TeacherRepository teacherRepository;

  public TeacherController(TeacherRepository teacherRepository) {
    this.teacherRepository = teacherRepository;
  }

  @GetMapping
  @CrossOrigin(origins = "http://localhost:4200")
  public List<Teacher> getAllTeachers() {
    return this.teacherRepository.findAll();
  }

}
