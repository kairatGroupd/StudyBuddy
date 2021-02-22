package studybuddy.backend.models;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "administrator")
public class Administrator {

  @Id
  @Column(name = "admin_id")
  private Long id;
  @Column(name = "admin_name")
  private String username;
  @Column(name = "admin_pass")
  private String password;

  public Administrator(){}

  public Administrator(String username, String password) {
    this.username = username;
    this.password = password;
  }
}
