package com.guisilva.koerich;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.guisilva.koerich.entities.Produto;
import com.guisilva.koerich.repositories.ProdutoRepository;

@SpringBootApplication
public class KoerichApplication implements CommandLineRunner {

	@Autowired
	private ProdutoRepository repository;
	
	public static void main(String[] args) {
		SpringApplication.run(KoerichApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Produto p1 = new Produto("Geladeira", 10, 5, 2499.99, "foto.jpeg");
		Produto p2 = new Produto("Televisão", 32, 4, 1329.99, "foto.jpeg");
		
		repository.saveAll(Arrays.asList(p1, p2));
	}

}
