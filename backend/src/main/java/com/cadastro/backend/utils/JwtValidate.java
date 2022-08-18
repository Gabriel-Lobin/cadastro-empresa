package com.cadastro.backend.utils;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

import javax.crypto.SecretKey;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

public class JwtValidate {

	/**
	 * https://www.treinaweb.com.br/blog/implementando-autenticacao-baseada-em-jwt-em-uma-api-restful-jax-rs
	 * 
	 * https://javarepos.com/lib/jwtk-jjwt-java-security correção do erro no jwt.
	 */

	private static final SecretKey CHAVE = Keys.secretKeyFor((SignatureAlgorithm.HS512));

	public static String createToken(String name) {

		String jwtToken = Jwts.builder()
				.setSubject(name)
				.setIssuedAt(new Date())
				.setExpiration(
						Date.from(LocalDateTime
								.now()
								.plusMinutes(30L)
								.atZone(ZoneId.systemDefault())
								.toInstant()))
				.signWith(CHAVE).compact();

		return jwtToken;
	}
}
