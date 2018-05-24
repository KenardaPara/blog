---
title: "BES Fonlarınızı Dengeleme"
date: 2018-05-20T13:45:21+02:00
draft: false
slug: "bireysel-emeklilik-fonlarını-dengeleme"
---

Warren Bufftet'ın 2017 yılındaki öğütlerinden biri hisse senetlerini düşükken alıp yüksekken satmak. Peki bizim gibi uzun
vadeli, pasif yatırım yapan birini bu tavsiye ne derece bağlar. Sonuçta hisse alıp satmıyoruz. Amacımız paramızı düzenli şekilde fonlara yönlendirmek. Geçen yazıda verdiğimiz `%60GEH-%40GEK` örneğindeki gibi birikimler yapmak. Peki biz paramızla her ay sonunda fon alımlarını 60/40 şeklinde yapsak da portföyümüz böyle kalacak mı ? İşte Buffet'ın tavsiyesi ve bilinen bir başka teori burada devreye giriyor.

Geçen yazıda sizden sakladığım bir grafik vardı. Simulasyon sonunçlarında "Allocation Drift" seçeneğine giderseniz bu grafiği göreceksiniz. Portföy3 için yani 60/40 olan portföyümüzün görüntüsü şöyle

![Allocation Drift](/img/rebalancing/alloc.png)

Yıl | Borçlanma Fonu oranı| Hisse Senedi fonu oranı
----|-----|----
2004| 40.00%|	60.00%
2005|	41.53%|	58.47%
2006|	36.15%|	63.85%
2007|	37.24%|	62.76%
**2008**|	**32.65%**|	**67.35%**
**2009**|	**52.48%**|	**47.52%**
2010|	41.54%|	58.46%
2011|	36.85%|	63.15%
2012|	43.99%|	56.01%
2013|	36.37%|	63.63%
2014|	38.87%|	61.13%
2015|	36.19%|	63.81%
2016|	38.36%|	61.64%
2017|	38.01%|	61.99%


Koyu renkli yıllara dikkat edelim. 2008 kriz öncesi dönem ve küresel krizi takip eden dönem. Biz her ne kadar düzenli olarak o ay için paramızı 60/40 şeklinde bölsek de 2008 yılınca hisse senetleri aşırı değerlendiği için elimizdeki Borçlanma fonlarının değeri, hisse senedi fonlarının değerine göre düşük kalmış. Dikkat edelim, elimizden eriyip giden bir fon yok. Sadece birindeki aşırı değerlenme diğerini küçük göstermiş. Takip eden dönemde ve krizin olmasıyla tam tersi durum yaşanmış.

İşte burada Warren Buffet'ın sözü ve **Rebalancing** kavramı devreye giriyor. Bu tür durumlarda bizim portföyümüzü tekrar dengeli hale getirmemiz gerek.
`Elimizdeki değerlenen fonları satıp değeri düşen fonları alarak portföy dağılımını eski haline getirmemiz gerekir`.

Kurması kolay ama uygulaması zor bir cümle. Düşünün 2008 yılındasınız. Hisse senetleri şahlanmış yürüyor, BES birikimine baktıkça kendinizden geçiyorsunuz. "Ah keşke tüm paramla hisse senedi fonu alsaydım, ne yapacağım ben tahvili bonuyu, şimdiye zengindim" diyorsunuz muhtemelen. Borçlanma fonlarının fiyatı, hisse senetlerine oranla görece düşmüş durumda. Eğer ben size elindeli hisse fonlarını sat, portföyünü dengeye getir desem bana gülerdiniz.

Şimdi bir de 2008 e gidelim. Olaylar tam tepe taklak olmuş. Hisse senedi fonları düştükçe düşüyor. Eğer ben size elindeki Borçlanma Fonlarını sat hisse senedi fonu al desem "Deli midir nedir, zaten düşüyor iyice dibe mi vuralım" derdiniz
İşte burada Buffet gibi dirayet gösterip uzun vadeli düşünürsek kara geçebiliriz.

Bireysel Emeklilik Sisteminde fon dağılımlarını yılda 6 kez değiştirme hakkında sahibiz. Senede bir kez Portföy3 ümüzü yani 60/40 dağılımımızı Dengelesek durumlar değişecek miydi? İddia ettiğimiz gibi portföyümüzün değeri artacak mıydı ?  Bunun için aynı senaryoyu "Rebalancing" seçeneğini "Rebalance annualy" olarak değiştirip yapalım

Portföy | 2017 sonu değeri
-----|-----
Portfolio 1	|	\$10,824
Portfolio 2	|	\$7,285
Portfolio 3	|	\$10,007


Yani geçen yazıda \$9344 kalan 60/40 portföyümüz güzel bir artış göstermiş. Anlaşılan **Dengeleme** kavramı işe yaramış. Bundan faydalanmak için yapmamız gereken tek şey BES şirketinizden zamanı geldiğinde var olan birikimleri istenilen dengeye getirmekten ibaret. Neredeyse tüm BES şirketleri bunu online olarak sağlıyor. Esas önemli soru ise bunu ne zaman yapmamız gerektiği. [Bununla ilgili Vanguard fonlarının güzel bir makalesi mevcut](https://www.vanguard.com/pdf/icrpr.pdf). Özetle 3 şekilde Dengeleme yapabilirsiniz:
 * Periyodik olarak. 6 defa dağılım değiştirme hakkımız olduğunuzu düşünürseniz. En fazla 2 ayda 1.
 * Hedef dağılımdan çok şaşma durumunda. Yani portföyünüz 60/40 değil de 61/39 ya da 59/41 oranındaysa dokunmayıp, sadece 65/
 35  ya da 55/45 i geçerse müdahale etmek.
 * İkisinin karışımı olarak daha düşük bir müdahale aralığı belirleyip periyodik olarak bunu kontrol etmek.

Bu alanda yapılan araştırmaların çoğu ABD gibi stabil ekonomilere sahip ülkeler için. Bizim gibi piyasalarda dalgalanmaların çok olduğu ülkeler için ideal dengeleme yöntemini bulmak zor. İki ayda bir Dengeleme çok olabilir, yılda bir defa az olabilir, her minik sapmada tekrar yapmak yine zor olabilir. O yüzden 3. yöntem olan ikisinin karışımı yöntemi daha iyi görünüyor. Ne olursa olsun dengeleme yapılan portföy, dengelenme yapılmayana göre daha çok gelir getiriyor. Bu doğrultuda nasıl yaparsanız yapın, portföyünüzü bir şekilde dengeleyin demek şimdilik en doğrusu.

[Gelecek yazıda BES fon tiplerine ve benim için ideal olan fon dağılımına bakacağız]({{< ref "post/bes-fon-turleri.md" >}})
