import { NextApiRequest,NextApiResponse } from "next";
import { open } from "sqlite";
import  sqlite3  from "sqlite3";

const dbPromise = open({
    filename: './db/database.db',
    driver: sqlite3.Database
});
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const db = await dbPromise;
            const news = await db.all('SELECT * FROM news');
            res.status(200).json(news);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching courses' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
