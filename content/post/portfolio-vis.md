---
title: "Portfolio Vis"
date: 2018-05-14T08:23:30+02:00
draft: true
---

Çok sık duyduğumuz bir laf var. "Zamanında dedemden 100 Lira miras kalmıştı vardı o parayla Aselsan Hissesi alsaydım zengindim".
Buna ben *ah-vah analizi* diyorum. Yapılmamış toplu yatırım için hayıflanmak. Halbuki hayat böyle değil. İnsanların eline sürekli toplu halde para geçmiyor.
Gelirlerinden azar azar biriktiriyorlar ve herhangi bir yatırım aracı alacaklarsa uzun vadede azar azar sık sık şekilde alabilirler. Buna göre doğru bir *ah-vah analizi* şu şekilde olmalı: `Zamanında maaşımdan her ay 50$ ile altın alsaydım bugün şu kadar param olurdu`.
Burada iki önemli nokta var. İlki her ay bunu yapmak ve disiplini bozmamak, ikinci ise yatırım yaptığımız miktarın enflasyon sebebiyle eriyip gitmemesine izin vermemek için yatırım miktarını da bir şekilde sabitlemek. Şimdilik en kolay sabitleme aracını Amerikan Doları olarak düşünebiliriz.

Şimdi bu analizi yapabileceğiniz [Portfolio Visualizer]() ile tanışın. Portfolio Visualizer(PV) nin bir çok aracı (Tools) var. Bizim kullanacağımız araç ise, *Backtest Portfolio* . Yukarıdaki tools menüsünden kendisine erişebilirsiniz.

![Giris Ekrani](/img/portviz/giris.png)
Şimdi nereye ne veri girdiğimize bakalım

* Time Period: Analizimiz yıldan yıla mı çalışsın aydan aya mı
* Start Year: Yatırıma başladığımız yıl
* End Year: Yatırımın sonlandığı yıl
* Initial Amount:  Başlangıçta kaç dolarlık yatırımımız vardı
* Periodic Adjusment: Düzenli olarak yatırım alıp ya da satacağımız
 * Contrinute Fixed Amount: Düzenli olarak Ay ya da yıl bazında yatırımımıza katkımız
* Rebalancing: Portföyün dengesi bozulunca dengeye getirip getirmeyeceğimiz. Detaylıca daha sonra incelenecek

Diğerlerini şimdilik bırakalım ve hangi yaıtırım araçlarını nasıl seçtiğimize bakalım
![Varlik Secimi](/img/portviz/asset-pick.png)
Şimdi kaçırdığımız yatırımın analizi için portfolyo oluşturacağız
Portfolio Assets kısmındaki her bir ürün için giriş yapıyoruz. Bunun için Büyüteç imlecine tıklıyoruz ve yatırım aracımız hangi sınıftansa onu seçiyoruz
Daha sonra ise bu ürünün portfolyomuzun yüzde kaçını oluşturduğunu yazıyoruz.
Gördüğünüz gibi buradan 3 farklı portfolyo oluşturulup karşılaştırma yapılabilir. Bunu sık sık kullanacağız

![Cikti Aciklamasi](/img/portviz/output-modes.png)

![Veri Yükleme](/img/portviz/asset-import.png)

![Yüklü Veriler](/img/portviz/saved-model.png)
