document.getElementById('chatbot-toggle').addEventListener('click', () => {
    const chatbotWindow = document.getElementById('chatbot-window');
    chatbotWindow.style.display = chatbotWindow.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('chatbot-send').addEventListener('click', () => {
    const input = document.getElementById('chatbot-input');
    const messages = document.querySelector('.chatbot-messages');
    if (input.value.trim() !== '') {
        const message = document.createElement('div');
        message.textContent = input.value;
        messages.appendChild(message);
        input.value = '';
    }
});

