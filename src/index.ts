// INSERT
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstname: string, lastname: string) {
  const res=await prisma.user.create({
    data: {
        email: username,
        password,
        firstname,
        lastname
    }
  })
  console.log(res);
}

insertUser("sksohail3390sk@gmail.com","12345", "Sohail", "Khan");


// UPDATE

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
    firstname: string;
    lastname: string;
}

async function updateUser(email: string, {
    firstname,
    lastname
}: UpdateParams) {
    const res=await prisma.user.update({
        where:{email},
        data:{
            firstname,
            lastname
        }
    })
    console.log(res);
}

updateUser("sksohail3390sk@gmail.com",{
    firstname:"Sk",
    lastname:"Khn"
})

// DELETE

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function deleteUser(username: string) {
  const res = await prisma.user.delete({
    where: { username }
  });
  console.log(res);
}

deleteUser("sksohail3390sk@gmail.com");


//READ
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser(username: string) {
  const user = await prisma.user.findFirst({
    where: {
        email: username
    }
  })
  console.log(user);
}

getUser("sksohail3390sk@gmail.com");