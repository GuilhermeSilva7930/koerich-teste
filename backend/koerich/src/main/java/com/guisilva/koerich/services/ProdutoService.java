package com.guisilva.koerich.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.guisilva.koerich.entities.Produto;
import com.guisilva.koerich.repositories.ProdutoRepository;

@Service
public class ProdutoService {
	@Autowired
	private ProdutoRepository repository;
	
	public List<Produto> findAll() {
		return repository.findAll();
	}
	
	public Produto save(Produto produto) {
		return repository.save(produto);
	}
	
	public void deleteById(Long id) {
		repository.deleteById(id);
	}
}
