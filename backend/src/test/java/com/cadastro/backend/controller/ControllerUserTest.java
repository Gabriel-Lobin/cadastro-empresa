package com.cadastro.backend.controller;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import com.cadastro.backend.model.User;
import io.restassured.http.ContentType;

import static io.restassured.RestAssured.given;

class ControllerUserTest {
	User loginUser = new User("rogerinho", "roger@gmail.com", "123456");
    
	@Test
	@DisplayName("1- testando o cadastro do user")
	void testCadastroControllerUser() {
		String result = given().body(loginUser).contentType(ContentType.JSON).post("/login/cadastro").asString();
        Assertions.assertEquals("Cadastrado com sucesso!", result);
	}
	
	@Test
	@DisplayName("2- testando o login do user")
	void testLoginControllerUser() {
		String result = given().body(loginUser).contentType(ContentType.JSON).post("/login/cadastro").asString();
		String token = given().body(loginUser).contentType(ContentType.JSON).post("/login").asString();
		Assertions.assertNotNull(result);
        Assertions.assertNotNull(token);
	}

}
