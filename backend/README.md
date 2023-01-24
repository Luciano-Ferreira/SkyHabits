## Technologies :rocket:
- prisma
- prisma-erd-generator
- tsx
- typescript
- fastify
- zod
- dayjs


![ERD](https://user-images.githubusercontent.com/46464433/214186234-ea06930e-6008-48ac-9429-dddf2a67224e.svg)

## ❓ How to install

### Prerequisites

Before you begin, you will need to have the following tools installed on your machine: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) and a package manager [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/). 

In addition, it is necessary to have the [back-end](https://github.com/Luciano-Ferreira/SkyHabits/tree/main/backend) running.

### ⏯️ Run application
In your terminal or bash

```bash
# Clone this repository
$ git clone https://github.com/Luciano-Ferreira/SkyHabits.git

# Access the directory
$ cd SkyHabits/server

# Install all dependencies
$ yarn 
# or
$ npm install

# run migrations
$ yarn prisma migrate dev

# if you want to see the data and tables more info in https://www.prisma.io/docs
$ yarn prisma studio

# Run the application in dev mode
$ yarn dev
# or 
$ npm run dev


```

## :memo: License
This project is under the MIT license. See the [LICENSE](https://github.com/Luciano-Ferreira/SkyHabits/blob/main/LICENSE) for more information.

---

Made with ♥ by Luciano Silva :wave: [Get in touch!](https://www.linkedin.com/in/lucianof-silva/)

### pt-BR
Regras de negócio:
A aplicação é feita para apenas um usuário por ora.
Tera uma entidade Habito
uma tabela para armzenar cada habito/task em cada dia
entao cada dia pode ter vários habitos e esses habitos podem estar completos ou não
Então temos a tabela/model:


Habit
Day
DayHabit

Criação do diagrama ERD
Criação de seeds (dados para popular o meu banco)
```bash
  yarn prisma db seed
```

plano cartesiano