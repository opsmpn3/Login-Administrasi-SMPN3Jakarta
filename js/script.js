document.addEventListener('DOMContentLoaded', function() {
    const dataPegawai = [
        // Data Pendidik
        {
            "nama": "Irwanto Sumantri, S.Pd",
            "niki": "196510101988031014",
            "jabatan": "Kepala Sekolah",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Drs. Sulaeman",
            "niki": "196706191995121002",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Dwi Desi Rima Irani, S.Pd. M.Si",
            "niki": "197112241997032002",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Drs. Herru Tri Handaka",
            "niki": "196505171998021002",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Dra. Atin Supryatin",
            "niki": "196711041997032001",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Dra. Yenidar",
            "niki": "197004271998022002",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Dra. Retnowati",
            "niki": "196903102008012027",
            "jabatan": "Wakil Kepala Sekolah",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Yani Samsuwati, S.Pd",
            "niki": "196608292008012008",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Drs. Tunggul Hutagaol",
            "niki": "196808012016111001",
            "jabatan": "Staff Wakil",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Suhanah, S.Pd",
            "niki": "196606022016102001",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Nina Komala Sari, S.Pd",
            "niki": "197101262017082001",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Dra. Maryatun",
            "niki": "196601252007012010",
            "jabatan": "Staff Wakil",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Dra. Magda Ctellah Matindas",
            "niki": "196505172016062001",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Sukarno, S.Pd",
            "niki": "196711192016111001",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Dra. Kusmiyati",
            "niki": "196901052017062001",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Muthoharoh, S.Pd.I",
            "niki": "198902052015042004",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Mariam Giselle Andrea Luciano, S.Pd",
            "niki": "199212162019032008",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Septia Saraswati, S.Pd",
            "niki": "199009012020122018",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Ina Musdalifa, S.Pd",
            "niki": "197009112022212003",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Dewi Komalasari, S.E",
            "niki": "197806092022212006",
            "jabatan": "Staff Wakil",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Purnakarta, S.Pd",
            "niki": "198112092022211006",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Rahmad Hafido Prayoga, S.Pd",
            "niki": "199304292022211007",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Khonsa Tsabita Baityhaq, S.Pd",
            "niki": "199603122022212015",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Hanny Sugiharyani, S.Pd",
            "niki": "199702182022212012",
            "jabatan": "Staff Wakil",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Raka Prasetyo, M.Pd",
            "niki": "199410092023211018",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Gita Marlinda, M.Pd",
            "niki": "199103312023212031",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Maizal, S.Pd",
            "niki": "196605132023211001",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Achmad Darojih, S.Pd.I",
            "niki": "197308152023211001",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Riris, S.Pd",
            "niki": "198305112023212024",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Arni Purwati, S.Pd",
            "niki": "199210242023212044",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Citra Febrianti, S.Pd",
            "niki": "199102122023212043",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Vivi Rizky Awalia,S.Sn",
            "niki": "199206032023212037",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Siti Nurhaeni, S.Pd.",
            "niki": "199205282023212029",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Henrikus Wawan Kurniawan, S.Pd",
            "niki": "199507132023211013",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Nur Aini, S.Pd",
            "niki": "197901132024212001",
            "jabatan": "Guru",
            "foto": "img/user.jpg", // Ganti dengan path foto yang benar
            "kategori": "Pendidik"
        },
        {
            "nama": "Aries Andesko Syamsirman, S.Pd",
        "niki": "1005790",
        "jabatan": "Guru",
        "foto": "img/user.jpg",
        "kategori": "Pendidik"
    }, // <-- Koma penting di sini

    // Data Tendik  <-- Komentar di luar objek
    // Data Tendik
    {
        "nama": "Dian Setiawati, S.E",
        "niki": "1016569",
        "jabatan": "Tenaga Administrasi",
        "foto": "img/dian.jpg",
        "kategori": "Tendik"
    },
    {
        "nama": "Sulasto, S.Pd",
        "niki": "1016578",
        "jabatan": "Tenaga Administrasi",
        "foto": "img/sulasto.jpg",
        "kategori": "Tendik" // Kategori ditambahkan
    },
    {
        "nama": "Riyan Heriyanto, S.Kom",
        "niki": "1020259",
        "jabatan": "Tenaga Administrasi",
        "foto": "img/riyan.jpg",
        "kategori": "Tendik" // Kategori ditambahkan
    },
    {
        "nama": "Jojor Sinaga, S.Kom",
        "niki": "1016550",
        "jabatan": "Tenaga Administrasi",
        "foto": "img/jojor.jpg",
        "kategori": "Tendik" // Kategori ditambahkan
    },
    {
        "nama": "Saprudin",
        "niki": "1016568",
        "jabatan": "Tenaga Administrasi",
        "foto": "img/saprudin.jpg",
        "kategori": "Tendik" // Kategori ditambahkan
    },
    {
        "nama": "Siswanto",
        "niki": "1016571",
        "jabatan": "Tenaga Administrasi",
        "foto": "img/siswanto.jpg",
        "kategori": "Tendik" // Kategori ditambahkan
    },
    {
        "nama": "Lulu Firdaus",
        "niki": "1026286",
        "jabatan": "Tenaga Administrasi",
        "foto": "img/lulu.jpg",
        "kategori": "Tendik" // Kategori ditambahkan
    },
    {
        "nama": "Sunaryo",
        "niki": "1016570",
        "jabatan": "Tenaga Administrasi",
        "foto": "img/user.jpg",
        "kategori": "Tendik" // Kategori ditambahkan
    },
    {
        "nama": "Fauziah Utami, S.Kom",
        "niki": "1030678",
        "jabatan": "Tenaga Kebersihan",
        "foto": "img/fauziah.jpg",
        "kategori": "Tendik" // Kategori ditambahkan
    },
    {
        "nama": "Ahmad Fauzi",
        "niki": "1016573",
        "jabatan": "Tenaga Kebersihan",
        "foto": "img/ahmad.jpg",
        "kategori": "Tendik" // Kategori ditambahkan
    },
    {
        "nama": "Iyan Sopian",
        "niki": "1016575",
        "jabatan": "Penjaga Sekolah",
        "foto": "img/user.jpg",
        "kategori": "Tendik" // Kategori ditambahkan
    }
];

const pendidik = dataPegawai.filter(pegawai => pegawai.kategori === "Pendidik");
const tendik = dataPegawai.filter(pegawai => pegawai.kategori === "Tendik");

function buatTabel(data, judul) {
    let tabelHTML = `<h2>${judul}</h2>`;
    tabelHTML += '<table class="table table-bordered table-striped table-responsive">';
    tabelHTML += '<thead><tr><th>Foto</th><th>Nama</th><th>NIKI</th><th>Jabatan</th></tr></thead><tbody>';

    data.forEach(pegawai => {
        const imgTag = `<img src="${pegawai.foto}" alt="${pegawai.nama}" class="img-fluid rounded-circle">`;
        tabelHTML += `<tr>
                    <td class="text-center">${imgTag}</td>
                    <td>${pegawai.nama}</td>
                    <td>${pegawai.niki}</td>
                    <td>${pegawai.jabatan}</td>
                  </tr>`;
    });

    tabelHTML += '</tbody></table>';
    return tabelHTML;
}

document.getElementById('daftar-pegawai').innerHTML = buatTabel(pendidik, "Data Pendidik") + buatTabel(tendik, "Data Tendik");
});

