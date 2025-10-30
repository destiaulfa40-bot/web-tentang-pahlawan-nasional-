const pahlawanData = [
    {
        id: 'soekarno',
        nama: "Ir. Soekarno",
        lahir: "6 Juni 1901, Blitar",
        wafat: "21 Juni 1970, Jakarta",
        // Ganti dengan URL foto yang valid (contoh menggunakan Wikimedia)
        foto_url: "nn.jpg", 
        perjalanan: "Proklamator dan Presiden pertama RI. Ia merumuskan Pancasila, memimpin perjuangan non-kooperatif melalui PNI, dipenjara dan diasingkan Belanda. Bersama Moh. Hatta, membacakan Teks Proklamasi pada 17 Agustus 1945.",
    },
    {
        id: 'hatta',
        nama: "Dr. (H.C.) Drs. H. Mohammad Hatta",
        lahir: "12 Agustus 1902, Bukittinggi",
        wafat: "14 Maret 1980, Jakarta",
        foto_url: "oo.jpg",
        perjalanan: "Wakil Presiden pertama RI dan Bapak Koperasi. Aktif di Perhimpunan Indonesia di Belanda. Berperan sentral dalam Proklamasi dan diplomasi internasional (Konferensi Meja Bundar) untuk mempertahankan kemerdekaan.",
    },
    {
        id: 'kartini',
        nama: "Raden Ajeng Kartini",
        lahir: "21 April 1879, Jepara",
        wafat: "17 September 1904, Rembang",
        foto_url: "ii.jpg",
        perjalanan: "Pelopor kebangkitan perempuan pribumi dan pendidikan. Perjuangannya melalui pemikiran yang tertuang dalam surat-suratnya (Habis Gelap Terbitlah Terang). Ia memperjuangkan hak pendidikan setara bagi wanita.",
    },
    {
        id: 'sudirman',
        nama: "Jenderal Sudirman",
        lahir: "24 Januari 1916, Purbalingga",
        wafat: "29 Januari 1950, Magelang",
        foto_url: "kk.jpg",
        perjalanan: "Panglima Besar TKR/TNI. Memimpin perang gerilya yang terkenal saat Agresi Militer Belanda II (1948–1949) meskipun dalam kondisi sakit parah. Strategi gerilyanya menjadi kunci penting dalam mempertahankan eksistensi Republik Indonesia.",
    },
    {
        id: 'bonjol',
        nama: "Tuanku Imam Bonjol",
        lahir: "1772, Bonjol",
        wafat: "6 November 1864, Minahasa",
        foto_url: "vv.jpg",
        perjalanan: "Ulama dan pemimpin Minangkabau. Memimpin Perang Padri (1803–1838) melawan penjajah Belanda di Sumatera Barat. Perjuangannya merupakan simbol perlawanan rakyat daerah terhadap kolonialisme dan imperialisme.",
    },
    {
        id: 'diponegoro',
        nama: "Pangeran Diponegoro",
        lahir: "11 November 1785, Yogyakarta",
        wafat: "8 Januari 1855, Makassar",
        foto_url: "pp.jpg",
        perjalanan: "Pemimpin Perang Jawa (1825–1830), perang besar yang hampir meruntuhkan kekuasaan Belanda di Jawa. Ia menggunakan taktik perang gerilya yang sangat merepotkan musuh, sebelum ditangkap melalui tipu muslihat.",
    },
    {
        id: 'dewantara',
        nama: "Ki Hajar Dewantara",
        lahir: "2 Mei 1889, Yogyakarta",
        wafat: "26 April 1959, Yogyakarta",
        foto_url: "ee.jpg",
        perjalanan: "Bapak Pendidikan Nasional. Mendirikan Perguruan Taman Siswa (1922) untuk memberikan pendidikan yang setara bagi pribumi. Slogannya 'Ing Ngarsa Sung Tulada' menjadi dasar filosofi pendidikan bangsa.",
    },
    {
        id: 'tiahahu',
        nama: "Martha Christina Tiahahu",
        lahir: "4 Januari 1800, Maluku",
        wafat: "2 Januari 1818, Laut Banda",
        foto_url: "bb.jpg",
        perjalanan: "Pejuang wanita dari Maluku. Terlibat dalam Perang Pattimura melawan Belanda di Pulau Nusalaut. Di usianya yang masih sangat muda (17 tahun), ia memimpin pasukan dan gugur di Laut Banda sebagai tawanan.",
    },
    {
        id: 'agus_salim',
        nama: "Haji Agus Salim",
        lahir: "8 Oktober 1884, Koto Gadang",
        wafat: "4 November 1954, Jakarta",
        foto_url: "mm.jpg",
        perjalanan: "Diplomat ulung, orator, dan tokoh Sarekat Islam. Ia berperan penting dalam pengakuan kedaulatan Indonesia oleh negara-negara Arab pada masa awal kemerdekaan. Dikenal karena kecerdasan dan penguasaan multibahasa.",
    },
    {
        id: 'mohyamin',
        nama: "Mohammad Yamin",
        lahir: "24 Agustus 1903, Sawahlunto",
        wafat: "17 Oktober 1962, Jakarta",
        foto_url: "zz.jpg",
        perjalanan: "Sastrawan, ahli hukum, dan politikus. Ia adalah salah satu perumus teks Sumpah Pemuda. Berperan aktif dalam BPUPKI, menyumbang pemikiran tentang dasar negara (Pancasila) dan perumusan UUD 1945.",
    },
];

