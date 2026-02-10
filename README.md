# Film Uygulaması

Film keşfetme, detaylarını inceleme ve favorilere ekleme için basit bir web uygulaması.

![Film Uygulaması](https://img.shields.io/badge/FilmApp-Web-blue) ![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5-7952b3) ![Vanilla JS](https://img.shields.io/badge/JavaScript-Vanilla-yellow)

---

## Özellikler

- **Ana sayfa** — Kategorilere göre (Aksiyon, Komedi, Dram, Bilim Kurgu, Korku) film listesi
- **Film detay** — Poster, konu, süre, IMDB puanı ve YouTube fragman
- **Favoriler** — Filmleri favorilere ekleme / çıkarma; liste tarayıcıda (localStorage) saklanır
- **Responsive** — Mobil ve masaüstü uyumlu arayüz (Bootstrap 5)

---

## Proje yapısı
FilmApp/
├── index.html # Ana sayfa (film kartları, kategori filtreleri)
├── product.html # Film detay sayfası (poster, konu, fragman)
├── favorites.html # Favori filmler listesi
├── css/
│ ├── bootstrap.min.css
│ └── style.css # Özel stiller
├── js/
│ ├── main.js # Veri (FILMLER, KATEGORILER), favori ve URL fonksiyonları
│ ├── data.js # Alternatif veri dosyası (kategoriler + filmler)
│ └── app.js # Ek yardımcı fonksiyonlar
└── images/ # Yerel posterler (isteğe bağlı)

---

## Nasıl çalıştırılır?

1. Projeyi indirin veya klonlayın.
2. **Yerel sunucu ile (önerilen):**
   - `npx serve .` veya
   - VS Code **Live Server** eklentisi ile `index.html` açın.
3. **Doğrudan dosya:** `index.html` dosyasını tarayıcıda açabilirsiniz; bazı görseller dış kaynaklı olduğu için tam deneyim için yerel sunucu daha uygundur.

Ana giriş: `index.html` → film kartına tıklayınca `product.html?id=X` → favoriler `favorites.html`.

---

## Kullanılan teknolojiler

| Teknoloji | Açıklama |
|-----------|----------|
| HTML5 | Sayfa yapısı |
| Bootstrap 5 | Grid, kartlar, navbar, butonlar |
| Bootstrap Icons | İkonlar |
| Vanilla JavaScript | Veri, favori mantığı, sayfa geçişleri |
| localStorage | Favori film ID’lerinin saklanması |

Film posterleri [TMDB](https://www.themoviedb.org/) (The Movie Database) görsel sunucusu kullanılarak gösterilebilir; fragmanlar YouTube embed ile oynatılır.

---

## Favoriler

Favoriler tarayıcıda `localStorage` anahtarı `filmAppFavoriler` ile tutulur. Farklı cihaz veya tarayıcıda liste ayrıdır; veri sunucuya gönderilmez.

---

## Lisans

Bu proje eğitim / kişisel kullanım amaçlıdır. Film bilgileri ve posterler ilgili kaynakların (TMDB, IMDb, YouTube) kullanım koşullarına tabidir.
