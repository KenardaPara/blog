---
title: "KenardaParayı değerlendirmenin zorunluluğu"
date: 2018-05-05T21:56:52+02:00
draft: false
slug: "birikimleri-degerlendirmenin-zorunlulugu"
---

Tasarruflardan bahsettik ve sadece tasarruf yapmanın yeterli olmadığını söyledik. Çünkü enflasyon denen ekonomik faktör yaptığımız tasarrufları eritip gidiyor. Enflasyonun eritme hızından kurtulmamız için gereken şey ise **yatırım**

Şimdi verilerle, bu etkiyi gösteren bir örnek verelim.
. [Portfolio Visualizer](https://www.portfoliovisualizer.com) ile tanışın. Bu araç genel olarak ABD'deki yatırımcılara yönelik. Ancak bizim için de gayet faydalı özellikleri var. Bununla simulasyon yapabileceğiniz gibi tarihi verileri kullanarak, zamanında hergün kenara şu kadar para koysaydım bugün kaç param vardı gibi ah-vah analizleri için de kullanabilirsiniz

İlk örneğimiz bu yazıda ele aldığımız tasarrufumuz ve enflasyon ilişkisi olsun. Yatırım **yapMAmaya** bir örnek, tasarrufumuzu elimizde nakit olarak tutmak. İleride tekrar bahsederiz ancak, *TL nizi Dolar ya da Euro olarak tutmak bir yatırım olmuyor*. Sadece TL karşısında bir enflasyon koruma aracı alıyor. Dolar olarak tutarsanız ABD enflasyonu cebinizden tırtıklarken , EURO durumunda ise  bu işi AB yapıyor.

Şimdi [Portfolio Visualizer](https://www.portfoliovisualizer.com) kullanarak 2008 Ocak ayında elimizde \$1000 olsa ve bu tarihten beri her ay kenara \$100 koysak bugün elimizde kaç ABD Doları nasıl bir satın alma gücüne sahip olurdu ona bakalım.

Bunun için [Backtest Portfolio](https://www.portfoliovisualizer.com/backtest-portfolio) kısmına giriyoruz ve şu şekilde formu dolduruyoruz
![veriler](/img/yatirimlar/pv1.png)
![veriler](/img/yatirimlar/pv2.png)

Elimizde kaç ABD Doları olacağı sorusu basit. `10 yıl * 12 ay * \$100 + \$1000 = $13000 ` . Peki bu \$13000 ın 2008'den beri enflasyon karşı gerçek değeri nedir ?

Onu da burada görüyoruz.
![veriler](/img/yatirimlar/pv3.png)

10 yıl boyunca yaptığımız `$13.000` birikimin gerçek değeri `$11.211` a düşmüş.

Peki madem dolarda tutmak bile tasarruflarımızı eritiyor nasıl bir koruma sağlarız? Cevap basit. **Yatırım**.
Yatırımdaki amacımız en az enflasyon kadar bir kazanç sağlamak. Enflasyon'un üzerinde olan her kuruş ise bizim yatırımdan olan karımız. Tabi bir de vergi gerçekliği var. Devletimiz yatırımdan ettiğimiz karı hesaplarken enflasyon gerçeğini göz ardı edebiliyor. Bu sebeple yatırımıdan beklentimiz aslında enflasyonun %2-3 uzerinde bir getiri.

Yatırımda karlı durumdaysak ve getirimizi tekrar yatırım olarak değerlendiriyorsak Dünya'nın 8. harikası ile tanışıyoruz
`Bileşik Faiz`

> Compound interest is the eighth wonder of the world. He who understands it, earns it... he who doesn’t... pays it
>   
Albert Einstein

> Bileşik faiz dünyanın 8. harikası. Anlayan kazanır, anlamayan öder
>
> Baran(14)

Yani ne kadar erken tasarruf ve yatırım yapmaya başlarsak o kadar çok `Bileşik Faiz` den yararlanabiliriz.

KenardaPara nın ne olduğunu ve nasıl değerlendirebilceğini tartıştık. Gelecek yazıda en **kolay** yatırım yöntemini olan **Bireysel Emeklilik Sistemi**'nden bahsedeceğiz.
