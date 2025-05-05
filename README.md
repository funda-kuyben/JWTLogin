
#  JWT Tabanlı Giriş Sistemi (Spring Boot + HTML)

Bu proje, Veritabanı Yönetim Sistemleri (VTYS) dersi kapsamında geliştirilmiş bir web uygulamasıdır. Uygulama, kullanıcıların sisteme kayıt olup giriş yapabildiği, JWT (JSON Web Token) ile kimlik doğrulaması yapan basit ve profesyonel bir çözüm sunmaktadır. Frontend kısmı sade HTML/CSS/JS ile, backend kısmı ise Spring Boot (Java) ve H2 bellek içi veritabanı ile geliştirilmiştir.

---

##  Teknolojiler

- Backend : Java 17, Spring Boot, JPA
- Güvenlik : Spring Security, JWT 
- Veritabanı : H2 In-Memory DB 
- Frontend : HTML, CSS, Vanilla JavaScript 
- Build Tool : Maven

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

-  Tarayıcıda uygulamayı aç:
```
http://localhost:8080
```

-  H2 Console (veritabanı testleri için):
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


 POST   | `/api/auth/register`  | Kullanıcı kaydı   
 POST   | `/api/auth/login`     | Giriş ve token    

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

Bu proje, kullanıcıların güvenli bir şekilde sisteme kayıt olup giriş yapmalarını sağlayan bir JWT tabanlı giriş sisteminin temel işlevlerini yerine getirmektedir. Kullanıcı kaydı ve giriş işlemleri başarılı bir şekilde çalışmakta, kullanıcıların giriş yaptıktan sonra oturumları JWT token ile doğrulanmaktadır. Token süresi dolduğunda kullanıcıya uyarı verilmektedir. Bu özellik, uygulamanın güvenliğini artırarak yalnızca geçerli token ile erişime izin verir. Ayrıca, sayfa yenilendiğinde dahi geçerli bir token varsa oturum korunur, bu da kullanıcı deneyimini iyileştirir.

Bu proje, JWT tabanlı kimlik doğrulamanın temellerini öğrenmek isteyenler için oldukça faydalıdır. Hem frontend hem de backend tarafında kullanılan teknolojiler ve yapılan konfigürasyonlar, gerçek dünya projelerinde karşılaşılabilecek güvenlik ve oturum yönetimi ihtiyaçlarını karşılamak için iyi bir örnektir



