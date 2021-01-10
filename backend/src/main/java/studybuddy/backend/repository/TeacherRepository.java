package studybuddy.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import studybuddy.backend.models.Teacher;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long> {
}
