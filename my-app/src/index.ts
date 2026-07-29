import { db, listUsers } from "./prisma/users";

const sampleUser = {
  email: "first.user@prisma.io",
  username: "first-user",
  name: "First User",
};

async function main() {
  const existingUser = await db.orm.User.where({ email: sampleUser.email }).first();
  if (!existingUser) {
    await db.orm.User.createCount([sampleUser]);
  }

  const user = await db.orm.User.where({ email: sampleUser.email }).first();
  const users = await listUsers();

  console.log(`Prisma Next is ready. Found ${users.length} user${users.length === 1 ? "" : "s"}.`);
  console.log(user);
}

try {
  await main();
} catch (error) {
  console.error("Prisma Next query failed.");
  console.error("Emit the contract, set DATABASE_URL, then apply migrations before running this script.");
  throw error;
} finally {
  await db.runtime().close();
}
