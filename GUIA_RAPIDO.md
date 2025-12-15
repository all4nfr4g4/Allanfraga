# 📧 Sistema de Contatos - Portfólio Alan Fraga

Formulário de contato funcional com envio de email via **Node.js + Nodemailer**.

---

## 🚀 Quick Start (5 minutos)

### 1️⃣ Configure o Gmail

Gere uma **senha de app** do Gmail (não é sua senha normal):

1. Acesse: https://myaccount.google.com/apppasswords
2. Selecione: **Mail** + **Windows** (seu SO)
3. Clique: **Generate**
4. Copie a senha (16 caracteres com espaços)

**Pré-requisito**: Ative **autenticação de 2 fatores** em https://myaccount.google.com

### 2️⃣ Configure o `.env`

Edite `backend/.env`:

```env
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=aaaa bbbb cccc dddd
PORT=3000
```

### 3️⃣ Instale e Inicie

```bash
cd backend
npm install
npm start
```

Saída esperada:
```
✅ Servidor de email conectado com sucesso
Servidor rodando na porta 3000
Acesse: http://localhost:3000
```

### 4️⃣ Teste

- Abra: `http://localhost:3000`
- Vá para "Entre em Contato"
- Preencha e clique "Enviar"
- Verifique seu email ✉️

---

## 🔐 Por Que Nodemailer?

✅ **Seguro**: Credenciais no `.env` (não no código)  
✅ **Direto**: Email vai direto para você (não precisa de terceiros)  
✅ **Confiável**: Usa infraestrutura do Gmail  
✅ **Simples**: Uma linha de configuração  

---

## 📋 Estrutura

```
backend/
├── server.js       # Servidor Express
├── package.json    # Dependências
├── .env           # Credenciais (não commitar!)
└── node_modules/  # Instalado automaticamente
```

---

## 📧 O Email que Você Recebe

Nome da pessoa  
Email de resposta  
Assunto  
Mensagem completa  

---

## ❌ Erro 405?

1. Verifique: `npm start` rodando
2. Confirme: `.env` preenchido
3. Recarregue: F5 no navegador

Veja `ERRO_405.md` para mais.

---

## 🔧 Deploy para Produção

Para colocar online:

1. Escolha: Heroku, Railway, Render ou similar
2. Configure: Variáveis de ambiente `.env`
3. Deploy: `git push`

---

**Status**: ✅ Pronto para usar  
**Última atualização**: 15 de dezembro de 2025
