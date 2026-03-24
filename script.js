// 1. Validação do Formulário de Contato
const form = document.getElementById('formContato');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real para simulação

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação de campos vazios [cite: 59]
    if (nome === "" || email === "" || mensagem === "") {
        feedback.innerText = "Por favor, preencha todos os campos.";
        feedback.style.color = "red";
        return;
    }

    // Validação de formato de e-mail [cite: 60]
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        feedback.innerText = "Por favor, insira um e-mail válido.";
        feedback.style.color = "red";
        return;
    }

    // Simulação de envio com sucesso [cite: 61]
    feedback.innerText = "Mensagem enviada com sucesso!";
    feedback.style.color = "green";
    
    // Limpa os campos após o envio [cite: 61]
    form.reset();
});

// 2. Alternância de Tema (Claro/Escuro) 
const btnTheme = document.getElementById('toggle-theme');
btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});