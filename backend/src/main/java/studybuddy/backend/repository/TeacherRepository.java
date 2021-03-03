package studybuddy.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import studybuddy.backend.models.Teacher;

import java.util.List;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long> {
  @Query(value = "SELECT course_id FROM study_buddy.teaches where teacher_id = ?1", nativeQuery = true)
  List<Long> findAllCoursesForTeacher(Long id);
}
