# ⭐ EmailJS - Setup em 5 Minutos (RECOMENDADO)

## Por que EmailJS é a melhor opção:

✅ **Sem gerar senha do Gmail** - Sua conta conecta direto  
✅ **Sem backend complexo** - Funciona direto no navegador  
✅ **200 emails/mês grátis** - Suficiente para um portfólio  
✅ **Super confiável** - Usado por milhões  
✅ **Já temos código pronto** - Só precisa completar as chaves  

---

## 🚀 Setup (5 Passos)

### 1️⃣ Criar Conta EmailJS

1. Abra: https://www.emailjs.com/
2. Clique: **Sign Up Free**
3. Escolha: **Email** (não precisa de outras opções)
4. Crie conta com seu email
5. Confirme no seu email

### 2️⃣ Conectar seu Gmail

1. No painel EmailJS, clique: **Email Services** (lado esquerdo)
2. Clique: **Add New Service**
3. Selecione: **Gmail**
4. Clique: **Connect Account**
5. Faça login com seu Gmail
6. Permita acesso
7. Clique: **Create Service**

**Copie o Service ID** (vai precisar depois):
```
Exemplo: service_abc123xyz
```

### 3️⃣ Criar Template de Email

1. Clique: **Email Templates**
2. Clique: **Create New Template**
3. Dê um nome: "Contact Form"
4. Deixe o conteúdo padrão (ou customize)
5. Clique: **Save**

**Copie o Template ID**:
```
Exemplo: template_abc123xyz
```

### 4️⃣ Pegar Chave Pública

1. Clique: **Account** (no topo)
2. Clique: **General**
3. Copie: **Public Key** (USER_ID)

```
Exemplo: user_abc123def456ghi789
```

### 5️⃣ Adicionar ao Código

Abra: `script.js`

Procure pela linha ~171 com:
```javascript
emailjs.init("6SagPx746TChhP4vQ");
```

Substitua por sua chave:
```javascript
emailjs.init("user_abc123def456ghi789");
```

Procure pela linha ~279-280 com:
```javascript
emailjs.send(
    'service_Fraga.Dev',
    'template_zb632yc',
```

Substitua pelos seus IDs:
```javascript
emailjs.send(
    'service_abc123xyz',
    'template_abc123xyz',
```

---

## ✅ Pronto!

Agora:

1. Abra seu portfólio: `http://localhost:3000` (ou online)
2. Vá para "Entre em Contato"
3. Preencha o formulário
4. Clique "Enviar"
5. **Pronto!** Email chega direto no seu Gmail! ✉️

---

## 📋 Resumo das Chaves

| Chave | Onde Encontrar | Que Parece |
|-------|----------------|----------|
| **Public Key** | Account → General | `user_abc...` |
| **Service ID** | Email Services | `service_abc...` |
| **Template ID** | Email Templates | `template_abc...` |

---

## 🐛 Se Não Funcionar

### Erro: "Invalid Service"
- ✓ Confirmou a conta no email?
- ✓ Conectou o Gmail mesmo?
- ✓ Copiou o Service ID correto?

### Erro: "Invalid Template"
- ✓ Criou um template?
- ✓ Copiou o Template ID correto?

### Erro: "Invalid User"
- ✓ Copiou a Public Key corretamente?

---

## 💡 Dicas

- Você pode criar múltiplos templates para formatos diferentes
- 200 emails/mês é limite da versão gratuita
- Se precisar mais, é bem barato (€5-10/mês)
- Pode testar sem limites o EmailJS (ele não conta testes)

---

## 🎉 Pronto!

Seu portfólio agora tem email funcionando sem complicações! 🚀
