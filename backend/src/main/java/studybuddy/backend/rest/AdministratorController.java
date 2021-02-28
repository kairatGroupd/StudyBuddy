package studybuddy.backend.rest;


import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import studybuddy.backend.models.Administrator;
import studybuddy.backend.repository.AdministratorRepository;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/administrators")
public class AdministratorController {

  private final AdministratorRepository administratorRepository;

  public AdministratorController(AdministratorRepository administratorRepository) {
    this.administratorRepository = administratorRepository;
  }

  @CrossOrigin("*")
  @GetMapping
  public List<Administrator> getAllAdministrators() {
    return this.administratorRepository.findAll();
  }

  @CrossOrigin("*")
  @GetMapping("/{id}")
  public ResponseEntity<Administrator> getAdministratorById(@PathVariable Long id) {
    Administrator administrator = this.administratorRepository.findById(id)
      .orElseThrow( () -> new ResourceNotFoundException("not found"));

    return ResponseEntity.ok(administrator);
  }

  @CrossOrigin("*")
  @PostMapping("/add/{id}")
  public ResponseEntity<Administrator> addAdministrator(@PathVariable(required = false) String id, @RequestBody Administrator administrator) {
    Administrator newAdministrator;

    if (id != null){
      newAdministrator = this.administratorRepository.findById(Long.parseLong(id)).orElseThrow(ResourceNotFoundException::new);

      newAdministrator.setUsername(administrator.getUsername());
      newAdministrator.setPassword(administrator.getPassword());
    }
    return ResponseEntity.ok(administrator);
  }

  @CrossOrigin("*")
  @DeleteMapping("/delete/{id}")
  public ResponseEntity<Administrator> deleteAdministratorById(@PathVariable Long id) {
    Administrator administrator = this.administratorRepository.findById(id)
      .orElseThrow( () -> new ResourceNotFoundException("not found"));

    this.administratorRepository.deleteById(id);

    return ResponseEntity.ok(administrator);
  }

}
