"use strict";
// import { PrismaClient } from "@prisma/client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// const prisma = new PrismaClient();
// async function insertUser(username: string, password: string, firstname: string, lastname: string) {
//   const res=await prisma.user.create({
//     data: {
//         email: username,
//         password,
//         firstname,
//         lastname
//     }
//   })
//   console.log(res);
// }
// insertUser("sksohail3390sk@gmail.com","12345", "Sohail", "Khan");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function updateUser(email_1, _a) {
    return __awaiter(this, arguments, void 0, function* (email, { firstname, lastname }) {
        const res = yield prisma.user.update({
            where: { email },
            data: {
                firstname,
                lastname
            }
        });
        console.log(res);
    });
}
updateUser("sksohail3390sk@gmail.com", {
    firstname: "Sk",
    lastname: "Khn"
});
