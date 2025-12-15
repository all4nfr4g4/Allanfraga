# 🌟 Portfólio Premium - Alan Fraga

Um portfólio futurista e responsivo com diferenciais profissionais desenvolvido com **HTML5, CSS3 e JavaScript ES6+**.

---

## ⚡ Quick Start (5 minutos)

### 1. Clonar e Abrir
```bash
cd /caminho/para/Allanfraga
# Abrir index.html no navegador
# Ou usar: python -m http.server 8000
```

### 2. Testar Frontend
- ✨ Mova o mouse (cursor trail)
- 🌙 Clique no botão luar/sol (dark mode)
- 📅 Acesse "Timeline" para ver jornada profissional
- 🎨 Interaja com cards de projetos

### 3. Backend (Opcional - Sistema de Email)

**Pré-requisito**: Ter Node.js instalado

```bash
cd backend
npm install

# Gere senha de app do Gmail:
# https://myaccount.google.com/apppasswords
# E preencha backend/.env

npm start
# Servidor rodando em http://localhost:3000
```

---

## ✨ 5 Diferenciais Futuristas

### 1. **🌙 Dark/Light Mode Toggle**
- Botão no canto superior direito
- Detecta preferência do sistema
- Salva preferência (localStorage)
- **Impacto**: Reduz fadiga ocular, profissional

### 2. **✨ Cursor Trail Effect**
- Rastro de partículas brilhantes
- Efeito fade suave
- Gradiente cyan
- **Impacto**: Micro-interação impressionante

### 3. **📅 Timeline Interativa**
- Seção "Jornada Profissional"
- 4 marcos (2022-2025)
- Layout zigue-zague
- Animações sequenciais
- **Marcos**: 
  - 2022: Iniciante
  - 2023: Full Stack
  - 2024: DevOps
  - 2025: Segurança & Cloud

### 4. **📊 Skill Radar Base**
- Estrutura CSS para visualização radial
- Pronto para Chart.js/D3.js

### 5. **🎨 Animações Avançadas**
- Cards levitam ao hover
- Parallax ao scroll
- Transições polidas

---

## 🛠️ Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Gradientes, animações, responsividade
- **JavaScript ES6+**: DOM, localStorage, events
- **Node.js/Express**: Backend (opcional)
- **Nodemailer**: Email (opcional)

---

## 📁 Estrutura

```
Allanfraga/
├── index.html              # Página principal
├── styles.css              # Estilos (~1750 linhas)
├── script.js               # JavaScript (~600 linhas)
├── script-backend.js       # Integração frontend-backend
├── README.md               # Documentação
│
├── backend/
│   ├── server.js           # Servidor Express
│   ├── package.json
│   ├── .env                # Credenciais (gitignore)
│   ├── env-example.txt
│   └── README.md
│
└── images/
    ├── Eu.JPG
    ├── Dev.jpg
    └── README.md
```

---

## 🎨 Personalização

### Mudar Cores
Edite `styles.css`:
```css
:root {
    --accent-color: #0ea5e9;  /* Mudar cor principal */
}
```

### Customizar Timeline
Edite `index.html` - seção `#timeline`:
```html
<div class="timeline-item reveal-scale stagger-1">
    <h3>Seu Marco</h3>
    <span class="timeline-date">2025</span>
    <p>Descrição</p>
</div>
```

### Desabilitar Dark Mode
Remova em `index.html`:
```html
<div class="theme-selector">
    <button class="theme-toggle" id="theme-toggle">
        <i class="fas fa-moon"></i>
    </button>
</div>
```

---

## 💾 Sistema de Email

### Configuração Gmail (Recomendado)

**Passo 1**: Ativar 2FA
- Acesse: https://myaccount.google.com
- Ative "Autenticação de 2 fatores"

**Passo 2**: Gerar senha de app
- Acesse: https://myaccount.google.com/apppasswords
- Selecione: Mail + seu SO
- Gere e copie a senha (16 caracteres)

**Passo 3**: Preencher `.env`
```env
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=aaaa bbbb cccc dddd
PORT=3000
CORS_ORIGIN=http://localhost:8000
```

**Passo 4**: Instalar e iniciar
```bash
cd backend
npm install
npm start
```

**Passo 5**: Testar
- Abra `http://localhost:3000`
- Preencha e envie formulário
- Verifique seu email

---

## 🚀 Deploy

### GitHub Pages (Recomendado - Frontend)
```bash
git push origin main
# Ativar em Settings > Pages > Deploy from main
```

### Netlify (Frontend + Backend)
1. Conectar repositório
2. Build command: deixar em branco
3. Publish directory: `/`

### Vercel (Frontend)
1. Importar repositório
2. Detecta automaticamente
3. Deploy!

### Servidor Próprio
```bash
# Node.js
node backend/server.js

# Python
python -m http.server 8000

# Nginx
serve /path/to/Allanfraga
```

---

## 📊 Estatísticas

| Métrica | Valor |
|---------|-------|
| Linhas CSS | ~1750 |
| Linhas JavaScript | ~600 |
| Animações CSS | 15+ |
| Funções JS | 6+ |
| Tempo dev | ~2h |
| Responsividade | 100% |

---

## ✅ Checklist

```
[✓] Dark/Light Mode
[✓] Cursor Trail
[✓] Timeline Interativa
[✓] Skill Radar Base
[✓] Animações Hover
[✓] Parallax Scroll
[✓] Mobile Responsivo
[✓] Email Sistema
[✓] Documentação
[✓] Git Commits
```

---

## 🎯 Impacto Profissional

**Para Recrutadores**: Design moderno + atenção ao detalhe

**Para Tech Leads**: Domínio JavaScript + UX

**Para Designers**: Coerência visual + micro-interações

**Para Empresas**: Padrão premium + tendências 2025

---

## 🚀 Próximas Melhorias

### Fácil (15 min)
- [ ] Adicionar mais marcos timeline
- [ ] Personalizar gradientes

### Intermediário (1h)
- [ ] Chart.js para Skill Radar
- [ ] GitHub API integrada
- [ ] SVG animado

### Avançado (2-4h)
- [ ] Glassmorphism effects
- [ ] WebGL/Three.js
- [ ] Service Worker (offline)

---

## 🔗 Links Importantes

- **GitHub**: https://github.com/all4nfr4g4
- **LinkedIn**: https://www.linkedin.com/in/alan-da-silva-santos-46285b385/
- **Email**: all4nfr4g4@gmail.com
- **Localização**: Salvador, BA

---

## 📝 Histórico de Commits

```
✅ refactor: consolidar documentação em README único
✅ feat: implementar 5 diferenciais futuristas
✅ feat: personalizar fundo com tema tecnológico
```

---

## 📄 Licença

MIT - Sinta-se livre para usar e modificar

---

## 🎓 O Que Este Projeto Demonstra

- ✅ CSS Animations & Transitions
- ✅ JavaScript DOM Manipulation  
- ✅ Responsive Design
- ✅ UX/UI Thinking
- ✅ Performance Optimization
- ✅ LocalStorage & Browser APIs
- ✅ Node.js/Express Backend
- ✅ Git & Version Control
- ✅ Micro-interactions Design
- ✅ Acessibilidade (a11y)

---

**Desenvolvido com ❤️, muito ☕ e ✨ inovação**

_Versão: 2.0 | Última atualização: Dezembro 2025_
