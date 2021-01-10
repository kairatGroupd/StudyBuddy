package studybuddy.backend.models;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "student")
public class Student {

  @Id
  @Column(name = "student_id")
  private Long id;
  @Column(name = "first_name")
  private String firstName;
  @Column(name = "last_name")
  private String lastName;
  @Column(name = "home_address")
  private String homeAddress;
  @Column(name = "email_address")
  private String emailAddress;
  @Column(name = "password")
  private String password;

  public Student() {}

  public Student(String firstName, String lastName, String homeAddress, String emailAddress, String password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.homeAddress = homeAddress;
    this.emailAddress = emailAddress;
    this.password = password;
  }

}
