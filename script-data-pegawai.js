const pendidikData = [
    { no: 1, nama: "Irwanto Sumantri, S.Pd", nip: "196510101988031014", jabatan: "Kepala Sekolah", foto: "../../assets/irwanto_sumantri.png" },
    { no: 2, nama: "Drs. Sulaeman", nip: "196706191995121002", jabatan: "Guru", foto: "../../assets/sulaeman.jpg" },
    { no: 3, nama: "Drs. Herru Tri Handaka", nip: "196505171998021002", jabatan: "Guru", foto: "../../assets/herru_trihandaka.jpg" },
    { no: 4, nama: "Dra. Atin Supryatin", nip: "196711041997032001", jabatan: "Guru", foto: "../../assets/atin_supryatin.jpg" },
    { no: 5, nama: "Dra. Yenidar", nip: "197004271998022002", jabatan: "Guru", foto: "../../assets/yenidar.jpg" },
    { no: 6, nama: "Dra. Retnowati", nip: "196903102008012027", jabatan: "Wakasek Bid. Sarpras", foto: "../../assets/retnowati.png" },
    { no: 7, nama: "Yani Samsuwati, S.Pd", nip: "196608292008012008", jabatan: "Guru", foto: "../../assets/yani_samsuwati.jpg" },
    { no: 8, nama: "Drs. Tunggul Hutagaol", nip: "196808012016111001", jabatan: "Guru", foto: "../../assets/tunggul_hutagaol.jpg" },
    { no: 9, nama: "Suhanah, S.Pd", nip: "196606022016102001", jabatan: "Guru", foto: "../../assets/suhanah.jpg" },
    { no: 10, nama: "Nina Komala Sari, S.Pd", nip: "197101262017082001", jabatan: "Guru", foto: "../../assets/nina_komala_sari.jpg" },
    { no: 11, nama: "Dra. Maryatun", nip: "196601252007012010", jabatan: "Guru", foto: "../../assets/maryatun.jpg" },
    { no: 12, nama: "Dra. Magda Ctellah Matindas", nip: "196505172016062001", jabatan: "Guru", foto: "../../assets/magda_ctellah_matindas.jpg" },
    { no: 13, nama: "Dra. Kusmiyati", nip: "196901052017062001", jabatan: "Guru", foto: "../../assets/kusmiyati.jpg" },
    { no: 14, nama: "Muthoharoh, S.Pd.I", nip: "198902052015042004", jabatan: "Wakasek Bid. Akademik", foto: "../../assets/muthoharoh.jpg" },
    { no: 15, nama: "Mariam Giselle Andrea Luciano, S.Pd", nip: "199212162019032008", jabatan: "Guru", foto: "../../assets/mariam_giselle.jpg" },
    { no: 16, nama: "Septia Saraswati, S.Pd", nip: "199009012020122018", jabatan: "Wakasek Bid. Kesiswaan", foto: "../../assets/septia_saraswati.jpg" },
    { no: 17, nama: "Ina Musdalifa, S.Pd", nip: "197009112022212003", jabatan: "Guru", foto: "../../assets/ina_musdalifa.jpg" },
    { no: 18, nama: "Henrikus Wawan Kurniawan, S.Pd", nip: "199507132023211013", jabatan: "Staff Bid. Kesiswaan", foto: "../../assets/henrikus_wawan.jpg" },
    { no: 19, nama: "Dewi Komalasari. S.E", nip: "197806092022212006", jabatan: "Staff Bid. Sarpras", foto: "../../assets/dewi_komalasari.jpg" },
    { no: 20, nama: "Purnakarta, S.Pd", nip: "198112092022211006", jabatan: "Guru", foto: "../../assets/purnakarta.jpg" },
    { no: 21, nama: "Rahmad Hafido Prayoga, S.Pd", nip: "199304292022211007", jabatan: "Guru", foto: "../../assets/rahmad_hafido.jpg" },
    { no: 22, nama: "Khonsa Tsabita Baityhaq, S.Pd", nip: "199603122022212015", jabatan: "Guru", foto: "../../assets/khonsa_tsabita.jpg" },
    { no: 23, nama: "Hanny Sugiharyani, S.Pd", nip: "199702182022212012", jabatan: "Guru", foto: "../../assets/hanny_sugiharyani.jpg" },
    { no: 24, nama: "Raka Prasetyo, M.Pd", nip: "199410092023211018", jabatan: "Guru", foto: "../../assets/raka_prasetyo.jpg" },
    { no: 25, nama: "Gita Marlinda, M.Pd", nip: "199103312023212031", jabatan: "Guru", foto: "../../assets/gita_marlinda.jpg" },
    { no: 26, nama: "Maizal, S.Pd", nip: "196605132023211001", jabatan: "Guru", foto: "../../assets/maizal.jpg" },
    { no: 27, nama: "Achmad Darojih, S.Pd.I", nip: "197308152023211001", jabatan: "Guru", foto: "https://i.imgur.com/zPEC0uL.jpg" },
    { no: 28, nama: "Riris, S.Pd", nip: "198305112023212024", jabatan: "Guru", foto: "../../assets/riris.jpg" },
    { no: 29, nama: "Arni Purwati, S.Pd", nip: "199210242023212044", jabatan: "Guru", foto: "../../assets/arni_purwati.jpg" },
    { no: 30, nama: "Citra Febrianti, S.Pd", nip: "199102122023212043", jabatan: "Guru", foto: "../../assets/citra_febrianti.jpg" },
    { no: 31, nama: "Vivi Rizky Awalia, S.Sn", nip: "199206032023212037", jabatan: "Guru", foto: "../../assets/vivi_rizky.jpg" },
    { no: 32, nama: "Siti Nurhaeni, S.Pd.", nip: "199205282023212029", jabatan: "Guru", foto: "../../assets/siti_nurhaeni.jpg" },
    { no: 33, nama: "Nur Aini, S.Pd", nip: "197901132024212001", jabatan: "Guru", foto: "../../assets/nur_aini.jpg" },
    { no: 34, nama: "Aries Andesko Syamsirman, S.Pd", nip: "1005790", jabatan: "Guru", foto: "../../assets/aries_andesko.jpg" }
];

