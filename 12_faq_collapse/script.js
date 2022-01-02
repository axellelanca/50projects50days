const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const parentNode = button.parentNode;
        parentNode.classList.toggle('active');
    });
});