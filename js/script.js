// Fungsi untuk meminta nama pengguna
function askForUserName() {
    const userName = prompt("Masukkan nama Anda:");
    if (userName) {
        document.getElementById('user-name').textContent = userName; // Tampilkan nama
        document.getElementById('welcome-message').style.display = 'block'; // Tampilkan pesan sambutan
    } else {
        alert("Nama tidak boleh kosong!"); // Pesan jika nama kosong
        askForUserName(); // Minta nama lagi
    };
};

// Panggil fungsi untuk meminta nama pengguna saat halaman dimuat
window.onload = askForUserName();

// Animasi gulir
window.addEventListener('scroll', function() {
    const seconds = document.querySelectorAll('.second');
    const triggerBottom = window.innerHeight / 5 * 4; // 80% dari layar

    seconds.forEach(second => {
        const secondTop = second.getBoundingClientRect().top;
        if (secondTop < triggerBottom) {
            second.classList.add('visible');
        } else {
            second.classList.remove('visible');
        }
    });
});