# 🚀 QUICK START - Sistema de Contatos

## ⚡ 5 Passos para Funcionar em 5 minutos

### 1️⃣ Criar arquivo `.env`
Crie um arquivo chamado `.env` **dentro da pasta `backend/`**:

```plaintext
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=aaaa bbbb cccc dddd
PORT=3000
```

**Onde pegar a senha:**
1. Acesse: https://myaccount.google.com/apppasswords
2. Selecione Mail + Windows (seu SO)
3. Copie a senha (16 caracteres)

---

### 2️⃣ Instalar Dependências
```bash
cd backend
npm install
```

---

### 3️⃣ Iniciar o Servidor
```bash
npm start
```

Você verá:
```
✅ Servidor de email conectado com sucesso
Servidor rodando na porta 3000
Acesse: http://localhost:3000
```

---

### 4️⃣ Abrir no Navegador
Acesse: `http://localhost:3000`

---

### 5️⃣ Testar
1. Vá para "Entre em Contato"
2. Preencha o formulário
3. Clique "Enviar Mensagem"
4. Verifique seu email! ✉️

---

## ❌ Erro 405?

**Solução:** O servidor precisa estar rodando!

```bash
# Na pasta backend:
npm start
```

Depois recarregue a página no navegador (F5).

---

## 📦 Arquivos Importantes

```
backend/
├── .env              ← CRIE ESTE ARQUIVO
├── server.js         ← Servidor Express
├── package.json      ← Dependências
└── env-example.txt   ← Exemplo de .env
```

---

## ✅ Tudo Pronto!

Se chegou até aqui e o servidor está rodando, você consegue enviar mensagens de contato! 🎉

Dúvidas? Consulte [ERRO_405.md](ERRO_405.md) ou [SETUP_CONTATOS.md](../SETUP_CONTATOS.md)
