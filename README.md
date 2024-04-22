# Prisma-Basic

Prisma-Basic is a Node.js project demonstrating basic CRUD (Create, Read, Update, Delete) operations using the Prisma ORM for Node.js

## Installation

1. **Initialize a Node.js Project:**

   ```bash
   npm init -y

Add Dependencies:
npm install prisma typescript ts-node @types/node --save-dev

Initialize TypeScript:
npx tsc --init
Change rootDir to src.Change outDir to dist.

Initialize a fresh Prisma project:
bash
npx prisma init
Prisma lets you choose between several databases (MySQL, PostgreSQL, MongoDB).You can update prisma/schema.prisma to set up the desired database.
Defining Your Data Model
Prisma expects you to define the shape of your data in the schema.prisma file. For example, if your application will have a User table:

prisma
model User {
  id         Int      @id @default(autoincrement())
  username   String   @unique
  password   String
  firstName  String
  lastName   String
}
Generate Migrations
To create migration files and update the database schema, run:

bash
npx prisma migrate dev --name "Initialize the schema"
Generating Prisma Client
To generate the Prisma client, run:

bash
npx prisma generate
