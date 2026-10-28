# Auditoria funcional revisada — FERRAZ Canvas

**Data:** 27/10/2026  
**Repositório:** `ferrazcore-stack/Ferraz-Canvas-`  
**Branch auditada:** `audit/revisao-mestre-inicial`  
**Base de comparação:** requisitos já explicados pela usuária em conversas anteriores + arquivos e código atualmente existentes nesta branch.  
**Status:** auditoria funcional atualizada após a primeira implementação dos editores; build e testes ainda não verificados.

## 1. Conclusão executiva

A branch já não está limitada à listagem: foi implementada uma primeira camada editável de desenho esquemático, plano de corte preliminar, proposta, prancha, comparativo, histórico e prévia imprimível. Ainda NÃO entrega o produto completo exigido; é uma implementação inicial e não validada por build/testes. A auditoria anterior identificou corretamente a ausência de aplicação na `main`, mas o primeiro protótipo era apenas uma vitrine de projetos.

O Canvas deve ser tratado como uma **ferramenta independente de criação visual e técnica**, e não como uma simples tela de cadastro nem como o sistema operacional completo de gestão de uma marmoraria. Deve permitir criar os documentos e desenhos, editá-los, revisar medidas, visualizar o resultado e exportar arquivos utilizáveis.

## 2. Escopo funcional real

### A. Desenho técnico cotado
**Situação atual: NÃO IMPLEMENTADO.**

Requisitos:
- Criar e editar desenhos técnicos de peças/ambientes, sem depender de imagem estática.
- Inserir cotas e medidas; distinguir dimensões gerais, recortes, espessuras, níveis, testeiras/encabeçamentos, emendas, colagens e acabamentos.
- Representar planta, vistas/elevações, cortes e detalhes quando necessários.
- Identificar cada peça e manter suas medidas ligadas ao projeto.
- Mostrar unidades e escala; permitir conferir cotas antes de gerar/exportar.
- Aceitar referências e imagens anexadas, mas não substituir desenho editável por uma imagem decorativa.
- Avisar sobre inconsistências de medidas antes de produzir o resultado; não corrigir silenciosamente dimensões críticas.
- Preparar suporte a 2D e anexos/modelos 3D. Não declarar geração CAD/3D real até que formatos e ferramentas tenham sido implementados e testados.

### B. Plano de corte e paginação de chapas
**Situação atual: NÃO IMPLEMENTADO.**

Requisitos:
- Cadastrar chapa/material com largura, comprimento, espessura, orientação e, quando aplicável, imagem/textura e direção dos veios.
- Cadastrar peças com medidas, quantidades, identificação, acabamento, folgas e restrições.
- Considerar largura/perda do disco por corte, folgas e margem de segurança configuráveis.
- Montar uma paginação visual editável com peças posicionadas na chapa; evitar sobreposição, corte fora do limite e medidas impossíveis.
- Calcular área total, aproveitamento e sobra estimada, explicitando as premissas usadas.
- Considerar continuidade/direção dos veios e orientação da textura quando essa informação estiver disponível.
- Mostrar alertas e pedir confirmação quando dimensões ou condições não fecharem. Não afirmar que o plano é executável sem validar as regras geométricas.
- Permitir revisar, alterar e gerar uma ordem/plano de corte exportável com identificação da obra, material, chapa, peças, cotas e revisão.
- Distinguir desenho ilustrativo de plano validado para fabricação.

Referência de requisito já informado: chapa de 2,05 × 2,80 m, com perda de corte configurável e necessidade de manter veios alinhados. Em um exemplo anterior foi citada perda de 0,05 m; em outro, 0,5 mm por passagem. **Esses valores não são equivalentes e não devem virar um padrão fixo.** A ferramenta deve aceitar o valor e a unidade corretos para cada equipamento/serviço e exibi-los claramente antes do cálculo.

### C. Orçamento / proposta comercial
**Situação atual: NÃO IMPLEMENTADO.**

Requisitos:
- Criar proposta com cliente/obra opcionais conforme o tipo de trabalho, material, itens, medidas, quantidades, serviços, observações e condições comerciais.
- Organizar itens por ambiente quando aplicável; um ambiente pode conter várias peças, serviços e informações associadas.
- Calcular quantidades e valores a partir das medidas e preços inseridos, deixando explícitas as fórmulas relevantes.
- Permitir revisão e versões identificadas; preservar versões anteriores e registrar qual foi emitida/aprovada, sem sobrescrever silenciosamente.
- Separar informações de apresentação ao cliente de notas/custos internos; dados internos não podem vazar para o PDF externo.
- Pré-visualizar o documento final e exportar PDF real, com paginação, cabeçalho, identificação e leitura adequada em A4 quando esse for o formato escolhido.
- Permitir ajustes manuais controlados e sinalizar quando alteração manual divergir do cálculo.
- Não inventar preços, impostos, condições ou cláusulas: devem vir dos dados do projeto ou de configurações explícitas.

