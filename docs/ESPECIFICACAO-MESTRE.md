# FERRAZ Canvas — Especificação Mestre

**Versão:** 1.0 | **Data:** 27/10/2026 | **Status:** base de planejamento e protótipo.

## Objetivo
Aplicativo de uso direto para organizar trabalhos visuais e técnicos, com fluxo claro, suporte a desktop/celular, preservação de versões e exportação real nos formatos efetivamente suportados.

## Princípios definidos
- Produto relacionado à FERRAZ Platform, mas com interface própria e dependência de execução minimizada.
- Vercel é hospedagem planejada, ainda não configurada ou validada.
- Priorizar opções gratuitas/baixo custo; não ativar serviços pagos sem autorização.
- Interface calma, organizada, responsiva e com baixo ruído visual.
- Preservar versões anteriores; evitar operações irreversíveis.
- Não publicar/implantar sem autorização expressa.

## Tipos de trabalho previstos
- Proposta comercial.
- Prancha/apresentação.
- Desenho técnico.
- Comparativo de fornecedores.
- Trabalho livre.

Trabalho pode estar associado a cliente/obra quando útil, mas cliente não é obrigatório para trabalho livre.

## Fluxo principal
1. Abrir área de trabalho.
2. Criar/localizar projeto.
3. Escolher tipo e inserir dados.
4. Editar e anexar materiais.
5. Verificar estado de salvamento.
6. Criar versões em marcos relevantes e manualmente.
7. Visualizar e exportar em formato suportado.
8. Reabrir sem perder o histórico.

## Salvamento e versões
- Mostrar claramente salvando/salvo/erro.
- Versões antigas preservadas e somente leitura por padrão.
- Restaurar versão antiga criando nova versão derivada, sem apagar a atual.
- Planejar conflitos, perda de conexão, encerramento inesperado e backup.
- Armazenamento local do navegador é provisório, não sincroniza nem garante backup.

## Segurança e privacidade
Definir autenticação, autorização, armazenamento, backup e isolamento antes de dados reais. Segurança de acesso deve ser aplicada no servidor se houver serviços remotos. Não incluir segredos no frontend. Não enviar dados a agentes de IA sem finalidade e autorização definidas.

## Dots
Dots pessoal e DOTS interno são responsabilidades distintas. Não considerar agentes configurados/integrados até verificação. Integrações e custos precisam ser avaliados antes da ativação.

## Direção visual
Hierarquia simples, navegação previsível, ações principais claras, responsividade, estado do projeto/versão/salvamento visíveis e prévia antes de exportar.

## Limite do MVP
Primeira fase: protótipo navegável para organizar projetos e validar experiência. Ferramentas avançadas de desenho, geração técnica, CAD, autenticação, sincronização e integrações devem entrar em fases próprias após especificação e testes.

## Critérios de aceitação
- Criar, editar, fechar e reabrir projeto sem perda inesperada no ambiente suportado.
- Falha de salvamento/exportação nunca é apresentada como sucesso.
- Versões anteriores são preservadas.
- Fluxos principais funcionam em desktop/celular.
- Arquivos exportados são abertos e verificados.
- Segurança, permissões e recuperação são testadas antes de dados reais.
