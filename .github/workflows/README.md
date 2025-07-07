# Configuração do Workflow de Publicação NPM

Este repositório possui um workflow do GitHub Actions configurado para publicar automaticamente a biblioteca no NPM.

## Configuração Necessária

### 1. Secrets do GitHub

Você precisa configurar os seguintes secrets no seu repositório GitHub:

#### `NPM_TOKEN`
1. Acesse [npmjs.com](https://www.npmjs.com) e faça login
2. Vá em **Account Settings** → **Access Tokens**
3. Clique em **Generate New Token** → **Classic Token**
4. Selecione **Automation** como tipo
5. Copie o token gerado
6. No GitHub, vá em **Settings** → **Secrets and variables** → **Actions**
7. Clique em **New repository secret**
8. Nome: `NPM_TOKEN`
9. Valor: cole o token do NPM

### 2. Como Usar o Workflow

O workflow pode ser acionado de duas formas:

#### Opção 1: Release Manual (Recomendado)
1. Vá na aba **Actions** do seu repositório
2. Selecione **Publish to NPM**
3. Clique em **Run workflow**
4. Escolha o tipo de versão (patch, minor, major)
5. Clique em **Run workflow**

Este método irá:
- Incrementar a versão no `package.json`
- Executar testes e validações
- Publicar no NPM
- Criar uma release no GitHub

#### Opção 2: Trigger Automático por Release
1. Crie uma nova release no GitHub
2. O workflow será executado automaticamente
3. A versão atual será publicada no NPM

### 3. Verificações Executadas

Antes da publicação, o workflow executa:
- ✅ Lint (ESLint)
- ✅ Type checking (TypeScript)
- ✅ Testes unitários
- ✅ Build da biblioteca

### 4. Estrutura dos Arquivos Publicados

O workflow publica apenas a pasta `dist/` conforme configurado no `package.json`:

```json
{
  "files": ["dist"],
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts"
}
```

## Troubleshooting

### Erro de Permissão NPM
- Verifique se o token NPM tem permissões de escrita
- Confirme se você é colaborador/owner do pacote no NPM

### Erro de Versionamento
- Certifique-se de que a versão no `package.json` não conflita com versões já publicadas
- Use `npm version` localmente para testar incrementos de versão

### Testes Falhando
- Execute `npm test` localmente para identificar problemas
- Corrija os testes antes de tentar publicar novamente
