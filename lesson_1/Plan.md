- npm install -g typescript _Глобальна установка TypeScript_
- tsc --init _Створення файлу налаштувань `tsconfig.json`_

**tsconfig.json**

```json
{
  "compilerOptions": {
    "rootDir": "./src", *Шлях, звітдки typescript буде брати дані для обробки*
    "outDir": "./dist", *Шлях, куди будуть зберігатися наші перетворені в JS файли*
    "allowJs": false,
    "allowSyntheticDefaultImports": true,
    "emitDecoratorMetadata": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "lib": ["ES2021", "dom"], *dom - бібліотека, що підтримує `console.log`*
    "module": "es2020", *Застосовуємо роботу з модулями 2020+ року*
    "moduleResolution": "node",
    "preserveConstEnums": true,
    "skipLibCheck": true,
    "strictNullChecks": true,
    "target": "es2019" *Слідкує, щоб ми використовували синтаксис JS від 2019+*
  },
  "include": ["**/*.ts"] *Вказує, щоб працювати лише з ts-файлами*
}
```

- tsc
- tsc -w _Запускає `typescipt` і слідкує за змінами_
- базові типи
- Складні типи
- any _Будь-який тип даних_
- unknown
- Enum
- Union Type
- Intersection Type
- return type
- void
- function as type
- optional params in type
- as operator
- Index Properties