O Canvas precisa produzir a proposta como documento editável dentro do fluxo; um cartão que apenas diz “Proposta comercial” não atende ao requisito.

### D. Prancha técnica / prancha de apresentação
**Situação atual: NÃO IMPLEMENTADO.**

Requisitos:
- Ser uma área de composição independente, semelhante a uma prancha de apresentação arquitetônica/CAD para entregar ao cliente ou à equipe técnica — não apenas uma tela do sistema.
- Inserir e organizar desenhos, vistas, cotas, imagens de material, paginação, detalhes e notas.
- Configurar tamanho/orientação da folha, escala quando aplicável, margens, legenda, título, cliente/obra, material, espessura, unidade, data e revisão.
- Permitir mover, redimensionar e organizar elementos na folha; manter proporções e legibilidade.
- Visualizar antes de exportar e gerar PDF em escala/página coerente com as opções escolhidas.
- Distinguir prancha para cliente de prancha técnica/interna quando houver conteúdo diferente.

### E. Projeto, cliente/obra e arquivos relacionados
**Situação atual: PARCIALMENTE IMPLEMENTADO.**

O protótipo permite criar um registro simples com nome, cliente, tipo e número de versão no armazenamento local do navegador. Ainda não oferece:
- Pasta do projeto/cliente/obra com documentos e anexos centralizados.
- Abertura do projeto para edição de seu conteúdo real.
- Histórico detalhado de alterações, versões imutáveis ou restauração segura.
- Anexos e gestão de arquivos.
- Exportação dos dados e recuperação confiável.
- Pesquisa/filtros avançados e relações entre orçamento, desenho, paginação e prancha.

Regra funcional: documentos e desenhos devem permanecer vinculados ao projeto/obra correta para não misturar trabalhos. Um trabalho livre pode existir sem cliente. O Canvas não deve incorporar por engano os módulos operacionais do aplicativo de gestão da marmoraria; deve produzir e organizar os artefatos de trabalho e permitir associação entre eles.

## 3. Auditoria do código existente

| Área | Evidência na branch atual | Resultado |
|---|---|---|
| Painel/listagem de projetos | `src/App.jsx` lista cartões e pesquisa nome/cliente/tipo | Parcial |
| Criar projeto | Formulário com nome, cliente e tipo | Parcial |
| Edição do conteúdo do projeto | Não há tela/estrutura de edição do documento | Ausente |
| Desenho técnico editável | Não há editor geométrico, cotas ou vistas | Ausente |
| Plano de corte/paginação | Não há motor de posicionamento, validação ou cálculo de aproveitamento | Ausente |
| Proposta/orçamento | Não há itens, fórmulas, versões documentais ou PDF | Ausente |
| Prancha editável | Não há tela de composição de folha | Ausente |
| Versões | Botão incrementa apenas um número no cartão | Insuficiente |
| Persistência | `localStorage` do navegador | Provisória; sem sincronização/backup |
| Exportação | Não há exportador real de PDF/CAD | Ausente |
| Testes/build | Nenhum resultado de execução comprovado nesta auditoria | Não verificado |
| Autenticação/sincronização | Não implementadas | Ausente |
| Dots / DOTS | Não há integração comprovada | Não verificado/ausente |
| Publicação | Nenhuma implantação comprovada | Não realizada |

## 4. Regras de precisão e segurança operacional

1. Não inventar, arredondar ou alterar medidas críticas sem avisar.
2. Exibir unidade junto a toda medida e validar conversões entre mm, cm e m.
3. Distinguir dimensões informadas, calculadas e alteradas manualmente.
4. Conferir se peças cabem na chapa considerando disco, folgas, orientação e restrições.
5. Mostrar alertas antes de exportar/liberar se houver conflito, dimensão ausente ou plano inviável.
6. Não declarar um arquivo como salvo/exportado se a operação falhar.
7. Preservar revisões anteriores; restaurar gerando uma nova revisão derivada.
8. Não misturar dados de clientes/obras diferentes.
9. Separar conteúdo interno de conteúdo que será entregue ao cliente.
10. Não enviar desenhos, medidas, propostas ou outros dados a agentes externos sem integração explícita e autorização definida.

## 5. Arquitetura necessária — decisão por etapas

- **Modelo comum de projeto:** cliente/obra opcional, tipo, unidades, material, anexos, estado, revisão e histórico.
- **Módulos de artefato:** proposta comercial, desenho técnico, plano de corte/paginação e prancha.
- **Dados relacionados:** quando um item do orçamento também existir no desenho ou no plano de corte, permitir reutilizar medidas e material, mantendo origem e possibilidade de revisão.
- **Persistência:** localStorage serve apenas como protótipo; antes de confiar trabalhos reais, definir autenticação, armazenamento remoto, isolamento, sincronização, exportação/backup e recuperação.
- **Exportação:** definir e testar formatos por módulo. PDF é requisito de entrega; CAD/3D deve ser tratado de acordo com formatos realmente suportados, sem prometer compatibilidade não testada.
- **Tecnologia:** manter a stack existente da branch até a validação técnica; não introduzir serviços pagos ou integrações sem aprovação.
- **Dots:** tratar Dots pessoal e DOTS interno como integrações separadas e não afirmar que existem até serem configuradas e testadas.

