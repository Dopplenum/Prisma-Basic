# Prisma-Basic
Done the basic CRUD operations using Prisma popular ORM for node js
Prisma is a Node.js project that demonstrates basic CRUD (Create, Read, Update, Delete) operations using Prisma ORM.

Installation Instructions:
Initialize an empty Node.js project:
npm init -y

Add dependencies:
npm install prisma typescript ts-node @types/node --save-dev

Initialize TypeScript:
npx tsc --init
Change rootDir to src.
Change outDir to dist.
Initialize a fresh Prisma project:
bash
npx prisma init
Choose your desired database (MySQL, PostgreSQL, MongoDB).
Update prisma/schema.prisma to configure the database connection URL.
Defining Your Data Model:
Prisma expects you to define the shape of your data in the schema.prisma file. For example, if your application will have a User table:

prisma
model User {
  id         Int      @id @default(autoincrement())
  username   String   @unique
  password   String
  firstName  String
  lastName   String
}

Generate Migrations:
To create migration files and update the database schema, run:

bash
npx prisma migrate dev --name Initialize the schema
Generating Prisma Client:
To generate the Prisma client:

bash
npx prisma generate
