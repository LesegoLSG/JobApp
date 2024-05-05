package com.jobApply.JobApplication;

import com.jobApply.JobApplication.Entities.Role;
import com.jobApply.JobApplication.Entities.User;
import com.jobApply.JobApplication.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class JobApplication implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;



	public static void main(String[] args) {
		SpringApplication.run(JobApplication.class, args);
		System.out.println("Successful");
	}

	@Override
	public void run(String... args) throws Exception {
		User adminAccount = userRepository.findByRole(Role.ADMIN);
		if(adminAccount == null){
			User user = new User();
			user.setFirstName("Lesego");
			user.setLastName("Mhlongo");
			user.setEmail("lesegomhlongo78@gmail.com");
			user.setPassword(new BCryptPasswordEncoder().encode("lesego"));
			user.setRole(Role.ADMIN);

			userRepository.save(user);
		}
	}
}
