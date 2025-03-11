// Konfigurasi Firebase (GANTI dengan kredensial Firebase proyek kamu)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Container untuk card catatan
const catatanContainer = document.getElementById("catatanContainer");

// Fungsi untuk menampilkan data catatan dari Firestore dalam bentuk card
function loadCatatan() {
    catatanContainer.innerHTML = ""; // Kosongkan container sebelum menampilkan data

    db.collection("catatan").orderBy("aplikasi").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();

            // Buat elemen card
            const card = document.createElement("div");
            card.classList.add("catatan-card");
            card.innerHTML = `
                <h3>${data.aplikasi}</h3>
                <p><strong>Username:</strong> ${data.username}</p>
                <p><strong>Catatan:</strong> ${data.catatan || '-'}</p>
            `;

            // Ketika card diklik, buka modal edit
            card.addEventListener("click", function () {
                bukaModalEdit(doc.id, data);
            });

            catatanContainer.appendChild(card);
        });
    }).catch(error => {
        console.error("Error mengambil data:", error);
    });
}

// Fungsi untuk membuka modal dan mengisi data edit
function bukaModalEdit(id, data) {
    document.getElementById("editCatatanId").value = id;
    document.getElementById("editAplikasi").value = data.aplikasi;
    document.getElementById("editUsername").value = data.username;
    document.getElementById("editPassword").value = data.password;
    document.getElementById("editCatatanTambahan").value = data.catatan || "";

    const linkElement = document.getElementById("openLink");
    if (data.catatan && data.catatan.startsWith("http")) {
        linkElement.href = data.catatan; // Gunakan catatan sebagai link jika berupa URL
        linkElement.style.display = "inline-block";
    } else {
        linkElement.style.display = "none";
    }

    new bootstrap.Modal(document.getElementById("editCatatanModal")).show();
}

// Simpan perubahan catatan
document.getElementById("editCatatanForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("editCatatanId").value;
    const aplikasi = document.getElementById("editAplikasi").value;
    const username = document.getElementById("editUsername").value;
    const password = document.getElementById("editPassword").value;
    const catatan = document.getElementById("editCatatanTambahan").value;

    db.collection("catatan").doc(id).update({
        aplikasi,
        username,
        password,
        catatan
    }).then(() => {
        alert("Catatan berhasil diperbarui!");
        loadCatatan();
        bootstrap.Modal.getInstance(document.getElementById("editCatatanModal")).hide();
    }).catch(error => {
        console.error("Error memperbarui catatan:", error);
    });
});

// Load data saat halaman dimuat
document.addEventListener("DOMContentLoaded", loadCatatan);
