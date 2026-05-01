# ASYNCHRONOUS PROGRAMMING
### NodeJS

#### Haqiqiy Asynchronous da 1-synchronous functionlar ishga tushib keyingina asynchronouslar ishga tushadi. Har bir ASYNCHRONOUS functionni o'zini spesifikasi bor

### ● callback function:
```
    - Callback ko'pincha qayta-qayta javob oladigan holatlarda ishlatiladi. 
    Shartli ravishda asynchronous function, javob tayyor bo'lsa birdaniga kuttirmasdan qaytaradi. 
    Callback ni ichida setTimeout(), setInterval() ikkalasi ham ishlaydi
```

### ● async/await function:
```
    - async/await o'zining sintaksi qulayligi uchun ko'p ishlatiladi. 
    async/await functionda setTimeout(), setInterval() umuman ishlamaydi.
    - async/await eng katta qulayligi promise & callback HELL larni oldini olishidir
```

### ● promise function:
```
    - Promise function ko'pincha async/await qilolmaydigan holatlarda ishlatiladi. 
    promise faqat bir marta javob beradi. 
    setTimeout(), setInterval() da bir martta javob qaytarib o'zini yakunlaydi
```