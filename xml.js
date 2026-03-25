const modal = document.getElementById("loginModal");
const btn = document.getElementById("btn-open");
const closeBtn = document.querySelector(".close-btn");

// Buka modal saat tombol diklik
btn.onclick = function() {
  modal.style.display = "block";
}

// Tutup modal saat tombol (X) diklik
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Tutup modal jika user klik di luar area kotak login
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modal.style.transition = "all 0.3s ease";
  }
}

//scroll smoot
window.screen ({
  top: 500,
  behavior: 'smoot'
});

