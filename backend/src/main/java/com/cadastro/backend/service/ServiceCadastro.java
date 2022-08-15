package com.cadastro.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cadastro.backend.model.Empresa;
import com.cadastro.backend.model.RequestEmpresa;
import com.cadastro.backend.repository.RepositoryCadastro;

@Service
public class ServiceCadastro {

	@Autowired
	private RepositoryCadastro repositoryCadastro;

	public List<Empresa> getAll() {
		List<Empresa> listCadastro = repositoryCadastro.findAll();

		return listCadastro;
	}

	public Empresa newCadastro(Empresa empresa) {
		Empresa newCadastro = repositoryCadastro.save(empresa);

		return newCadastro;
	}

	public Optional<Empresa> findCadastroById(Long id) {
		Optional<Empresa> empresa = repositoryCadastro.findById(id);

		return empresa;
	}

	public Empresa deleteCadastro(Long id) {
		Optional<Empresa> empresaFinded = repositoryCadastro.findById(id);

		if (empresaFinded.isEmpty()) {

		}

		Empresa empresaDelete = empresaFinded.get();
		repositoryCadastro.delete(empresaDelete);

		return empresaDelete;
	}

	public Empresa updateCadastro(Long id, RequestEmpresa requestData) {
		Optional<Empresa> empresaFinded = repositoryCadastro.findById(id);

		if (empresaFinded.isEmpty()) {

		}
		
		Empresa empresaUpdate = empresaFinded.get();
		
		empresaUpdate.setRazaoSocial(requestData.getRazaoSocial());
		empresaUpdate.setNomeFantasia(requestData.getNomeFantasia());
		empresaUpdate.setCnpj(requestData.getCnpj());
		empresaUpdate.setTelefone(requestData.getTelefone());
				
		Empresa resultCadastro = repositoryCadastro.save(empresaUpdate);

		return resultCadastro;
	}
}
