/**
 * Film İzleme Uygulaması - Ana JavaScript
 * Kategori listeleme, detay görüntüleme, favorilere ekleme
 */

const FAVORI_KEY = 'filmAppFavoriler';

// Favorileri localStorage'dan al
function getFavoriler() {
  const kayit = localStorage.getItem(FAVORI_KEY);
  return kayit ? JSON.parse(kayit) : [];
}

// Favorileri localStorage'a yaz
function setFavoriler(ids) {
  localStorage.setItem(FAVORI_KEY, JSON.stringify(ids));
}

// Favori mi kontrol et
function favoriMi(id) {
  return getFavoriler().includes(id);
}

// Favoriye ekle / çıkar
function toggleFavori(id) {
  let ids = getFavoriler();
  if (ids.includes(id)) {
    ids = ids.filter(function (f) { return f !== id; });
  } else {
    ids.push(id);
  }
  setFavoriler(ids);
  guncelleFavoriUI();
  return ids.includes(id);
}

// Favori sayısı ve listeyi güncelle
function guncelleFavoriUI() {
  const ids = getFavoriler();
  const sayiEl = document.getElementById('favoriSayisi');
  if (sayiEl) sayiEl.textContent = ids.length;

  const favoriFilmlerEl = document.getElementById('favoriFilmler');
  const bosMesajEl = document.getElementById('favoriBosMesaj');
  const favorilerSection = document.getElementById('favoriler');

  if (!favoriFilmlerEl) return;

  if (ids.length === 0) {
    favorilerSection.classList.add('bos');
    bosMesajEl.style.display = 'block';
    favoriFilmlerEl.innerHTML = '';
    return;
  }

  favorilerSection.classList.remove('bos');
  bosMesajEl.style.display = 'none';
  const favoriFilmler = FILMLER.filter(function (f) { return ids.includes(f.id); });
  favoriFilmlerEl.innerHTML = favoriFilmler.map(function (film) {
    return filmKartHTML(film, true);
  }).join('');

  // Favori kartlarındaki butonlara olay dinleyici
  favoriFilmlerEl.querySelectorAll('.btn-detay').forEach(function (btn) {
    btn.addEventListener('click', function () { detayGoster(parseInt(btn.dataset.id, 10)); });
  });
  favoriFilmlerEl.querySelectorAll('.btn-favori').forEach(function (btn) {
    btn.addEventListener('click', function () {
      toggleFavori(parseInt(btn.dataset.id, 10));
      renderFilmler(seciliKategori);
      guncelleFavoriUI();
    });
  });
}

// Tek film kartı HTML
function filmKartHTML(film, favoriListesindeMi) {
  const favoride = favoriMi(film.id);
  const kategoriAd = KATEGORILER.find(function (k) { return k.id === film.kategori; });
  const kategoriLabel = kategoriAd ? kategoriAd.ad : film.kategori;

  return '<div class="col-12 col-sm-6 col-lg-4 col-xl-3">' +
    '<div class="card film-kart">' +
    '  <img src="' + (film.poster || '') + '" class="card-img-top" alt="' + film.baslik + '" onerror="this.src=\'https://via.placeholder.com/300x450?text=Film\'>' +
    '  <div class="card-body">' +
    '    <h5 class="card-title">' + film.baslik + '</h5>' +
    '    <p class="card-text small text-muted">' + kategoriLabel + ' • ' + film.yil + '</p>' +
    '    <div class="btn-group w-100 mt-2">' +
    '      <button type="button" class="btn btn-outline-primary btn-sm btn-detay" data-id="' + film.id + '">Detay</button>' +
    '      <button type="button" class="btn btn-outline-danger btn-sm btn-favori" data-id="' + film.id + '">' +
    (favoride ? '<i class="bi bi-heart-fill"></i>' : '<i class="bi bi-heart"></i>') + ' Favori' +
    '      </button>' +
    '    </div>' +
    '  </div>' +
    '</div>' +
    '</div>';
}

// Film listesini render et
let seciliKategori = 'tum';

function renderFilmler(kategori) {
  seciliKategori = kategori || 'tum';
  const container = document.getElementById('filmKartlari');
  if (!container) return;

  let list = FILMLER;
  if (kategori && kategori !== 'tum') {
    list = FILMLER.filter(function (f) { return f.kategori === kategori; });
  }

  container.innerHTML = list.map(function (film) {
    return filmKartHTML(film);
  }).join('');

  container.querySelectorAll('.btn-detay').forEach(function (btn) {
    btn.addEventListener('click', function () {
      detayGoster(parseInt(btn.dataset.id, 10));
    });
  });
  container.querySelectorAll('.btn-favori').forEach(function (btn) {
    btn.addEventListener('click', function () {
      toggleFavori(parseInt(btn.dataset.id, 10));
      renderFilmler(seciliKategori);
      guncelleFavoriUI();
    });
  });
}

// Kategori butonlarını oluştur
function renderKategoriler() {
  const container = document.getElementById('kategoriListesi');
  if (!container) return;

  let html = '<button class="btn btn-outline-primary active" data-kategori="tum">Tümü</button>';
  KATEGORILER.forEach(function (k) {
    html += '<button class="btn btn-outline-primary" data-kategori="' + k.id + '">' + k.ad + '</button>';
  });
  container.innerHTML = html;

  container.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      container.querySelectorAll('.btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      renderFilmler(btn.dataset.kategori);
    });
  });
}

// Modal ile detay göster
function detayGoster(filmId) {
  const film = FILMLER.find(function (f) { return f.id === filmId; });
  if (!film) return;

  const kategoriAd = KATEGORILER.find(function (k) { return k.id === film.kategori; });

  document.getElementById('modalFilmBaslik').textContent = film.baslik;
  document.getElementById('modalFilmPoster').src = film.poster || '';
  document.getElementById('modalFilmPoster').alt = film.baslik;
  document.getElementById('modalFilmKategori').textContent = kategoriAd ? kategoriAd.ad : film.kategori;
  document.getElementById('modalFilmYil').textContent = film.yil;
  document.getElementById('modalFilmAciklama').textContent = film.aciklama;
  document.getElementById('modalFilmSure').textContent = film.sure;
  document.getElementById('modalFilmImdb').textContent = film.imdb;

  const modalFavoriBtn = document.getElementById('modalFavoriEkle');
  if (modalFavoriBtn) {
    modalFavoriBtn.dataset.id = film.id;
    modalFavoriBtn.innerHTML = favoriMi(film.id)
      ? '<i class="bi bi-heart-fill me-1"></i>Favorilerden Çıkar'
      : '<i class="bi bi-heart-fill me-1"></i>Favorilere Ekle';
  }

  const modal = new bootstrap.Modal(document.getElementById('filmDetayModal'));
  modal.show();
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function () {
  renderKategoriler();
  renderFilmler('tum');
  guncelleFavoriUI();

  document.getElementById('modalFavoriEkle').addEventListener('click', function () {
    const id = parseInt(this.dataset.id, 10);
    const eklendi = toggleFavori(id);
    renderFilmler(seciliKategori);
    guncelleFavoriUI();
    this.innerHTML = eklendi
      ? '<i class="bi bi-heart-fill me-1"></i>Favorilerden Çıkar'
      : '<i class="bi bi-heart-fill me-1"></i>Favorilere Ekle';
  });
});
