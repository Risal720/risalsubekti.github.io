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
