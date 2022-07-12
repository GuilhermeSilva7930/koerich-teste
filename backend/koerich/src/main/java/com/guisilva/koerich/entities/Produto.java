package com.guisilva.koerich.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Produto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String produto;
	private Integer quantidade;
	private Integer defeito;
	private double valor;
	private String imagem;
	
	public Produto() {
	}
	
	public Produto(String produto, Integer quantidade, Integer defeito, double valor, String imagem) {
		this.produto = produto;
		this.quantidade = quantidade;
		this.defeito = defeito;
		this.valor = valor;
		this.imagem = imagem;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProduto() {
		return produto;
	}

	public void setProduto(String produto) {
		this.produto = produto;
	}

	public Integer getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

	public Integer getDefeito() {
		return defeito;
	}

	public void setDefeito(Integer defeito) {
		this.defeito = defeito;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}
}
