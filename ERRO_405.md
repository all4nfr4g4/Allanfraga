# 🔴 ERRO 405 - Solução Rápida

## O que é Erro 405?
**405 Method Not Allowed** = O servidor não aceita a requisição POST nessa rota.

---

## ✅ Solução Passo a Passo

### **Passo 1: Reiniciar o Servidor**
```bash
cd backend
npm start
```

**Saída esperada:**
```
✅ Servidor de email conectado com sucesso
Servidor rodando na porta 3000
Acesse: http://localhost:3000
```

---

### **Passo 2: Verificar se o Servidor está Rodando**

Abra uma **aba nova do navegador** e acesse:
```
http://localhost:3000/api/test
```

Você deve ver:
```json
{
  "success": true,
  "message": "Servidor está funcionando corretamente!",
  "timestamp": "2025-12-14T..."
}
```

---

### **Passo 3: Testar via Console do Navegador**

1. Abra o navegador em `http://localhost:3000`
2. Pressione **F12** para abrir o console
3. Vá para a aba **Console**
4. Cole o seguinte código:

```javascript
fetch('/api/test')
  .then(r => r.json())
  .then(d => console.log('✅ Servidor OK:', d))
  .catch(e => console.error('❌ Erro:', e));
```

Se aparecer ✅, o servidor está certo.

---

### **Passo 4: Testar Envio de Email**

No console, cole:

```javascript
fetch('/send-email', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        user_name: 'Teste',
        user_email: 'seu-email@gmail.com',
        subject: 'Teste',
        message: 'Teste'
    })
})
.then(r => r.json())
.then(d => console.log('Resposta:', d))
.catch(e => console.error('Erro:', e));
```

---

## 🐛 Ainda Recebendo Erro 405?

### **Causa 1: Servidor não foi reiniciado**
```bash
# Ctrl+C para parar
# Depois rode novamente:
npm start
```

### **Causa 2: Porta 3000 já está em uso**
```bash
# Mude a porta:
PORT=3001 npm start
```

Depois acesse: `http://localhost:3001`

### **Causa 3: .env não está configurado**
Crie o arquivo `backend/.env`:
```
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app
PORT=3000
```

### **Causa 4: Dependências não instaladas**
```bash
cd backend
npm install
npm start
```

---

## 🧪 Script de Teste Automático

Se estiver no Linux/Mac, execute:
```bash
cd backend
bash test-server.sh
```

---

## 📋 Checklist Final

- [ ] Servidor rodando com `npm start`
- [ ] Acessível em `http://localhost:3000`
- [ ] `/api/test` retorna 200 OK
- [ ] `.env` configurado com EMAIL_USER e EMAIL_PASS
- [ ] Autenticação 2FA ativada no Gmail
- [ ] Senha de app gerada no Gmail
- [ ] Formulário envia sem erro 405

---

## 💡 Dicas Extra

1. **Abra o DevTools (F12)** e vá para **Network**
2. Envie o formulário e procure pela requisição `send-email`
3. Clique nela e veja o **Response** (resposta do servidor)
4. Isso mostrará exatamente qual é o erro

---

**Precisa de mais ajuda?** Verifique os logs no console do navegador (F12) e no terminal do servidor!
