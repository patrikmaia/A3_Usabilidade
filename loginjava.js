document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obter os valores dos campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Redirecionar para a página de cursos
    window.location.href = 'Friday.html';
});
