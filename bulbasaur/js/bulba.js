document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const button4 = document.getElementById('button4');
    
    button1.addEventListener('click', function() {
        window.location.href = 'about.html';
    });

    button2.addEventListener('click', function() {
        alert('EM MANUTENÇÃO, Aguarde...');
    });

    button3.addEventListener('click', function() {
        alert('EM MANUTENÇÃO, Aguarde...');
    });
});