const pahlawanNav = document.getElementById('pahlawan-nav');
const detailNama = document.getElementById('detail-nama');
const detailFoto = document.getElementById('detail-foto');
const detailInfo = document.getElementById('detail-info');

// Fungsi untuk me-render tombol navigasi
function renderNavButtons() {
    pahlawanData.forEach(pahlawan => {
        const button = document.createElement('button');
        button.classList.add('nav-button');
        button.textContent = pahlawan.nama.split(' ').slice(-1)[0]; // Hanya menampilkan nama belakang
        button.setAttribute('data-id', pahlawan.id);
        
        button.addEventListener('click', () => {
            displayPahlawanDetail(pahlawan.id);
        });
        
        pahlawanNav.appendChild(button);
    });
}

// Fungsi untuk menampilkan detail pahlawan
function displayPahlawanDetail(pahlawanId) {
    const pahlawan = pahlawanData.find(p => p.id === pahlawanId);
    
    if (!pahlawan) return;

    // Reset dan atur kelas aktif pada tombol
    document.querySelectorAll('.nav-button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.nav-button[data-id="${pahlawanId}"]`).classList.add('active');

    // Tampilkan detail
    detailNama.textContent = pahlawan.nama;

    // Terapkan foto dengan transisi (Fade Out/In Sederhana)
    detailFoto.style.opacity = 0;
    setTimeout(() => {
        detailFoto.style.backgroundImage = `url('${pahlawan.foto_url}')`;
        detailFoto.style.opacity = 1;
    }, 150); // Sesuaikan dengan durasi transisi di CSS

    // Tampilkan informasi
    detailInfo.innerHTML = `
        <p><strong>Nama Lengkap:</strong> ${pahlawan.nama}</p>
        <p><strong>Lahir:</strong> ${pahlawan.lahir}</p>
        <p><strong>Wafat:</strong> ${pahlawan.wafat}</p>
        <div class="perjuangan-text">
            <h3>Peran Penting dalam Kemerdekaan:</h3>
            <p>${pahlawan.perjalanan}</p>
        </div>
    `;
}

// Inisialisasi: Render tombol dan tampilkan detail pahlawan pertama
document.addEventListener('DOMContentLoaded', () => {
    renderNavButtons();
    // Tampilkan detail pahlawan pertama sebagai default saat halaman dimuat
    displayPahlawanDetail(pahlawanData[0].id);
});
