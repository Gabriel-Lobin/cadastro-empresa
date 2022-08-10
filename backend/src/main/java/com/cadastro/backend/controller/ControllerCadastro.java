package com.cadastro.backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cadastro.backend.model.Empresa;
import com.cadastro.backend.service.ServiceCadastro;

@RestController
@RequestMapping("/empresa")
public class ControllerCadastro {
	
	@Autowired
	private ServiceCadastro service;
	
	@GetMapping
	public ResponseEntity<List<Empresa>> getAll() {
				
		List<Empresa> result = service.getAll();
		
		return ResponseEntity.status(200).body(result);
	}
	    
}
