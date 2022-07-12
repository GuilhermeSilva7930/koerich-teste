package com.guisilva.koerich.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.guisilva.koerich.entities.Produto;
import com.guisilva.koerich.services.ProdutoService;

@RestController
@RequestMapping(value = "produtos")
public class ProdutoResource {
	@Autowired
	private ProdutoService service;
	
	@GetMapping()
	private List<Produto> findAll() {
		return service.findAll();
	}
	
	@PostMapping("/save")
	private Produto save(@RequestBody Produto produto) {
		return service.save(produto);
	}
	
	@PutMapping("/update")
	private Produto update(@RequestBody Produto produto) {
		return service.save(produto);
	}
	
	@DeleteMapping("delete/{id}")
	private void deleteById(@PathVariable Long id) {
		service.deleteById(id);
	}
}
