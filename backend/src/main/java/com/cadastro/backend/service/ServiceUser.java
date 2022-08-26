package com.cadastro.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cadastro.backend.model.User;
import com.cadastro.backend.repository.RepositoryUser;

@Service
public class ServiceUser {
	
	@Autowired
    private RepositoryUser repositoryUser;
	
	public void loginAccount(String name, String password) {
        List<User> usuarios = repositoryUser.findByName(name);

        if (usuarios.isEmpty()) {
            
        }

        User usuario = usuarios.get(0);

        if (!usuario.getPassword().equals(password)) {
            
        }
    }
	
	public void cadastrarUsuario(String name, String password) {
        List<User> usuarios = repositoryUser.findByName(name);

        if (!usuarios.isEmpty()) {
            
        }

        User newUser = new User(name, password);
        repositoryUser.save(newUser);
    }

}