// Kode navbar dan toggler tetap sama
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const navLinks = document.querySelectorAll('.navbar-light .navbar-nav .nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        link.classList.toggle('active');

        navLinks.forEach(otherLink => {
            if (otherLink !== link) {
                otherLink.classList.remove('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    document.addEventListener('click', function(event) {
        if (navbarCollapse.classList.contains('show') && !event.target.closest('.navbar')) {
            navbarToggler.click();
        }
    });
});




const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-form input');

searchForm.addEventListener('click', (e) => {
    searchForm.classList.toggle('active');
    searchInput.focus(); // Fokus ke input saat dibuka
    e.preventDefault();
});




function tampilkanTanggal() {
    const tanggalElement = document.getElementById("tanggal");
    const sekarang = new Date();

    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const tanggal = sekarang.toLocaleDateString('id-ID', options); // Format Indonesia

    tanggalElement.textContent = tanggal;
}

// Panggil fungsi saat halaman dimuat
window.onload = tampilkanTanggal;



// ... (dataSiswa tetap sama)

const optionsSiswa = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Jumlah Siswa',
                color: '#333'
            },
            ticks: {
                color: '#333'
            }
        },
        x: {
            title: {
                display: true,
                text: 'Tingkatan Kelas',
                color: '#333'
            },
            ticks: {
                color: '#333'
            }
        }
    },
    plugins: {
        title: {
            display: true,
            text: 'Grafik Jumlah Siswa Per Tingkatan Kelas',
            color: '#333',
            font: {
                size: 16
            }
        },
        legend: {
            labels: {
                color: '#333'
            }
        },
        tooltip: {
            callbacks: {
                label: function(context) {
                    return 'Jumlah Siswa: ' + context.formattedValue;
                }
            }
        }
    }
};

const ctxSiswa = document.getElementById('chart-siswa').getContext('2d');
new Chart(ctxSiswa, {
    type: 'bar',
    data: dataSiswa,
    options: optionsSiswa
});

// ... (Membuat chart pegawai dan inventaris dengan data dan kustomisasi yang sesuai)

//times
const dateTime = document.getElementById('date-time');

function updateDateTime() {
    const today = new Date();
    const day = today.toLocaleDateString('id-ID', { weekday: 'long' });
    const date = today.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    const time = today.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }); // Tambahkan waktu

    dateTime.innerHTML = `${day}, ${date} ${time}`;
}

updateDateTime(); // Panggil saat halaman dimuat
setInterval(updateDateTime, 1000); // Perbarui setiap detik