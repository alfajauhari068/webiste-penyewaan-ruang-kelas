(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Project and Testimonial carousel
    $(".project-carousel, .testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // JavaScript Autoplay (Tambahkan di akhir body)

    
  const videoModal = document.getElementById('videoModal');
  const videoFrame = document.getElementById('videoFrame');

  videoModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const videoSrc = button.getAttribute('data-src');
    videoFrame.src = videoSrc + "?autoplay=1&rel=0";
  });

  videoModal.addEventListener('hidden.bs.modal', function () {
    videoFrame.src = ""; // Hentikan video saat modal ditutup
  });

//   Javascript sembunyikan teks

  document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector(".read-more-text");
  const btn = document.querySelector(".read-more-btn");

  if (text) {
    const fullText = text.innerText;
    const words = fullText.split(" ");
    const maxWords = 20;

    if (words.length > maxWords) {
      const shortText = words.slice(0, maxWords).join(" ") + "...";
      text.innerText = shortText;
      text.dataset.fullText = fullText;
      text.classList.add("collapsed");

      btn.addEventListener("click", function () {
        if (text.classList.contains("collapsed")) {
          text.innerText = text.dataset.fullText;
          text.classList.remove("collapsed");
          btn.innerText = "Read Less";
        } else {
          text.innerText = shortText;
          text.classList.add("collapsed");
          btn.innerText = "Read More";
        }
      });
    } else {
      btn.style.display = "none"; // Sembunyikan tombol jika kurang dari 50 kata
    }
  }
});

  // Javascript from-Wa

  function kirimWA() {
    const nama = document.getElementById("name").value;
    const waForm = document.getElementById("waForm").value;
    const unit = document.getElementById("unit").value;
    const ruang = document.getElementById("ruang").value;
    const tanggal = document.getElementById("tanggal").value;
    const waktu = document.getElementById("waktu").value;
    const message = document.getElementById("message").value;

    // Validasi dasar
    if (!nama || !waForm || !unit || !ruang || !tanggal || !waktu || !message) {
        alert("Mohon lengkapi semua data terlebih dahulu.");
        return;
    }

    const adminWA = "6281553675279"; // tanpa plus
    const pesan = `Halo Admin, saya ingin mengajukan pemakaian ruangan kampus.\n\n` +
              `*Nama:* ${nama}\n` +
              `*WA:* ${waForm}\n` +
              `*Unit/Organisasi:* ${unit}\n` +
              `*Jenis Ruangan:* ${ruang}\n` +
              `*Tanggal:* ${tanggal}\n` +
              `*Waktu:* ${waktu}\n` +
              `*Deskripsi:* ${message}`;

    const url = `https://wa.me/${adminWA}?text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');
}

    
})(jQuery);

