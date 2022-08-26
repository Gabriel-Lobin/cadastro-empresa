package com.cadastro.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cadastro.backend.model.User;

@Repository
public interface RepositoryUser extends JpaRepository<User, Long>{
	
	List<User> findByName(String name);

}
