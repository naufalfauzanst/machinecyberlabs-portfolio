# Machine Cyber Labs

Naufal's English-language portfolio, based on six public GitHub repositories. The one-page website includes project filters, research limitations, light/dark themes, and a clearly labeled concept for a planned Claude-assisted SOC triage tool.

## Deployment

Import repository ke Vercel. Konfigurasi `vercel.json` menggunakan framework Other, tanpa build command, dan output directory `public`. Website statis tidak memerlukan dependency atau API key.

Tambahkan `machinecyberlabs.cloud` melalui Settings > Domains, lalu pasang record DNS yang diberikan Vercel di Hostinger. Pertahankan record email MX/TXT yang sudah ada.

## Konten

Edit `public/index.html` untuk mengganti deskripsi atau tautan proyek. Edit `public/styles.css` untuk tampilan, dan `public/script.js` untuk filter serta tema. Seluruh proyek tetap terlihat jika JavaScript tidak tersedia.

Project descriptions come from public READMEs inspected on 8 October 2026. The product concept was proposed at the owner's request. Claude integration is planned, not implemented. This website does not claim incorporation, customers, certifications, startup acceptance, or a released SOC assistant.
