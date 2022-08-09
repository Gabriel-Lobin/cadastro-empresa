package com.cadastro.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cadastro.backend.model.Empresa;

@Repository
public interface RepositoryCadastro extends JpaRepository<Empresa, Long> {

}
