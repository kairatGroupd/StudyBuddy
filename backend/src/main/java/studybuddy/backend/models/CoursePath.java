package studybuddy.backend.models;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "course_path")
public class CoursePath {

  @Id
  @Column(name = "path_id")
  private Long id;
  @Column(name = "path_name")
  private String pathName;

  public CoursePath() {}

  public CoursePath(String pathName) {
    this.pathName = pathName;
  }

}
