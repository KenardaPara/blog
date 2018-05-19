---
title: "Bireysel Emeklilik Portföyü Oluşturmak"
date: 2018-05-17T08:16:59+02:00
draft: true
slug: "bireysel-emeklilik-icin-fon-dagilimina-giris"
---

"Tüm yumurtaları tek sepete koyma" demiş eskiler. Riski dağıtmak için basit ve etkili bir yöntem.
Hangi bağlamda konuşursak konuşalım riski dağıtmak olduça önemli. Konu finans olunca riski dağıtma kavramını
portföy oluşturmak olarak düşünebiliriz. KenardaPara'mızın hepsini sadece altına ya da borsa endeksine yatırdığımızda gelirimizin nasıl dalgalandığın gördük

Bu dalgalanmaya "volatilite" dedik ve bunu da risk olarak tanımladık. Dalgaya neden risk diyoruz ki ? Bunu anlamanın en kolay yolu dalganın neresindeyken finansal aracı nakte çevirdiğinizi hayal etmekte geçiyor. Geleceği göremiyoruz. O anda altınlarımızı bozdururken acaba dalganın dibindemiyiz yoksa en tepesinde mi ? Kahin değilseniz bunu 100% olasılıkla söylemeniz zor. Borsacılar bunu tahmin etmek için "teknik analiz" adını verdikleri yöntemler kullanıyorlar. Ancak uzun vadeli yatırımcı için bunlar deli zırvası olabilir.

Bizim için önemli olan dalgalanmalar ne kadar başımızı döndürüyor ya da bulandırıyor. Bu kişiden kişiye değişen bir risk algısı. Bunun rasyonel sınırları mevcut. Ama finansal piyasalarda her zaman tam da bizim risk algımıza göre olan tekil araçlar yok. İşte bu yüzden bir çeşitli finansal araçları birleşitirerek bizim risk algımıza uygun sepetler yaratıyoruz. Bu sepetlere de **portföy** diyoruz. Daha önce emeklilik fonlarının da sepetler olduğundan bahsetmiştik. Ancak tek bir fon bizim risk algımıza uymayabilir. Bu yüzen BES Fonlarından da portföyler yaratabiliriz. Özellikle unutmayın ki her BES fonun Fon işletim gider kesintisi aynı değil. Ucuz maliyetli fonlar da mevcut. Portföy oluşturarak, benzer riske sahip daha ucuz **FİGK** e sahip portföyler oluşturabiliriz


Şimdi [portfolio-visualizer](https://www.portfoliovisualizer.com/backtest-portfolio) kullanarak bazı karşılaştırmalar yapalım. Genelde ABD kaynaklı finansal özgürlük/erken emeklilik (FIRE) sitelerinde birikim safhasının başlarında önerilen çeşitli portföyler vardır. %60 Hisse senedi %40 Tahvil/Bono gibi.
Biz de bakalım bu Türkiye için nasıl işlemiş. Adını vermeyeceğim ama kolayca bulabileceğiniz iki fonu kullanarak bunu yapalım. Hisse senedi olanın kodu [GEH](https://github.com/KenardaPara/veriler/tree/master/besdata/GEH) Borçlanma arçaları yani Tahvil/Bono olanın koduysa [GEK](https://github.com/KenardaPara/veriler/tree/master/besdata/GEH)

Şimdi 3 durumu karşılaştıralım. İlk portföyümüz hepsini `GEH` e koysaydık, ikincisi hepsini `GEK` e koysaydık ve üçüncüsü de önerilen gibi `%60 GEH` `%40 GEK` yapsaydık nasıl olurdu. Senaryomuzu da yazalım. 2014 Ocak başında 1$ var ve her ay sonunda BES hesabımıza 50$ ekliyoruz. 2017 Aralık sonunda hesabımızda kaç para olurdu.

![Karsilastırma](/img/portfoy-olusturmak/result.png)

2017 sonunda kadar toplam 8400$ BES e ayırmışız. Sadece hisse senedi portföyü 10.824$, sadece tahvil/bono portföyü 7285$ ve ikisinin karışımı olan portföyse 9344$ etmiş. Tahvil/bono zarar ettirirken diğer ikisi kazandırmış. Dikkat etmemiz gereken
 `%100 GHE` ile `%60 GEH %40 GEK` karşılaştırması. Her ne kadar sonunda `%100 GEH` kazandırmış olsa da kriz zamanlarında(2008 sonu gibi) `%60 GEH %40 GEK` ye daha az kaybettirmiş. Yani sonunda bize kaybettirden Tahvil/Bono kriz zamanlarında koruma sağlamış.
Buradan `%60-%40` en ideal dağılım gibi bir sonuç çıkmasın. Bunları değerlendireceğiz. Ancak önemli olan zaman zaman kaybetsek de 13 senenin sonunda 3 portföyün 2 sinde kar elde etmemiş olmamız. Özellikle unutmayın ki eğer sistemde yeterince bekleyip çıkarsak, bu kar sadece %5 oranında vergi (stopaj) kesintisine uğrayacak. Diğer finansal ürünlerde  bu kesinti genellikle %15.

Peki portföyümüzü hep aynı şekilde tutak zorunda mıyız ? Yatırdığımız paranın hep aynı şekilde dağıtılması mı zorunlu ? Gelecek yazıda bu konuya yani Dengeleme - Rebalancing - konusunda değineceğiz ve ufacık bir dokunuşula 3. portföyümüzün getirisini nasıl daha az riskle ilkinin seviyesine çıkardığımızı göstereceğiz
