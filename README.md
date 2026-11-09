# ts-node-project
Міні-бібліотека на TypeScript, створена для демонстрації сучасного підходу до розробки пакетів: сувора типізація, підтримка подвійних модулів (CJS/ESM), валідація змінних оточення та дотримання стандартів якості коду (ESLint, Prettier, Husky, Commitlint).

---

Інструкції з запуску (у Git): npm i, npm run demo, npm run build.

---

Огляд кроків еволюції:

0.1.0 — прості функції з any.

0.2.0 — ті самі функції з базовими типами (сумісність збережено).

0.3.0 — нова функція зі складним типом (сумісність збережено).

0.4.0 — інтерфейси + groupBy<T> (сумісність збережено).

0.5.0 — клас Logger + .env/zod, formatNumber бере точність з APP_PRECISION (сумісність збережено).

1.0.0 — «стабілізація API»: експорти, посилений ESLint, збірка.

2.0.0 — breaking change: зміна сигнатури add на прийом number[] (порушено сумісність; у demo.ts видно, як виправляється виклик).

---

Приклади використання функцій:

1. Додавання чисел (add v2.0.0):

import { config } from './config.js';

console.log('sum(2.0 ok):', add([2, 3, 4]));

2. Формати тексту та чисел (capitalize, formatNumber):

   import { capitalize, formatNumber } from './index.js';

    console.log('capitalize(typed):', capitalize('hello'));
   
console.log('format(ok):', formatNumber(123.456)); // precision береться з APP_PRECISION.

   
4. Групування даних (groupBy, User)

import { groupBy, type User } from './index.js';

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

console.log('group ok:', groupBy(users, 'name'));

4. Логування (Logger, LogLevel)

import { Logger } from './index.js';

const logger = new Logger(config.LOG_LEVEL as LogLevel); // значення з .env пройшло валідацію zod.

logger.info('Старт програми');

logger.debug('Детальні дані');

   ---
   
Нотатка про .env: 

APP_PRECISION=3

LOG_LEVEL=debug

---

Посилання на теги релізів.


