// Add your JavaScript code here
const button = document.getElementById('myButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    message.textContent = 'Button Clicked!';
});
