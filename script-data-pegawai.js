// Data Pendidik dan Tendik
const pendidikData = [
    { no: 1, nama: "Irwanto Sumantri, S.Pd", nip: "196510101988031014", jabatan: "Kepala Sekolah", foto: "assets/irwanto_sumantri.png" },
    { no: 2, nama: "Drs. Sulaeman", nip: "196706191995121002", jabatan: "Guru", foto: "assets/sulaeman.jpg" },
    { no: 6, nama: "Dra. Retnowati", nip: "196903102008012027", jabatan: "Wakasek Bid. Sarpras", foto: "assets/retnowati.png" },
    { no: 14, nama: "Muthoharoh, S.Pd.I", nip: "198902052015042004", jabatan: "Wakasek Bid. Akademik", foto: "assets/muthoharoh.jpg" },
    { no: 16, nama: "Septia Saraswati, S.Pd", nip: "199009012020122018", jabatan: "Wakasek Bid. Kesiswaan", foto: "assets/septia_saraswati.jpg" },
    { no: 27, nama: "Achmad Darojih, S.Pd.I", nip: "197308152023211001", jabatan: "Guru", foto: "https://i.imgur.com/zPEC0uL.jpg" },
    { no: 34, nama: "Aries Andesko Syamsirman, S.Pd", nip: "1005790", jabatan: "Guru", foto: "assets/aries_andesko.jpg" }
];

// Data Tendik (Sesuai dengan daftar yang diberikan)
const tendikData = [
    { no: 1, nama: "Sri Sariwarni", nip: "196905151999032004", jabatan: "Kasatlak", foto: "assets/sri_sariwarni.jpeg" },
    { no: 2, nama: "Dian Setiawati, S.E", nip: "1016569", jabatan: "Tenaga Administrasi", foto: "assets/dian_setiawati.jpg" },
    { no: 10, nama: "Fauziah Utami, S.Kom", nip: "1030678", jabatan: "Tenaga Kebersihan", foto: "assets/fauziah_utami.jpg" }
];

// Fungsi untuk menampilkan data pegawai
function tampilkanPegawai() {
    let tableBody = document.getElementById("pegawaiTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";
    let no = 1;

    const semuaPegawai = [...pendidikData, ...tendikData];

    semuaPegawai.forEach((pegawai) => {
        let row = tableBody.insertRow();
        row.insertCell().textContent = no++;
        row.insertCell().textContent = pegawai.nama;
        row.insertCell().textContent = pegawai.nip;
        row.insertCell().textContent = pegawai.jabatan;
        let aksiCell = row.insertCell();
        aksiCell.innerHTML = `
            <button class="detail-btn" data-bs-toggle="modal" data-bs-target="#detailModal" data-nama="${pegawai.nama}" data-nip="${pegawai.nip}" data-jabatan="${pegawai.jabatan}" data-foto="${pegawai.foto}">Detail</button>
        `;
    });
}

// Event listener untuk tombol detail
document.getElementById("pegawaiTable").addEventListener("click", (event) => {
    if (event.target.classList.contains("detail-btn")) {
        const nama = event.target.dataset.nama;
        const nip = event.target.dataset.nip;
        const jabatan = event.target.dataset.jabatan;
        const foto = event.target.dataset.foto;

        document.getElementById("detailModalLabel").textContent = nama;
        document.getElementById("detailFoto").src = foto;
        document.getElementById("detailNip").textContent = nip;
        document.getElementById("detailJabatan").textContent = jabatan;
    }
});

// Panggil fungsi tampilkanPegawai saat halaman dimuat
tampilkanPegawai();
