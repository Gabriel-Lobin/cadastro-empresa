package com.cadastro.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cadastro.backend.model.User;
import com.cadastro.backend.service.ServiceUser;
import com.cadastro.backend.utils.JwtValidate;
import com.cadastro.backend.utils.Md5Hash;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/login")
public class ControllerUser {

	@Autowired
	private ServiceUser serviceUser;

	@PostMapping
	public ResponseEntity<String> login(@RequestBody User user) {
		String passwordHash = Md5Hash.Md5HashConvert(user.getPassword());

		serviceUser.loginAccount(user.getEmail(), passwordHash);

		String token = JwtValidate.createToken(user.getName());

		return ResponseEntity.status(200).body(token);
	}

	@PostMapping("/cadastro")
	public ResponseEntity<String> cadastro(@RequestBody User user) {

		String passwordHash = Md5Hash.Md5HashConvert(user.getPassword());

		serviceUser.cadastrarUsuario(user.getName(), user.getEmail(), passwordHash);

		return ResponseEntity.status(201).body("Cadastrado com sucesso!");
	}

}
