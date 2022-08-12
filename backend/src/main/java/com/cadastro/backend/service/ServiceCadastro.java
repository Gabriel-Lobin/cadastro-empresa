package com.cadastro.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cadastro.backend.model.Empresa;
import com.cadastro.backend.repository.RepositoryCadastro;

import com.cadastro.backend.model.Empresa;
import com.cadastro.backend.repository.RepositoryCadastro;

@Service
public class ServiceCadastro {

    @Autowired
    private RepositoryCadastro cadastro;

    public List<Empresa> getAll() {

        List<Empresa> listCadastro = cadastro.findAll();

        return listCadastro;
    }

    public Empresa newCadastro(Empresa empresa) {

        Empresa newCadastro = cadastro.save(empresa);
        return newCadastro;
    }
}
