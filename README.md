# JWT Tabanlı Giriş Sistemi (Spring Boot + HTML)
Bu proje, Veritabanı Yönetim Sistemleri (VTYS) dersi kapsamında geliştirilmiş bir web uygulamasıdır. Uygulama, kullanıcıların sisteme kayıt olup giriş yapabildiği, JWT (JSON Web Token) ile kimlik doğrulaması yapan basit ve profesyonel bir çözüm sunmaktadır. Frontend kısmı sade HTML/CSS/JS ile, backend kısmı ise Spring Boot (Java) ve H2 bellek içi veritabanı ile geliştirilmiştir.

## Teknolojiler

Backend :	Java 17, Spring Boot, JPA
Güvenlik : Spring Security, JWT
Veritabanı : H2 In-Memory DB
Frontend	: HTML, CSS, Vanilla JavaScript
Build Tool	: Maven

## Projeyi Çalıştırma
### Gereksinimler
- Java 17

- Maven 3.8+

### Çalıştırma Adımları
1. Projeyi GitHub'dan klonlayın:

bash
"git clone https://github.com/kullaniciAdi/jwt-login-vtys.git"
2. Proje dizinine gidin:

bash
"cd jwt-login-vtys"
3. Spring Boot uygulamasını çalıştırın:

bash
"mvn spring-boot:run"
4. Uygulama arayüzüne tarayıcı üzerinden şu link ile erişebilirsiniz:

arduino
"http://localhost:8080"
5. H2 Console için şu URL'yi kullanabilirsiniz:

bash
"http://localhost:8080/h2-console"
"JDBC URL: jdbc:h2:mem:testdb"
## Özellikler
- Kullanıcı kayıt olma (Ad, Soyad, E-posta, Şifre)

- Giriş yapma (JWT token alma)

- JWT token üretimi ve süresi (örn. 60 saniye)

- Token tarayıcıda saklanır (localStorage)

- Token süresi dolunca kullanıcı uyarılır

- Token süresi ölçülür ve süre bitince geçersiz olur

- Sayfa yenilense bile geçerli token varsa oturum korunur

## API Endpoint'leri

POST : /api/auth/register	=> Kullanıcı kaydı
POST	/api/auth/login => 	Giriş + JWT token

## Proje Yapısı

src
├── main
│   ├── java/com/example/jwtlogin
│   │   ├── config/           → Güvenlik ayarları (SecurityConfig)
│   │   ├── controller/       → API kontrolcüsü (AuthController)
│   │   ├── model/            → Kullanıcı nesnesi (User)
│   │   ├── repository/       → Veritabanı erişimi (UserRepository)
│   │   ├── security/         → JWT token aracı (JwtTokenUtil)
│   │   └── service/          → İş mantığı (AuthService)
│   └── resources
│       ├── static/           → Frontend (index.html, script.js, style.css)
│       └── application.properties
## Konfigürasyon (application.properties)

server.port=8080
spring.datasource.url=jdbc:h2:mem:testdb
spring.h2.console.enabled=true
spring.jpa.hibernate.ddl-auto=update
jwt.secret=your-secret-key-here-must-be-at-least-32-characters-long
jwt.expiration=60
## Güvenlik ve JWT
Bu projede güvenlik için Spring Security kullanılmıştır. Kullanıcıların sisteme güvenli bir şekilde giriş yapabilmesi için JWT (JSON Web Token) kullanılmaktadır. JWT, kullanıcının kimliğini doğrulamak için şifrelenmiş bir token oluşturur ve bu token, kullanıcının her isteğiyle birlikte gönderilir.

JWT token'ın süresi belirli bir süreyle sınırlıdır (örneğin 60 saniye). Token süresi dolduğunda kullanıcı yeniden giriş yapmalıdır.

## Ekstra Özellikler
- Kullanıcılar kayıt olduktan sonra JWT token alabilir ve bu token ile sisteme giriş yapabilir.

- Frontend kısmı, kullanıcının token bilgisini localStorage'da saklar, böylece sayfa yenilense bile geçerli bir token varsa kullanıcı oturumunu devam ettirebilir.

- H2 Console, veritabanı sorguları ve test verileri için kullanılabilir.

## Sonuç
Bu proje, kullanıcıların güvenli bir şekilde sisteme kayıt olup giriş yapmalarını sağlayan bir JWT tabanlı giriş sisteminin temel işlevlerini yerine getirmektedir. Kullanıcı kaydı ve giriş işlemleri başarılı bir şekilde çalışmakta, kullanıcıların giriş yaptıktan sonra oturumları JWT token ile doğrulanmaktadır. Token süresi dolduğunda kullanıcıya uyarı verilmektedir. Bu özellik, uygulamanın güvenliğini artırarak yalnızca geçerli token ile erişime izin verir. Ayrıca, sayfa yenilendiğinde dahi geçerli bir token varsa oturum korunur, bu da kullanıcı deneyimini iyileştirir.

Bu proje, JWT tabanlı kimlik doğrulamanın temellerini öğrenmek isteyenler için oldukça faydalıdır. Hem frontend hem de backend tarafında kullanılan teknolojiler ve yapılan konfigürasyonlar, gerçek dünya projelerinde karşılaşılabilecek güvenlik ve oturum yönetimi ihtiyaçlarını karşılamak için iyi bir örnektir.

