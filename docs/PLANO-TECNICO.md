# Plano técnico — FERRAZ Canvas

## Fase 0 — Base e revisão
- [x] Confirmar o repositório específico.
- [x] Registrar que main estava praticamente vazia.
- [x] Criar especificação e auditoria em branch isolada.
- [ ] Revisar escopo final do MVP.

## Fase 1 — Protótipo navegável
- [ ] Criar área de projetos e formulário de novo trabalho.
- [ ] Implementar layout responsivo.
- [ ] Indicar limites do armazenamento local.
- [ ] Executar build e testes em ambiente local/CI.

## Fase 2 — Persistência confiável
- [ ] Escolher banco e armazenamento conforme custo, recuperação e sincronização.
- [ ] Definir autenticação e permissões.
- [ ] Implementar salvamento com tratamento de erro/conflito.
- [ ] Implementar versões imutáveis e restauração como nova versão.
- [ ] Implementar backup e exportação dos dados.

## Fase 3 — Ferramentas
- [ ] Priorizar a ferramenta principal do MVP.
- [ ] Definir modelo de dados por tipo de trabalho.
- [ ] Implementar anexos, prévia e exportação real.
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
