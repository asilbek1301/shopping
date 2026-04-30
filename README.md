# ASYNCHRONOUS PROGRAMMING
### NodeJS

#### Haqiqiy Asynchronous da 1-synchronous functionlar ishga tushib keyingina asynchronouslar ishga tushadi. Har bir ASYNCHRONOUS functionni o'zini spesifikasi bor
```
● callback function:
    - callback ko'pincha qayta-qayta javob oladigan holatlarda ishlatiladi. shartli ravishda asynchronous function, javob tayyor bo'lsa birdaniga kuttirmasdan qaytaradi. Callback ni ichida setTimeout(), setInterval() ikkalasi ham ishlaydi

● async/await function:
    - async/await o'zining sintaksi qulayligi uchun ko'p ishlatiladi. async/await functionda setTimeout(), setInterval() umuman ishlamaydi.

● promise function:
    - promise function ko'pincha async/await qilolmaydigan holatlarda ishlatiladi. promise faqat bir marta javob beradi. setTimeout(), setInterval() da bir martta javob qaytarib o'zini yakunlaydi
```