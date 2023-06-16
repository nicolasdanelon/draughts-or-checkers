import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async (req, res) => {
  const unixEpoc = Math.floor(Date.now() / 1000);
  const white_id = unixEpoc;
  const black_id = unixEpoc + 1

  try {
    const createdMatch = await prisma.match.create({
      data: {
        white_id: white_id.toString(),
        black_id: black_id.toString(),
      },
    });

    res.json(createdMatch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create match' });
  }
};
