package com.cadastro.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cadastro.backend.service.ServiceCadastro;
import com.cadastro.backend.model.Empresa;
import com.cadastro.backend.model.RequestEmpresa;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/empresa")
public class ControllerCadastro {

	@Autowired
	private ServiceCadastro serviceCadastro;

	@GetMapping
	public ResponseEntity<List<Empresa>> getAllCompany() {

		List<Empresa> listEmpresas = serviceCadastro.getAll();

		return ResponseEntity.status(200).body(listEmpresas);
	}

	@PostMapping
	public ResponseEntity<Empresa> newCompany(@RequestBody Empresa empresa) {

		Empresa newEmpresa = serviceCadastro.newCadastro(empresa);

		return ResponseEntity.status(200).body(newEmpresa);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Empresa> removeCompany(@PathVariable Long id) {
		Empresa empresa = serviceCadastro.deleteCadastro(id);

		return ResponseEntity.status(200).body(empresa);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Empresa> updateCompany(@PathVariable Long id, @RequestBody Empresa empresa) {
		Empresa updateEmpresa = serviceCadastro.updateCadastro(id, empresa);

		return ResponseEntity.status(200).body(updateEmpresa);
	}

}
