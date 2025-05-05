
#  JWT Tabanlı Giriş Sistemi (Spring Boot + HTML)

Bu proje, **Veritabanı Yönetim Sistemleri (VTYS)** dersi kapsamında geliştirilmiş bir web uygulamasıdır.  
Kullanıcıların sisteme kayıt olup giriş yapabildiği, **JWT (JSON Web Token)** ile kimlik doğrulaması yapan basit ve profesyonel bir çözüm sunar.  

🔹 Backend: Spring Boot (Java) + H2 In-Memory DB  
🔹 Frontend: HTML, CSS ve JavaScript (Vanilla)

---

##  Teknolojiler

| Katman     | Teknoloji                  |
|------------|----------------------------|
| Backend    | Java 17, Spring Boot, JPA  |
| Güvenlik   | Spring Security, JWT       |
| Veritabanı | H2 In-Memory DB            |
| Frontend   | HTML, CSS, JS              |
| Build Tool | Maven                      |

---

##  Projeyi Çalıştırma

### Gereksinimler
- Java 17
- Maven 3.8+

### Adımlar

```bash
git clone https://github.com/kullaniciAdi/jwt-login-vtys.git
cd jwt-login-vtys
mvn spring-boot:run
```

🔗 Tarayıcıda uygulamayı aç:
```
http://localhost:8080
```

🔗 H2 Console (veritabanı testleri için):
```
http://localhost:8080/h2-console
JDBC URL: jdbc:h2:mem:testdb
```

---

##  Özellikler

-  Kullanıcı kayıt olma (Ad, Soyad, E-posta, Şifre)
-  Kullanıcı giriş yapma (JWT token üretimi)
-  JWT token geçerlilik süresi (örneğin 60 saniye)
-  Token `localStorage` ile saklanır
-  Süresi dolan tokenlar reddedilir
-  Sayfa yenilense bile geçerli token varsa oturum korunur

---

##  API Endpoint'leri

| Yöntem | Endpoint               | Açıklama          |
|--------|------------------------|-------------------|
| POST   | `/api/auth/register`  | Kullanıcı kaydı   |
| POST   | `/api/auth/login`     | Giriş ve token    |

---

##  Proje Yapısı

```
src
├── main
│   ├── java/com/example/jwtlogin
│   │   ├── config/        # SecurityConfig
│   │   ├── controller/    # AuthController
│   │   ├── model/         # User
│   │   ├── repository/    # UserRepository
│   │   ├── security/      # JwtTokenUtil
│   │   └── service/       # AuthService
│   └── resources
│       ├── static/        # index.html, script.js, style.css
│       └── application.properties
```

---

##  Konfigürasyon Örnekleri

```properties
server.port=8080
spring.datasource.url=jdbc:h2:mem:testdb
spring.h2.console.enabled=true
spring.jpa.hibernate.ddl-auto=update
jwt.secret=your-secret-key-here-must-be-at-least-32-characters-long
jwt.expiration=60
```

---

##  Güvenlik & JWT

- Sistemde giriş yapan kullanıcıya güvenli bir JWT verilir.
- JWT, istek başlıklarında gönderilir ve sunucu bu token'ı doğrular.
- Token, belirli bir sürede (örn. 60 saniye) geçerli olur.
- Süresi dolmuş token için kullanıcı uyarılır ve yeniden giriş yapması istenir.

---

##  Ekstra Özellikler

- Kayıt sonrası giriş yapılabilir.
- Token `localStorage` üzerinde tutulur.
- Sayfa yenilendiğinde geçerli token varsa kullanıcı oturumu korunur.
- Süresi dolmuş token için özel hata mesajı gösterilir.
- H2 veritabanı ile test ve demo yapma kolaylığı sağlar.

---

##  Sonuç

Bu proje:

- Temel bir JWT kimlik doğrulama sistemini eksiksiz olarak sunar.
- Spring Security ile güvenliği, H2 ile veritabanı testini sağlar.
- Token yönetimini frontend üzerinde gösterir.
- VTYS dersi kapsamında teslim edilebilecek seviyede, eksiksiz bir projedir.

Öğrenciler için JWT'nin mantığını hem backend hem de frontend tarafında deneyimleme imkânı sağlar. Gerçek dünyadaki kimlik doğrulama sistemlerine giriş için mükemmel bir örnektir.

--


