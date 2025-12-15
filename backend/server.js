const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware - ORDEM IMPORTANTE!
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../')));

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // ou outro provedor
    auth: {
        user: process.env.EMAIL_USER, // Seu email
        pass: process.env.EMAIL_PASS  // Sua senha de app
    }
});

// Testar conexão ao iniciar
transporter.verify((error, success) => {
    if (error) {
        console.error('Erro na configuração de email:', error);
    } else {
        console.log('✅ Servidor de email conectado com sucesso');
    }
});

// Rota para enviar email
app.post('/send-email', async (req, res) => {
    try {
        const { user_name, user_email, subject, message } = req.body;
        
        // Validar dados
        if (!user_name || !user_email || !subject || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'Todos os campos são obrigatórios' 
            });
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user_email)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Email inválido' 
            });
        }

        // Verificar se as variáveis de ambiente estão configuradas
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('❌ Erro: EMAIL_USER ou EMAIL_PASS não configurados no .env');
            return res.status(500).json({ 
                success: false, 
                message: 'Erro de configuração do servidor. Verifique as variáveis de ambiente.' 
            });
        }
        
        // Configurar email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Seu email
            replyTo: user_email, // Permitir responder diretamente ao cliente
            subject: `Nova mensagem do portfólio - ${subject}`,
            html: `
                <h2>Nova mensagem do portfólio</h2>
                <p><strong>De:</strong> ${user_name}</p>
                <p><strong>Email:</strong> <a href="mailto:${user_email}">${user_email}</a></p>
                <p><strong>Assunto:</strong> ${subject}</p>
                <p><strong>Mensagem:</strong></p>
                <p style="white-space: pre-wrap; font-family: monospace;">${message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p><em>Enviado através do formulário de contato do portfólio.</em></p>
            `
        };
        
        // Enviar email
        await transporter.sendMail(mailOptions);
        
        console.log(`✅ Email enviado com sucesso de ${user_email}`);
        res.json({ 
            success: true, 
            message: 'Mensagem enviada com sucesso!' 
        });
        
    } catch (error) {
        console.error('❌ Erro ao enviar email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Erro ao enviar mensagem: ' + error.message 
        });
    }
});

// Rota de teste
app.get('/api/test', (req, res) => {
    res.json({ 
        success: true, 
        message: 'Servidor está funcionando corretamente!',
        timestamp: new Date().toISOString()
    });
});

// Rota de status de email
app.get('/api/email-status', (req, res) => {
    const hasConfig = !!(process.env.EMAIL_USER && process.env.EMAIL_PASS);
    res.json({ 
        emailConfigured: hasConfig,
        server: 'ok'
    });
});

// Servir o portfólio (deve ser a última rota GET)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Fallback para todas as outras rotas GET (serve index.html para SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}`);
});
