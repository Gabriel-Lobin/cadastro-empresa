package com.cadastro.backend.controller;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
@DisplayName("Teste do Controller Cadastro")
class ControllerCadastroTest {

	@Autowired
	private MockMvc mockMvc;

	@Test
	@DisplayName("1- testando o retorno com sucesso da rota '/empresa'")
	void testGetControllerCadastro() throws Exception {
		mockMvc
		.perform(get("/empresa"))
		.andExpect(status().isOk());
	}
	
	@Test
	@DisplayName("2- testando o tipo de conteúdo de retorno da rota '/empresa'")
	void testBodyControllerCadastro() throws Exception {
		mockMvc
		.perform(get("/empresa"))
		.andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk());
	}
	
	@Test
	@DisplayName("3- testando se o conteúdo de retorno da rota '/empresa' é um array")
	public void devEstudanteTestBodyArray() throws Exception {
		mockMvc
		.perform(get("/empresa"))
		.andDo(MockMvcResultHandlers.print())
		.andExpect(MockMvcResultMatchers.jsonPath("$").isArray());
	}

}
