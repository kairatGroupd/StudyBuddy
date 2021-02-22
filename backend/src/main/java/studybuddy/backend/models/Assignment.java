package studybuddy.backend.models;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "course_assignment")
public class Assignment {

  @Id
  @Column(name = "assignment_id")
  private Long id;
  @Column(name = "course_id")
  private Long courseId;

  public Assignment() {}

  public Assignment(Long courseId) {
    this.courseId = courseId;
  }
}
