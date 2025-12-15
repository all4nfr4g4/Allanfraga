# 📧 Configuração Completa do Sistema de Contatos

## 🎯 Objetivo

Enviar mensagens de contato **direto para seu email** usando Node.js + Gmail.

---

## ✅ Solução Passo a Passo

### **Passo 1: Configurar o Gmail**

#### 1.1 - Ativar Autenticação de Dois Fatores
1. Acesse: https://myaccount.google.com/
2. Clique em "Segurança" (lado esquerdo)
3. Procure por "Autenticação de 2 etapas"
4. Siga as instruções para ativar

#### 1.2 - Gerar Senha de App
1. Acesse: https://myaccount.google.com/apppasswords
2. Selecione:
   - **App**: Mail
   - **Device**: Windows Computer (ou seu SO)
3. Clique em "Generate"
4. Copie a senha gerada (16 caracteres, com espaços)

**Exemplo:**
```
aaaa bbbb cccc dddd
```

---

### **Passo 2: Configurar o Arquivo .env**

1. Acesse a pasta `backend/`
2. Crie um arquivo chamado `.env`
3. Copie o conteúdo de `env-example.txt`:

```plaintext
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=aaaa bbbb cccc dddd
PORT=3000
```

⚠️ **IMPORTANTE**: Adicione `.env` ao `.gitignore` para não compartilhar suas credenciais!

```bash
echo ".env" >> .gitignore
```

---

### **Passo 3: Instalar Dependências**

```bash
cd backend
npm install
```

Isso instalará:
- ✅ **express** - Framework web
- ✅ **nodemailer** - Envio de emails
- ✅ **cors** - Permitir requisições cross-origin
- ✅ **dotenv** - Carregar variáveis de ambiente

---

### **Passo 4: Iniciar o Servidor**

```bash
npm start
```

Ou se tiver script personalizado:

```bash
node server.js
```

**Saída esperada:**
```
✅ Servidor de email conectado com sucesso
Servidor rodando na porta 3000
Acesse: http://localhost:3000
```

---

### **Passo 5: Testar o Formulário**

1. Abra seu navegador e acesse: `http://localhost:3000`
2. Vá para a seção "Entre em Contato"
3. Preencha o formulário:
   - Nome: seu nome
   - Email: seu-email@gmail.com
   - Assunto: Teste
   - Mensagem: Testando o sistema de contatos
4. Clique em "Enviar Mensagem"

**Resultado esperado:**
- ✅ Notificação verde dizendo "Mensagem enviada com sucesso!"
- ✅ Você recebe um email em sua caixa de entrada
- 📨 Email com a mensagem, nome e email de quem enviou

---

## 🐛 Troubleshooting

### **Erro: "Erro ao enviar mensagem: connect ECONNREFUSED"**

**Causa**: Servidor não está rodando

**Solução**:
```bash
cd backend
npm start
```

---

### **Erro: "Todos os campos são obrigatórios"**

**Causa**: Algum campo do formulário está vazio

**Solução**: Preencha todos os campos antes de enviar

---

### **Erro: "Email inválido"**

**Causa**: Formato de email incorreto

**Solução**: Use um email válido (ex: seu-email@gmail.com)

---

### **Erro: "Erro de configuração do servidor"**

**Causa**: `.env` não foi criado ou está com valores errados

**Solução**:
1. Verifique se existe arquivo `.env` em `backend/`
2. Confirme que `EMAIL_USER` e `EMAIL_PASS` estão preenchidos
3. Reinicie o servidor

---

### **Erro: "Erro ao enviar: Invalid login"**

**Causa**: Credenciais do Gmail estão incorretas

**Solução**:
1. Verifique se gerou a senha de app corretamente
2. Confirme que ativou autenticação de 2 fatores
3. Copie exatamente a senha de app (com os espaços)

---

### **Não recebe email mas a mensagem diz "enviado"**

**Causa**: Email foi enviado mas chegou no spam/lixo eletrônico

**Solução**:
1. Verifique a pasta "Spam" do Gmail
2. Verifique o console do navegador (F12) para ver logs
3. Verifique os logs do servidor para mais detalhes

---

## 📊 Verificar Logs

### **No Navegador (Console)**

Pressione `F12` → Aba "Console"

Você verá mensagens como:
- 📨 "Enviando email para: http://localhost:3000/send-email"
- ✅ "Email enviado com sucesso"
- ❌ Mensagens de erro detalhadas

### **No Servidor (Terminal)**

O servidor mostrará:
- ✅ "Servidor de email conectado com sucesso"
- ✅ "Email enviado com sucesso de seu-email@gmail.com"
- ❌ Erros detalhados com stack trace

---

## 🔒 Segurança

### ⚠️ NÃO FAÇA:
- ❌ Compartilhe seu arquivo `.env`
- ❌ Faça commit do `.env` no Git
- ❌ Coloque credenciais no código JavaScript
- ❌ Use sua senha do Gmail (sempre use senha de app)

### ✅ FAÇA:
- ✅ Adicione `.env` ao `.gitignore`
- ✅ Use senha de app do Gmail
- ✅ Guarde suas credenciais com segurança
- ✅ Regenere senhas se as compartilhar acidentalmente

---

## 📋 Checklist Final

- [ ] Gmail com autenticação de 2 fatores ativada
- [ ] Senha de app gerada do Gmail
- [ ] Arquivo `.env` criado em `backend/`
- [ ] `.env` adicionado ao `.gitignore`
- [ ] Dependências instaladas (`npm install`)
- [ ] Servidor rodando (`npm start`)
- [ ] Servidor acessível em `http://localhost:3000`
- [ ] Email sendo recebido quando formulário é enviado
- [ ] Verificou pasta Spam/Lixo eletrônico

---

## 📞 Suporte

Se o problema persistir:

1. **Verifique os logs** no console do navegador (F12)
2. **Verifique os logs** do servidor no terminal
3. **Reinicie o servidor** após fazer alterações
4. **Limpe o cache** do navegador (Ctrl+Shift+Del)
5. **Testou outro navegador**?

---

## 🚀 Próximos Passos

Depois que tudo estiver funcionando localmente:

1. **Fazer deploy** para produção (Heroku, Railway, etc.)
2. **Configurar domínio** personalizado
3. **Adicionar rate limiting** para evitar spam
4. **Enviar email de confirmação** ao usuário
5. **Backup de mensagens** em banco de dados

---

**Última atualização**: 14 de dezembro de 2025
