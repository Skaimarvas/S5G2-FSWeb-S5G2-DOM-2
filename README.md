# DOM II

## Proje Açıklaması

Eğlence Otobüsü, sitelerini daha interaktif bir hale getirmenizi istiyor. Sitelerini geliştirmek için 10 benzersiz event eklemeniz konusunda size güveniyorlar. Kullanabileceğiniz birçok eventi şuradan keşfedin: [MDN events reference](https://developer.mozilla.org/en-US/docs/Web/Events).

## Git Kurulumu

- [x] Bu projeyi forklayarak bir kopyasını oluşturun.
- [x] Reponun kendi hesabınızdaki versiyonunuzu klonlayın.
- [x] Projeyi main branchına implement edin
- [x] Commitinizi pushlayın: `git push origin main`.

## Projeyi çalıştırma

Bu proje [Webpack ve Babel]'i kullanıyor. `src/index.html` içerisinde, ne JavaScript'i köprüleyen bir `script` tagı olmadığını, ne de stil dosyalarını köprüleyen bir `link` tagının olmadığını fark edeceksiniz. Proje başladığında, Webpack, LESS uzantılı dosyaları derleyerek CSS oluşturacak, Javascript ve stilleri HTML'ye enjekte edecek.

Bu projede sakın **hiçbir dosyayı taşımayın veya adını değiştirmeyin**. Web sitesinin kaynak dosyaları `src` klasöründe bulunur. NPM kitaplıklarının yüklenmesi nedeniyle 'package.json' içinde bildirilen yeni bağımlılıklar olmadıkça, 'src' klasörünün dışındaki hiçbir dosyada değişiklik yapmayın. (Örnek. `npm i lodash`).

- [x] `npm install` komutuyla proje gereksinimlerini yükleyin.
- [x] `npm start` komutuyla projeyi çalıştırın `http://localhost:3000`.

## Minimum Uygulanabilir Ürün

### Farklı 10 event için listener oluşturun (etkinlik dinleyici, event dinleyici, event listener)

- [x] [index.js dosyası](src/index.js)'nı kullanarak, en az 10 _farklı_ tipte [event listeners](https://developer.mozilla.org/en-US/docs/Web/Events) oluşturun. Bu siteyi interaktif hale getirmek için kendi yaratıcılığınızı kullanın. Örnek, eventlerle renkleri değiştirebilir, nesnelere animasyonlar ekleyebilir, DOM elementleri ekleyebilir veya silebilirsiniz.

- [x] Kullanabileceğiniz bazı event çeşitleri şunlardır:
  - [x] `mouseover`
  - [x] `keydown`
  - [x] `wheel`
  - [x] `load`
  - [ ] `focus`
  - [ ] `resize`
  - [ ] `scroll`
  - [ ] `select`
  - [ ] `dblclick`
  - [ ] `drag / drop`

Not: Drag/drop diğerlerine göre biraz daha alengirli. Bu aslında tek bir tür event türü değil, birkaç farklı tür eventin bir arada çalışması gerekir.

### preventDefault kullanın

- [ ] preventDefault için bir kullanım alanı bulun. Örnek, bir a linkine tıklandığında gitmesi gereken link yerine başka tanımladığınız bir sayfaya gönderebilirsiniz.
