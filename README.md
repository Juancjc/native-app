# 🚀 Projeto Laravel + Vue + Bootstrap + NativePHP (Desktop + Mobile)

Este projeto é um **template base completo** para desenvolvimento multiplataforma usando:

- Laravel (Backend)
- Vue 3 (Frontend)
- Bootstrap 5 (UI)
- Vite (Build)
- NativePHP Desktop
- NativePHP Mobile

Com essa estrutura você consegue gerar:

✅ Sistema Web  
✅ Aplicativo Desktop (Windows/Mac/Linux)  
✅ Aplicativo Mobile (Android/iOS)

Tudo com **um único código-fonte**.

---

# 📦 Requisitos

Antes de instalar, tenha:

- PHP 8.2+
- Composer
- Node 18+
- NPM
- Git
- SQLite ou PostgreSQL/MySQL
- **7-Zip instalado (obrigatório para builds desktop)**

Download: https://www.7-zip.org/

Opcional (para mobile build real):
- Android Studio
- SDK Android

---

# ⚙️ Instalação Laravel

```bash
composer create-project laravel/laravel app
cd app
php artisan serve
```

---

# 🎨 Instalar Vue 3

```bash
npm install vue@3
```

resources/js/app.js

```js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

resources/js/App.vue

```vue
<template>
  <div class="container py-5">
    <h1 class="text-primary">Laravel + Vue funcionando 🚀</h1>
  </div>
</template>
```

resources/views/welcome.blade.php

```html
<div id="app"></div>
@vite('resources/js/app.js')
```

Rodar:

```bash
npm run dev
```

---

# 🎨 Bootstrap 5

```bash
npm install bootstrap
```

app.js

```js
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
```

---

# 🖥 NativePHP Desktop

```bash
composer require nativephp/electron
php artisan native:install
php artisan native:serve
```

Build:

```bash
php artisan native:build
```

---

# 📱 NativePHP Mobile

```bash
composer require nativephp/mobile -W
php artisan native:install
```

Modo rápido:

```bash
php artisan native:jump
```

Rodar dispositivo:

```bash
php artisan native:run
```

---

# 📁 Estrutura

```
app/
bootstrap/
config/
database/
native/
public/
resources/
routes/
vite.config.js
composer.json
package.json
```

---

# 🔌 Recursos Nativos

- Notificações
- Câmera
- Arquivos locais
- Microfone
- Biometria
- GPS
- Clipboard

Exemplo:

```php
use Native\Laravel\Facades\Notification;

Notification::title('Sucesso')
    ->message('Operação concluída')
    ->show();
```

---

# 🧪 Scripts

Dev web
```bash
php artisan serve
npm run dev
```

Desktop
```bash
php artisan native:serve
```

Mobile
```bash
php artisan native:run
```

---

# 🏗 Build Produção

```bash
npm run build
php artisan native:build
```

---

# ❗ Problemas comuns

Dependência composer:

```bash
composer require nativephp/mobile -W
```

Tela branca desktop:

```bash
npm run build
```

---

# 📊 Arquitetura

```
Laravel → Backend/API
Vue → Frontend
NativePHP → Container multiplataforma
```

---

# 🏆 Resultado

| Plataforma | Suporte |
|--------|--------|
Web | ✅ |
Desktop | ✅ |
Android | ✅ |
iOS | ✅ |

---

# ⭐ Licença

MIT
