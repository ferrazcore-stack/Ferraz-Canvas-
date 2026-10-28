# FERRAZ Canvas

Ferramenta independente de criação visual e técnica. Esta branch contém um **protótipo funcional inicial**, ainda não pronto para fabricação, uso comercial definitivo ou dados reais.

## Ferramentas iniciadas
- **Desenho técnico:** cadastro de peças, dimensões, quantidades, material e espessura, com esquema visual simples.
- **Plano de corte:** medidas da chapa, perda de corte configurável, peças, paginação preliminar por faixas e estimativa de aproveitamento.
- **Proposta comercial:** itens/serviços por ambiente, quantidade, preço unitário, desconto simples e total estimado.
- **Prancha:** dados básicos e prévia para impressão.
- **Comparativo de fornecedores** e **trabalho livre**.
- **Histórico local de revisões**, restauração como nova revisão e backup JSON.

## Documentação
- [Especificação mestre](docs/ESPECIFICACAO-MESTRE.md)
- [Auditoria funcional revisada](docs/AUDITORIA.md)
- [Plano técnico](docs/PLANO-TECNICO.md)

## Executar localmente
Requer Node.js LTS e npm.

```bash
npm install
npm run dev
```

Verifique o build antes de usar:
```bash
npm run build
```

## Limites importantes
- O projeto salva no armazenamento local do navegador. Não há sincronização, login, armazenamento remoto ou backup automático.
- O plano de corte usa uma heurística retangular por faixas; não é nesting industrial nem saída CNC e não considera veio, defeitos, rotação automática ou todas as restrições de corte.
- O desenho não é um CAD completo: não há cotas gráficas editáveis, recortes complexos ou DXF.
- A prancha ainda não permite posicionar e redimensionar livremente todos os elementos.
- A proposta não implementa todas as regras comerciais, MFC, instalação/frete/impostos ou separação completa de campos internos e externos.
- A prévia PDF depende de “Imprimir > Salvar como PDF” do navegador; o arquivo final ainda precisa de inspeção visual.
- Build e testes automatizados ainda precisam ser executados e confirmados. Não considerar este protótipo validado para produção.

Nenhuma publicação em produção ou serviço pago deve ser ativado sem autorização expressa.
