package io.github.joaopaulu.minhasfinancas.repository;

import io.github.joaopaulu.minhasfinancas.model.entity.Lancamento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LancamentoRepository extends JpaRepository<Lancamento, Long> {
}
