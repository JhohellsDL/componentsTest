# 🚀 **components_test_jhohells**  
📦 **Librería de componentes en React Native**  

Una librería de componentes de prueba para aplicaciones móviles en **React Native**.

---

## 📥 **Instalación**  
Instala la librería usando **npm** o **yarn**:  

### Con npm:
```sh
npm install components_test_jhohells
```

### Con yarn:
```sh
yarn add components_test_jhohells
```

---

## 🚀 **Uso**  
Importa y usa el componente `RideButton` en tu aplicación:

```tsx
import React from 'react';
import { View } from 'react-native';
import { RideButton } from 'components_test_jhohells';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <RideButton title="Presionar" onPress={() => alert('¡Botón presionado!')} />
    </View>
  );
};

export default App;
```

📌 **Nota:** Asegúrate de haber instalado **React Native** en tu proyecto antes de usar la librería.

---

## 📖 **Documentación**  
### 🎨 **Props de RideButton**  
| Propiedad | Tipo | Descripción |
|-----------|------|------------|
| `title` | `string` | Texto que se mostrará en el botón |
| `onPress` | `() => void` | Función que se ejecuta al presionar el botón |
| `color?` | `string` | (Opcional) Color de fondo del botón (por defecto: `"blue"`) |

### 🎯 **Ejemplo con color personalizado:**
```tsx
<RideButton title="Ver más" color="red" onPress={() => console.log('Clic en Ver más')} />
```

---

## 🛠 **Contribuir**  
Si deseas contribuir a este proyecto, revisa la [guía de contribución](CONTRIBUTING.md).

### ⚡ Pasos para desarrollar localmente:
1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/tu-usuario/components_test_jhohells.git
   ```
2. **Instala las dependencias:**
   ```sh
   npm install
   ```
3. **Prueba los cambios antes de publicarlos:**
   ```sh
   npm run build
   ```

---
