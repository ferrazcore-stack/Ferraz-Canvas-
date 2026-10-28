# FERRAZ Canvas

Aplicativo independente para organizar trabalhos visuais e técnicos da FERRAZ, com foco em clareza, responsividade e preservação de versões.

## Documentação
- [Especificação mestre](docs/ESPECIFICACAO-MESTRE.md)
- [Auditoria inicial](docs/AUDITORIA.md)
- [Plano técnico](docs/PLANO-TECNICO.md)

## Estado atual
Esta branch contém a base documental e o protótipo inicial. Não é uma versão pronta para dados reais e não foi publicada.

## Executar localmente
Requer Node.js LTS e npm.

```bash
npm install
npm run dev
```

Validar build com `npm run build`.

## Limitação importante
O protótipo usa armazenamento local do navegador. Não oferece sincronização entre dispositivos, autenticação, backup remoto nem recuperação garantida. Não usar com dados sensíveis ou em produção antes de implementar e testar armazenamento persistente, segurança e exportação.