## 6. Ordem de implementação recomendada

1. **Base comum editável:** abrir/criar projeto, salvar conteúdo, anexar arquivos, estado de salvamento e histórico/revisões.
2. **Desenho técnico cotado:** editor 2D com unidades, peças, cotas e validações.
3. **Plano de corte/paginação:** chapa, peças, perda de corte configurável, orientação de veios, cálculo e alertas.
4. **Prancha:** composição de folha reutilizando desenho, plano de corte, imagens e notas.
5. **Proposta/orçamento:** itens, medidas, serviços, cálculos, versão e PDF externo/interno.
6. **Persistência confiável e segurança:** autenticação, isolamento, sincronização, backup e recuperação antes de uso com dados reais.
7. **QA e publicação:** testes geométricos e documentais, responsividade, acessibilidade, build, verificação de arquivos exportados e preview protegido. Produção só com autorização expressa.

A ordem acima prioriza as ferramentas visuais/técnicas que motivam o Canvas; os módulos podem compartilhar o mesmo projeto e dados, mas não devem ser confundidos com o sistema completo de gestão da marmoraria.

## 7. Critérios para considerar o Canvas funcional

- A usuária consegue criar e editar um desenho cotado, mudar medidas e ver o resultado atualizado.
- A ferramenta calcula e apresenta um plano de corte coerente com chapa, peças, perda e orientação configuradas; erros geométricos geram alertas.
- A usuária consegue montar uma prancha e exportar um PDF revisável e legível.
- A usuária consegue gerar uma proposta comercial com cálculos, revisão e separação entre conteúdo interno e externo.
- Os documentos ficam vinculados ao projeto correto, reabrem sem perda e mantêm histórico.
- Os arquivos exportados são abertos e conferidos; não basta apenas existir um botão de exportação.
- Build e testes passam em ambiente reproduzível antes de mesclar.
- Nenhuma publicação em produção nem ativação paga ocorre sem autorização.

## 8. Limitações desta auditoria

A auditoria comparou os requisitos recuperados das conversas e o conteúdo acessível da branch `audit/revisao-mestre-inicial`. Não executou a aplicação, não comprovou build/testes e não inspecionou ambientes privados, segredos ou serviços externos. A `main` original foi previamente verificada como contendo apenas um README; esta branch é uma base inicial criada depois da auditoria, não uma implementação preexistente completa.

## Veredito

**Status do produto: NÃO PRONTO para o uso pretendido.**  
**Status do protótipo: estrutura inicial de navegação/listagem, insuficiente para desenhar, orçar, paginar chapas ou montar pranchas.**  
**Próxima ação técnica: implementar os módulos funcionais acima nesta branch isolada, começando pelo editor de desenho técnico e pelo modelo de dados compartilhado; validar cada entrega com testes antes de qualquer merge ou implantação.**


## 9. Atualização após a primeira implementação funcional (27/10/2026)

Implementado nesta branch:
- Editor inicial de desenho técnico com lista de peças, dimensões, quantidades e espessura.
- Plano de corte preliminar por faixas, com chapa, perda configurável, quantidade posicionada/não posicionada e aproveitamento estimado.
- Proposta com ambientes, itens/serviços, quantidade, valor unitário, desconto por ambiente e total estimado.
- Campos iniciais para prancha, comparativo de fornecedores e trabalho livre.
- Prévia de documento com fluxo de impressão do navegador para “Salvar como PDF”.
- Histórico de revisões com restauração como nova revisão.
- Backup de projeto em JSON e salvamento local automático.

Limitações que continuam abertas:
- Nenhum build/teste foi executado e confirmado nesta etapa.
- Plano de corte é heurístico por faixas: não faz nesting otimizado, rotação automática, análise de veios/defeitos, simulação real do disco nem geração CNC.
- Desenho não é CAD completo: sem recortes complexos, cotas gráficas editáveis, vistas/cortes completos ou DXF.
- Prancha ainda não permite posicionar/redimensionar livremente os elementos.
- Proposta ainda não separa formalmente campos internos e externos, nem implementa MFC, instalação, frete, impostos ou todas as regras comerciais.
- PDF depende do diálogo de impressão do navegador e precisa ser verificado visualmente; não foi validado como exportação técnica de produção.
- Salvamento permanece no navegador, sem nuvem, sincronização ou backup automático.
- Não há autenticação, integração Dots/DOTS ou implantação.

**Veredito atualizado:** protótipo com editores iniciais em construção; NÃO PRONTO para fabricação, uso comercial definitivo ou dados reais. Próximo bloqueio obrigatório: instalar dependências e passar build/QA; depois evoluir a precisão do desenho/plano de corte e a composição de prancha.
