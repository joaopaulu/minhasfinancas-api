package io.github.joaopaulu.minhasfinancas.repository;

import io.github.joaopaulu.minhasfinancas.model.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
