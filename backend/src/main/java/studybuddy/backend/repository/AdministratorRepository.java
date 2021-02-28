package studybuddy.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import studybuddy.backend.models.Administrator;

public interface AdministratorRepository extends JpaRepository<Administrator, Long> {

}
