// Film verisi - kategoriler ve filmler
const KATEGORILER = [
  { id: 'aksiyon', ad: 'Aksiyon' },
  { id: 'komedi', ad: 'Komedi' },
  { id: 'dram', ad: 'Dram' },
  { id: 'bilim-kurgu', ad: 'Bilim Kurgu' },
  { id: 'korku', ad: 'Korku' }
];

const FILMLER = [
  {
    id: 1,
    baslik: 'Inception',
    aciklama: 'Dom Cobb, zihnin en derin katmanlarına girerek fikir çalan bir hırsızdır. Son bir iş teklifi onu imkansızı denemeye iter: fikir yerleştirme. Başarılı olursa özgürlüğüne kavuşacaktır.',
    kategori: 'bilim-kurgu',
    yil: 2010,
    sure: '2s 28dk',
    imdb: '8.8',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg'
  },
  {
    id: 2,
    baslik: 'The Dark Knight',
    aciklama: 'Batman, Joker\'in Gotham\'da yarattığı kaosa karşı mücadele eder. Ahlak, adalet ve korku arasında geçen epik bir çatışma.',
    kategori: 'aksiyon',
    yil: 2008,
    sure: '2s 32dk',
    imdb: '9.0',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg'
  },
  {
    id: 3,
    baslik: 'Forrest Gump',
    aciklama: 'Düşük IQ\'lu Forrest Gump, hayatı boyunca tarihin önemli anlarına tanıklık eder ve sevdiği kızın kalbini kazanmaya çalışır.',
    kategori: 'dram',
    yil: 1994,
    sure: '2s 22dk',
    imdb: '8.8',
    poster: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
  },
  {
    id: 4,
    baslik: 'The Hangover',
    aciklama: 'Las Vegas\'ta bir düğün partisinden sonra uyanan dört arkadaş, gelini kaybettiklerini ve geceyi hatırlamadıklarını fark eder.',
    kategori: 'komedi',
    yil: 2009,
    sure: '1s 40dk',
    imdb: '7.7',
    poster: 'https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
  },
  {
    id: 5,
    baslik: 'Get Out',
    aciklama: 'Chris, sevgilisinin ailesiyle tanışmak için onların evine gider. Görünüşte nazik olan bu ailenin karanlık bir sırrı vardır.',
    kategori: 'korku',
    yil: 2017,
    sure: '1s 44dk',
    imdb: '7.7',
    poster: 'https://image.tmdb.org/t/p/w342/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg'
    },
  {
    id: 6,
    baslik: 'Interstellar',
    aciklama: 'Dünya yaşanmaz hale gelirken bir grup astronot, insanlığın devamı için uzayda yeni bir yuva arayışına çıkar.',
    kategori: 'bilim-kurgu',
    yil: 2014,
    sure: '2s 49dk',
    imdb: '8.7',
    poster: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
  },
  {
    id: 7,
    baslik: 'John Wick',
    aciklama: 'Emekli bir tetikçi, kendisine hediye edilen köpeğin öldürülmesi ve arabasının çalınması üzerine intikam yoluna düşer.',
    kategori: 'aksiyon',
    yil: 2014,
    sure: '1s 41dk',
    imdb: '7.4',
    poster: 'https://image.tmdb.org/t/p/w342/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg'
  },
  {
    id: 8,
    baslik: 'The Shawshank Redemption',
    aciklama: 'Haksız yere hapse atılan Andy Dufresne, umudunu kaybetmeden hayatta kalmaya ve özgürlüğe giden yolu bulmaya çalışır.',
    kategori: 'dram',
    yil: 1994,
    sure: '2s 22dk',
    imdb: '9.3',
    poster: 'https://image.tmdb.org/t/p/w342/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg'
  },
  {
    id: 9,
    baslik: 'Superbad',
    aciklama: 'Lise son sınıf öğrencisi iki arkadaş, partiye alkol götürerek popüler olmaya çalışır. İşler bekledikleri gibi gitmez.',
    kategori: 'komedi',
    yil: 2007,
    sure: '1s 53dk',
    imdb: '7.6',
    poster: 'https://image.tmdb.org/t/p/w342/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg'
  },
  {
    id: 10,
    baslik: 'The Conjuring',
    aciklama: 'Paranormal araştırmacılar Ed ve Lorraine Warren, bir çiftlik evinde yaşayan ailenin yardımına koşar. Evde kötü bir varlık vardır.',
    kategori: 'korku',
    yil: 2013,
    sure: '1s 52dk',
    imdb: '7.5',
    poster: 'https://image.tmdb.org/t/p/w342/wVYREutTvI2tmxr6ujrHT704wGF.jpg'
  }
];
