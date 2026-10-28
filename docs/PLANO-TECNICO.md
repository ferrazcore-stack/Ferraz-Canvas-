# Plano técnico — FERRAZ Canvas

## Fase 0 — Base e revisão
- [x] Confirmar o repositório específico.
- [x] Registrar que main estava praticamente vazia.
- [x] Criar especificação e auditoria em branch isolada.
- [x] Revisar escopo funcional real: desenho técnico, plano de corte, prancha, proposta, comparativo e trabalho livre.

## Fase 1 — Protótipo navegável
- [x] Criar área de projetos e formulário de novo trabalho.
- [x] Implementar layout responsivo inicial.
- [x] Indicar limites do armazenamento local.
- [ ] Executar build e testes em ambiente local/CI.

## Fase 2 — Persistência confiável
- [ ] Escolher banco e armazenamento conforme custo, recuperação e sincronização.
- [ ] Definir autenticação e permissões.
- [ ] Implementar salvamento com tratamento de erro/conflito.
- [x] Implementar snapshots de revisão e restauração como nova revisão no protótipo local.
- [x] Implementar exportação de backup JSON; PDF preliminar via impressão do navegador.

## Fase 3 — Ferramentas
- [x] Priorizar e iniciar editores técnicos e comerciais.
- [x] Criar modelo inicial de dados por tipo de trabalho.
- [ ] Implementar anexos e exportações técnicas reais (DXF/CAD e PDF verificado); a prévia imprimível inicial já existe.
- [ ] Criar testes automatizados.

## Fase 4 — Segurança e integrações
- [ ] Validar autorização, isolamento e privacidade.
- [ ] Definir escopo/consentimento de Dots e DOTS.
- [ ] Testar acessibilidade, responsividade e recuperação.
- [ ] Verificar limites e custos dos serviços.

## Fase 5 — Publicação
- [ ] Confirmar Vercel e variáveis sem expor segredos.
- [ ] Rodar build, testes e verificação de dependências.
- [ ] Criar preview protegido após autorização.
- [ ] Validar preview antes de qualquer produção.

## Regra de liberação
Não publicar em produção, ativar serviços pagos ou integrar serviços externos sem autorização expressa.


## Entrega parcial registrada em 27/10/2026
- [x] Editor inicial de desenho técnico (peças, medidas e quantidades).
- [x] Paginação preliminar por faixas com perda de corte configurável e métricas estimadas.
- [x] Proposta comercial básica com ambientes, itens, valores e desconto simples.
- [x] Campos iniciais para prancha, comparativo e trabalho livre.
- [x] Prévia imprimível, histórico de revisões e backup JSON.
- [ ] Executar build e testes automatizados; ainda não confirmados.
- [ ] Testar geometria e validar algoritmo de corte contra casos conhecidos.
- [ ] Completar editor de prancha e cotas/CAD, regras de orçamento e formatos de exportação.
- [ ] Projetar armazenamento seguro/sincronização antes de uso com dados reais.

Os itens marcados como concluídos descrevem apenas o protótipo nesta branch, não uma solução pronta para produção.
