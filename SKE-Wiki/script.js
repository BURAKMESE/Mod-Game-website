// Modalı açma butonunu seçme
var openModalBtn = document.getElementById("openModalBtn");

// Modal penceresini seçme
var modal = document.getElementById("modal");

// Kapatma butonunu seçme
var closeBtn = document.getElementsByClassName("close")[0];

// Modalı açma butonuna tıklama olayını ekleme
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// Kapatma butonuna tıklama olayını ekleme
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Kullanıcı modalın dışına tıkladığında kapatma olayını ekleme
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
$(document).ready(function() {
    // NPC detayları için modalı açma işlemi
    $('.details-btn').click(function() {
        var modal = $(this).siblings('.modal');
        modal.css('display', 'block');

        // Kapatma butonuna tıklama olayı
        modal.find('.close').click(function() {
            modal.css('display', 'none');
        });

        // Kullanıcı modalın dışına tıkladığında kapatma işlemi
        $(window).click(function(event) {
            if (event.target == modal[0]) {
                modal.css('display', 'none');
            }
        });
    });
});



