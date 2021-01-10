package studybuddy.backend.models;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "course")
public class Course {

  @Id
  @Column(name = "course_id")
  private Long id;
  @Column(name = "course_name")
  private String courseName;
  @Column(name = "course_points")
  private Long coursePoints;

  public Course() {}

  public Course(String courseName, Long coursePoints) {
    this.courseName = courseName;
    this.coursePoints = coursePoints;
  }
}
