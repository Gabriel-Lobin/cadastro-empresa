package com.cadastro.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cadastro.backend.service.ServiceCadastro;
import com.cadastro.backend.model.Empresa;

@RestController
@RequestMapping("/empresa")
@RequestMapping("/empresa")
public class ControllerCadastro {

	@Autowired
	private ServiceCadastro service;

	// @Autowired
	// private ServiceEndereco serviceEnd;

	// @Autowired
	// private RepositoryCadastro cadastro;

	@GetMapping
	public ResponseEntity<List<Empresa>> getAll() {

		List<Empresa> listEmpresas = service.getAll();

		return ResponseEntity.status(200).body(listEmpresas);

	}

	@PostMapping // Map ONLY POST Requests
	public ResponseEntity<Empresa> addNewUser(@RequestBody Empresa empresa) {

		System.out.println("ende: " + empresa.getEndereco());

		// endereco.save(empresa.getEndereco());
		Empresa newEmpresa = service.newCadastro(empresa);

		return ResponseEntity.status(200).body(newEmpresa);
	}

	// @GetMapping
	// public List<Empresa> getAll() {
	//
	// List<Empresa> listEmpresas = service.getAll();
	//
	// return listEmpresas;
	// }

	// @GetMapping()
	// public List<Endereco> getEndAll() {
	//
	// List<Endereco> listEndereco = serviceEnd.getAll();
	//// List<Empresa> listEmpresas = null;
	//
	// System.out.println("listEmpresas: " + listEndereco.size());
	//
	// return listEndereco;
	//
	// }

}
