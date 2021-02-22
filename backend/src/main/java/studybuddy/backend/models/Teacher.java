package studybuddy.backend.models;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "teacher")
public class Teacher {

  @Id
  @Column(name = "teacher_id")
  private Long id;
  @Column(name = "first_name")
  private String firstName;
  @Column(name = "last_name")
  private String lastName;
  @Column(name = "email_address")
  private String emailAddress;
  @Column(name = "teacher_salary")
  private Float teacherSalary;
  @Column(name = "teacher_pass")
  private String password;

  public Teacher() {}

  public Teacher(String firstName, String lastName, String emailAddress, Float teacherSalary,String password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.password = password;
  }
}
