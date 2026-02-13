
# 🚀 Projeto Laravel + Vue + Bootstrap + NativePHP (Desktop + Mobile)

Template base profissional para desenvolvimento multiplataforma real usando:

- Laravel (Backend)
- Vue 3 (Frontend)
- Bootstrap 5 (UI)
- Vite (Build)
- NativePHP Desktop
- NativePHP Mobile (Android/iOS)

Com essa stack você consegue gerar:

✔ Sistema Web
✔ Aplicativo Desktop
✔ Aplicativo Android
✔ Aplicativo iOS

Tudo com um único código-fonte.

---

# 📦 Requisitos

- PHP 8.2+
- Composer
- Node 18+
- NPM
- Git
- Banco de dados
- 7-Zip instalado

Android:
- Android Studio
- SDK Android
- JDK 17
- JAVA_HOME configurado

---

# ⚙️ Instalação

composer create-project laravel/laravel app
cd app

npm install
npm run dev

---

# 🖥 Desktop

composer require nativephp/electron
php artisan native:install
php artisan native:serve

Build:
php artisan native:build

---

# 📱 Mobile

composer require nativephp/mobile -W
php artisan native:install

Rodar:
php artisan native:run

Build APK:
php artisan native:build android

Release:
php artisan native:build android --release

---

# ⚠️ Erros comuns

JAVA não encontrado:
Instalar JDK 17 e configurar JAVA_HOME.

javac não reconhecido:
Adicionar %JAVA_HOME%\bin ao PATH.

Gradle sem JDK:
Criar arquivo:

nativephp/android/gradle.properties

Conteúdo:

org.gradle.java.home=C:\\Program Files\\Java\\jdk-17

Emulador não inicia:
Criar dispositivo no Android Studio.

Tela branca:
npm run build

Dependência travada:
composer require nativephp/mobile -W

---

# 🧠 Arquitetura

Laravel → Backend  
Vue → Frontend  
NativePHP → Container multiplataforma

---

# 🏆 Resultado

Web ✔  
Desktop ✔  
Android ✔  
iOS ✔

---

Licença MIT
