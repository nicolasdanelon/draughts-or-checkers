import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async (req, res) => {
  try {
    const { id } = req.params;

    const match = await prisma.match.findUnique({
      where: { id: Number(id) },
      include: { Board: true },
    });

    if (!match) {
      return res.status(404).json({ error: 'Match not found' });
    }

    const board = match.Board;

    res.json(board);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch board' });
  }
};
