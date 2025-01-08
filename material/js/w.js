
const openModalBtn = document.getElementById('openModalBtn');
const walletModal = document.getElementById('walletModal');
const closeBtn = document.querySelector('.close-btn');
const connectWalletBtn = document.getElementById('connectWallet');
const cancelWalletBtn = document.getElementById('cancelWallet');
const statusMessage = document.getElementById('statusMessage');


openModalBtn.addEventListener('click', () => {
    walletModal.style.display = 'flex';
});


closeBtn.addEventListener('click', () => {
    walletModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === walletModal) {
        walletModal.style.display = 'none';
    }
});

connectWalletBtn.addEventListener('click', () => {
    statusMessage.textContent = 'CONECTANDO CON TU CARTERA...';

    setTimeout(() => {
        statusMessage.textContent = 'ALGO HA OCURRIDO, INTENTELO DE NUEVO!';
    }, 2000);
});


cancelWalletBtn.addEventListener('click', () => {
    walletModal.style.display = 'none';
    statusMessage.textContent = '';
});
