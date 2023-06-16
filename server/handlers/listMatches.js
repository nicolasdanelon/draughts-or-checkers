import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async (req, res) => {
  try {
    const matches = await prisma.match.findMany({
      select: {
        id: true,
        created_at: true,
        Board: {
          select: {
            turn: true,
          },
        },
      },
    });

    const flattenedMatches = matches.map((match) => ({
      ...match,
      turn: match.Board?.turn,
    }));

    flattenedMatches.forEach((match) => {
      delete match.Board;
    });

    res.json(flattenedMatches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch matches' });
  }
};
