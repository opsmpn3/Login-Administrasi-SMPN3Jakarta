document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit

    const adminUsername = document.getElementById('adminUsername').value.trim();
    const adminPassword = document.getElementById('adminPassword').value.trim();
    const adminLoginMessage = document.getElementById('adminLoginMessage');

    // Data login admin
    const admin = { 
        username: 'inventaris', 
        password: '20102470', 
        link: 'https://drive.google.com/drive/folders/1f4IM0UTgnRln1_7DebkYrMUYOaQlMnd8?usp=sharing' 
    };

    if (adminUsername === admin.username && adminPassword === admin.password) {
        adminLoginMessage.innerHTML = `<div class="alert alert-success">Login berhasil! Mengalihkan...</div>`;
        setTimeout(() => { window.location.href = admin.link; }, 2000);
    } else {
        adminLoginMessage.innerHTML = `<div class="alert alert-danger">Username atau password salah.</div>`;
        setTimeout(() => { adminLoginMessage.innerHTML = ""; }, 3000);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const kirData = [
        { no: 1, ruangan: "Lab Komputer", total: 50, baik: 40, rusak: 10 },
        { no: 2, ruangan: "Perpustakaan", total: 30, baik: 25, rusak: 5 },
        { no: 3, ruangan: "Ruang Guru", total: 20, baik: 18, rusak: 2 },
    ];

    const kirTableBody = document.getElementById("kirTableBody");
    kirData.forEach(data => {
        kirTableBody.innerHTML += `<tr><td>${data.no}</td><td>${data.ruangan}</td><td>${data.total}</td><td>${data.baik}</td><td>${data.rusak}</td></tr>`;
    });

    new Chart(document.getElementById("chartKIR"), {
        type: "bar",
        data: {
            labels: kirData.map(data => data.ruangan),
            datasets: [
                { label: "Baik", data: kirData.map(data => data.baik), backgroundColor: "green" },
                { label: "Rusak", data: kirData.map(data => data.rusak), backgroundColor: "red" }
            ]
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const kibCards = document.querySelectorAll(".kib-card");

    kibCards.forEach(card => {
        card.addEventListener("click", function () {
            const title = this.getAttribute("data-title");
            const description = this.getAttribute("data-description");

            document.getElementById("modalKIBTitle").textContent = title;
            document.getElementById("modalKIBDescription").textContent = description;
        });
    });
});

