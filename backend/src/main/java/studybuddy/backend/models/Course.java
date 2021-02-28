package studybuddy.backend.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "course")
public class Course {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "course_id")
  private Long id;

  @Column(name = "course_name")
  private String courseName;

  @Column(name = "course_points")
  private Float coursePoints;

  @Column(name = "course_description")
  private String courseDescription;

  @Column(name = "course_image_url")
  private String courseImageUrl;

  public Course() {}

}
