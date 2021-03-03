package studybuddy.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import studybuddy.backend.models.Student;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
  @Query(value = "SELECT course_id FROM study_buddy.takes where student_id = ?1", nativeQuery = true)
  List<Long> findAllCoursesForStudent(Long id);
}