// Data Tendik (Sesuai dengan daftar yang diberikan)
const tendikData = [
    { no: 1, nama: "Sri Sariwarni", nip: "196905151999032004", jabatan: "Kasatlak", foto: "../../assets/sri_sariwarni.jpeg" },
    { no: 2, nama: "Dian Setiawati, S.E", nip: "1016569", jabatan: "Tenaga Administrasi", foto: "../../assets/dian_setiawati.jpg" },
    { no: 3, nama: "Sulasto, S.Pd", nip: "1016578", jabatan: "Tenaga Administrasi", foto: "../../assets/sulasto.jpg" },
    { no: 4, nama: "Riyan Heriyanto, S.Kom", nip: "1020259", jabatan: "Tenaga Administrasi", foto: "../../assets/riyan_heriyanto.jpg" },
    { no: 5, nama: "Jojor Sinaga, S.Kom", nip: "1016550", jabatan: "Tenaga Administrasi", foto: "../../assets/jojor_sinaga.jpg" },
    { no: 6, nama: "Saprudin", nip: "1016568", jabatan: "Tenaga Administrasi", foto: "../../assets/saprudin.jpg" },
    { no: 7, nama: "Siswanto", nip: "1016571", jabatan: "Tenaga Administrasi", foto: "../../assets/siswanto.jpg" },
    { no: 8, nama: "Lulu Firdaus", nip: "1026286", jabatan: "Tenaga Administrasi", foto: "../../assets/lulu_firdaus.jpg" },
    { no: 9, nama: "Sunaryo", nip: "1016570", jabatan: "Tenaga Administrasi", foto: "../../assets/sunaryo.jpg" },
    { no: 10, nama: "Fauziah Utami, S.Kom", nip: "1030678", jabatan: "Tenaga Kebersihan", foto: "../../assets/fauziah_utami.jpg" },
    { no: 11, nama: "Ahmad Fauzi", nip: "1016573", jabatan: "Tenaga Kebersihan", foto: "../../assets/ahmad_fauzi.jpg" },
    { no: 12, nama: "Iyan Sopian", nip: "1016575", jabatan: "Penjaga Sekolah", foto: "../../assets/iyan_sopian.jpg" }
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

// Event listener untuk
