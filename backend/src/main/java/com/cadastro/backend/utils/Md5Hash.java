package com.cadastro.backend.utils;

import org.apache.commons.codec.digest.DigestUtils;

public class Md5Hash {

	public static String Md5HashConvert(String password) {

		String md5Hex = DigestUtils.md5Hex(password).toUpperCase();

		return md5Hex;
	}

}
