package com.jobApply.JobApplication.Repository;

import com.jobApply.JobApplication.Entities.Role;
import com.jobApply.JobApplication.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {


    Optional<User> findByEmail(String email);

    User findByRole(Role role);
}
