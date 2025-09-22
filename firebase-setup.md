# 🔥 Configuración de Firebase para Leaderboard Global

## Paso 1: Crear Proyecto Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en "Crear proyecto"
3. Nombra tu proyecto (ej: "the-higher-notes")
4. Acepta los términos y crea el proyecto

## Paso 2: Configurar Firestore Database

1. En el panel izquierdo, haz clic en "Firestore Database"
2. Haz clic en "Crear base de datos"
3. Selecciona "Comenzar en modo de prueba" (para desarrollo)
4. Elige una ubicación cercana a tus usuarios

## Paso 3: Obtener Configuración

1. Ve a "Configuración del proyecto" (ícono de engranaje)
2. Baja hasta "Tus apps" y haz clic en "Web" (</>)
3. Registra tu app con un nombre
4. Copia la configuración que aparece

## Paso 4: Actualizar el Código

Reemplaza esta sección en `index.html`:

```javascript
const firebaseConfig = {
    apiKey: "TU_API_KEY_AQUI",
    authDomain: "tu-proyecto.firebaseapp.com",
    projectId: "tu-proyecto-id",
    storageBucket: "tu-proyecto.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdefghijklmnop"
};
```

## Paso 5: Configurar Reglas de Seguridad

En Firestore Database > Reglas, usa estas reglas para desarrollo:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir lectura y escritura en la colección users
    match /users/{userId} {
      allow read, write: if true;
    }
  }
}
```

## ⚠️ Importante para Producción

- Las reglas actuales son para desarrollo
- En producción, implementa autenticación adecuada
- Hashea las contraseñas antes de guardarlas
- Implementa validación del lado del servidor

## 🎯 Beneficios del Leaderboard Global

✅ **Compartido entre dispositivos**: Todos ven los mismos usuarios
✅ **Tiempo real**: Se actualiza automáticamente
✅ **Escalable**: Soporta miles de usuarios
✅ **Gratis**: Plan gratuito de Firebase es generoso
✅ **Backup automático**: Los datos están seguros en la nube

## 🔄 Fallback Local

Si Firebase no está disponible, el sistema automáticamente usa localStorage como respaldo.
