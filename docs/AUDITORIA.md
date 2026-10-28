# Auditoria inicial — FERRAZ Canvas

**Data:** 27/10/2026  
**Repositório:** ferrazcore-stack/Ferraz-Canvas-  
**Escopo:** inspeção somente de leitura da branch main antes das alterações desta branch.

## Achados verificados
- Repositório público: https://github.com/ferrazcore-stack/Ferraz-Canvas-
- Branch padrão: main.
- A árvore inicial continha somente README.md (16 bytes); não havia aplicação, testes, documentação funcional nem configuração de build.
- ferrazcore-stack/ferraz-platform é um repositório separado e não deve ser considerado fonte do Canvas automaticamente.
- Nenhuma alteração foi feita na main e nenhuma implantação foi realizada.

## Lacunas e riscos
1. Sem aplicação, testes ou pipeline de validação.
2. Sem escolha validada para armazenamento remoto, autenticação, backup e sincronização.
3. Sem integração verificada com Dots/DOTS.
4. Vercel planejada, ainda não validada para este repositório.
5. Exportação PDF/CAD e ferramentas avançadas não estão implementadas nem testadas.
6. Armazenamento local não é suficiente para uso confiável entre dispositivos ou dados importantes.

## Mudanças desta branch
A branch audit/revisao-mestre-inicial recebe documentação e base inicial de protótipo para revisão. Não mesclar nem publicar automaticamente.

## Fora do escopo
Não foram verificados serviços privados, segredos, configurações de hospedagem, integrações Dots nem requisitos legais. Validar separadamente antes de produção.
