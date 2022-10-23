var express = require('express');
var router = express.Router();

  const anaSayfa = function(req, res, next) {
    res.render('anasayfa', 
    { "başlık": "AnaSayfa",
      "sayfaBaslik":{
      "siteAd":"Mekanbul",
      "slogan":"Yakınlardaki Mekanları Bul!"
    } 
  });
  }
  
  const mekanBilgisi = function(req, res, next) {
    res.render('mekanbilgisi', { title: 'Mekan Bilgisi' });
  }

  const yorumEkle = function(req, res, next) {
    res.render('yorumekle', { title: 'Yorum Ekle' });
  }

  module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle
  }