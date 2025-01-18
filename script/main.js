// script.js
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM sudah dimuat sepenuhnya");
    const img = document.getElementById('fadeinImage');
    if (img) {
        console.log("Elemen gambar ditemukan");
        img.style.opacity = 1;
    } else {
        console.log("Elemen gambar tidak ditemukan");
    }
});

// Fungsi untuk menampilkan ikon media sosial
document.addEventListener('DOMContentLoaded', function() {
    const socialIconsContainer = document.getElementById('social-icons');
    const socialIcons = [
        {
            href: 'https://www.instagram.com/risalut15/profilecard/?igsh=eTVzaTF3bmZvdXkz',
            iconClass: 'fab fa-instagram'
        },
        {
            href: 'https://www.linkedin.com/in/risal-subekti-694b25244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            iconClass: 'fab fa-linkedin'
        },
        {
            href: 'mailto:risalsubekti1507@gmail.com',
            iconClass: 'fas fa-envelope'
        },
        {
            href: 'https://wa.me/qr/ZIFFORWP6C7PO1',
            iconClass: 'fab fa-whatsapp'
        }
    ];

    socialIcons.forEach(function(icon) {
        const a = document.createElement('a');
        a.href = icon.href;
        a.target = '_blank';

        const i = document.createElement('i');
        i.className = icon.iconClass;

        a.appendChild(i);
        socialIconsContainer.appendChild(a);
    });
});

//fungsi audio
window.addEventListener('load', function() {
    var audio = document.getElementById('myAudio');
    var muteButton = document.getElementById('muteButton');

    // Set the audio state from sessionStorage
    var isMuted = sessionStorage.getItem('isMuted') === 'true';
    audio.muted = isMuted;
    muteButton.textContent = isMuted ? 'Unmute' : 'Mute';

    muteButton.addEventListener('click', function() {
        audio.muted = !audio.muted;
        muteButton.textContent = audio.muted ? 'Unmute' : 'Mute';

        // Save the audio state to sessionStorage
        sessionStorage.setItem('isMuted', audio.muted);
    });

    // Set the current time of the audio from sessionStorage
    var currentTime = sessionStorage.getItem('currentTime');
    if (currentTime !== null) {
        audio.currentTime = parseFloat(currentTime);
    }

    // Update the current time in sessionStorage every second
    setInterval(function() {
        sessionStorage.setItem('currentTime', audio.currentTime);
    }, 1000);
});