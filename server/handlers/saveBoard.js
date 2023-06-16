import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async (req, res) => {
  try {
    const { white_id, black_id, content, turn } = req.body;

    const createdMatch = await prisma.match.create({
      data: {
        white_id,
        black_id,
        Board: {
          create: {
            content,
            turn,
          },
        },
      },
      include: {
        board: true,
      },
    });

    res.json(createdMatch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save match' });
  }
};
