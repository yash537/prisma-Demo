import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(
  email: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      email,
      password,
      firstName,
      lastName,
    },
  });

  console.log(res);
}

// insertUser("luffy@gmail.com", "Zoror1410", "lufyy", "adshka");

interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  email: string,
  { firstName, lastName }: UpdateParams
) {
  const res = await prisma.user.update({
    where: { email: email },
    data: {
      firstName,
      lastName,
    },
  });

  console.log(res);
}

// updateUser("yashvidjaid@gmail.com", { firstName: "luffy", lastName: "monkey" });

async function deleteUser(email: string) {
  const res = await prisma.user.delete({
    where: { email: email },
  });

  console.log(res);
}
// deleteUser("sdkgadhjas@gmail.com");

async function getUsers() {
  const res = await prisma.user.findMany({
    select: {
      email: true,
      firstName: true,
      lastName: true,
      password: true,
    },
  });
  console.log(res);
}

getUsers();
