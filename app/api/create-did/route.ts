// pages/api/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { runDoc } from '../../scripts/setDID'; // Assurez-vous que le chemin est correct

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const result = runDoc();
      res.status(200).json({ message: result });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while executing the script.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
