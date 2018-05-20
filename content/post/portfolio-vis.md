---
title: "Portfolio Visualizer ile Tanışın"
date: 2018-05-14T08:23:30+02:00
draft: false
slug: "portfolio-visualizer-ile-analiz"
---

Çok sık duyduğumuz bir laf var. "Zamanında dedemden 100 Lira miras kalmıştı, o parayla Aselsan Hissesi alsaydım zengindim".
Buna ben *ah-vah analizi* diyorum. Yapılmamış toplu yatırım için hayıflanmak. Halbuki hayat böyle değil. İnsanların eline sürekli toplu halde para geçmiyor. Gelirlerinden azar azar biriktiriyorlar ve herhangi bir yatırım aracı alacaklarsa uzun vadede azar azar sık sık şekilde alabilirler. Buna göre doğru bir *ah-vah analizi* şu şekilde olmalı: `Zamanında maaşımdan her ay 50TL ile altın alsaydım bugün şu kadar param olurdu`.


*ah-vah analizi*'nde  önemli nokta var. İlki her ay bunu yapmak ve disiplini bozmamak, ikinci ise yatırım yaptığımız miktarın enflasyon sebebiyle eriyip gitmesine izin vermemek için yatırım miktarını da reel olarak bir şekilde sabitlemek. Şimdilik en kolay sabitleme aracını Amerikan Doları olarak düşünebiliriz. Yani her ay 50TL biriktirsem yerine her ay 50 dolar kadar biriktirebilsem dememiz lazım.

Şimdi bu analizi yapabileceğiniz [Portfolio Visualizer](https://www.portfoliovisualizer.com/) ile tanışın. Portfolio Visualizer(PV) nin bir çok aracı (Tools) var. Bizim kullanacağımız araç ise, *Backtest Portfolio* . YukarıdakiT*Tools* menüsünden kendisine erişebilirsiniz.

![Giris Ekrani](/img/portviz/giris.png)
Şimdi nereye ne veri girdiğimize bakalım

* Time Period: Analizimiz yıldan yıla mı çalışsın aydan aya mı
* Start Year: Yatırıma başladığımız yıl
* End Year: Yatırımın sonlandığı yıl
* Initial Amount:  Başlangıçta kaç dolarlık yatırımımız vardı
* Periodic Adjusment: Düzenli olarak yatırım alıp ya da satacağımız
 * Contrinute Fixed Amount: Düzenli olarak Ay ya da yıl bazında yatırımımıza katkımız
* Rebalancing: Portföyün dengesi bozulunca dengeye getirip getirmeyeceğimiz. Detaylıca daha sonra incelenecek

Diğerlerini şimdilik bırakalım ve hangi yatırım araçlarını nasıl seçtiğimize bakalım
![Varlik Secimi](/img/portviz/asset-pick.png)
Şimdi kaçırdığımız yatırımın analizi için portföy oluşturacağız
Portfolio Assets kısmındaki her bir ürün için giriş yapıyoruz. Bunun için Büyüteç imlecine tıklıyoruz ve yatırım aracımız hangi sınıftansa onu seçiyoruz
Daha sonra ise bu ürünün portföyümüzün yüzde kaçını oluşturduğunu yazıyoruz.
Gördüğünüz gibi buradan 3 farklı portföy oluşturulup karşılaştırma yapılabilir. Bunu sık sık kullanacağız

![Cikti Aciklamasi](/img/portviz/output-model.png)

Burası analizin sonucunu gösteriyor. Portföyümüz ne kadar büyümüş. En son değeri ne olmuş. Ortalama yıllık getiri neymiş gibi.
İsterseniz bu sonuçların enflasyondan arındırılmış değerlerini de alttaki "Inflation Adjusted" a tıklayarak görebilirsiniz

![Veri Yükleme](/img/portviz/asset-import.png)

Bu Kısım kritik. Buraya girebilmek için öncelikle siteye üye olmanız gerekiyor.
Üye olduktan sonra artık BES Fonlarımızın ya da Türkiye'ye özgü başka yatırım araçlarının verilerini buraya yükleyerek analiz yapacağız. BES fon verilerini  [Github veri repomuzdan](https://github.com/KenardaPara/veriler) BES Fon kodu ile çekip yükleyebilirsiniz.
Bunun detaylı açıklamasını ileriki bir yazıda açıklayacağım.


![Yüklü Veriler](/img/portviz/saved-model.png)
Bu ekrandan da yüklü verilerinizi yönetebilirsiniz. Kodlarını değiştirmek gibi


## Altın, BIST30, BIST100 Karşılaştırması

Şimdi ufak bir *ah-vah analizi* yapalım. 3 tane yatırım aracını karşılaştıralım. Senaryomuz şu olsun:
`2005 Ocak ayından 2017 Aralık sonuna kadar her ay 50$ karşılığı BIST30 Endeksi, BIST100 Endeksi ya da Altın alsaydım bugün kaç param olurdu`
Ben sisteme Imkb100 ve Bist30 endekslerinin Dolar bazında getirilerini yükledim. Analizi kolaylaştırmak için tasarrufumuz olan 50$ şimdilik ABD enflasyonu ile arttırmayalım. Yani toplamda 13 * 12 * 50 = 7800 Dolar para yatırmış olacaktık
Bakalım analizimiz bize ne gösteriyor

![Sonuclar](/img/portviz/sonuc.png)


Portföy | Yatırım Aracı | 2017 Aralık değeri
-----------|-----|----
Portolio1 | BIST30 | 7856$
Portolio2 | BIST100 | 16339$
Portolio3 | ALTIN | 10234$


Kısacı BIST30 bize çok bir şey kazandırmamış ancak BIST100 neredeyse ikiye katlamış durumda. Ancak grafiğe baktığınızda göreceksiniz tüm çizgiler çok dalgalı. Buna finansta *volatilite* deniyor. Ne kadar çok dalga o kadar çok risk demek. Fazla risk bizim istemediğimiz bir şey ve bu yüzden de tek bir finansal araç yerine bunlardan bir sepet oluşturmak daha güvenli olacaktır.

Gelecek yazıda bu konuya, yani [Portföy oluşturmaya değineceğiz]({{< ref "post/portfolyo-olusturma.md" >}})
