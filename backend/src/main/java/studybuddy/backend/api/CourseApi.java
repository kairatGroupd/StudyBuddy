package studybuddy.backend.api;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import studybuddy.backend.models.Course;
import studybuddy.backend.models.Student;
import studybuddy.backend.models.Teacher;
import studybuddy.backend.repository.CourseRepository;
import studybuddy.backend.repository.StudentRepository;
import studybuddy.backend.repository.TeacherRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class CourseApi {

  private final CourseRepository courseRepository;
  private final StudentRepository studentRepository;
  private final TeacherRepository teacherRepository;

  public CourseApi(CourseRepository courseRepository, StudentRepository studentRepository, TeacherRepository teacherRepository) {
    this.courseRepository = courseRepository;
    this.studentRepository = studentRepository;
    this.teacherRepository = teacherRepository;
  }

  @CrossOrigin(origins = "http://localhost:4200")
  @GetMapping("/courses")
  public List<Course> getAllCourses() {
    return this.courseRepository.findAll();
  }

  @CrossOrigin(origins = "http://localhost:4200")
  @GetMapping("/students")
  public List<Student> getAllStudents() {
    return this.studentRepository.findAll();
  }

  @CrossOrigin(origins = "http://localhost:4200")
  @GetMapping("/teachers")
  public List<Teacher> getAllTeachers() {
    return this.teacherRepository.findAll();
  }

}
