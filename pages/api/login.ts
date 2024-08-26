import type { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const dbPromise = open({
    filename: './db/database.db',
    driver: sqlite3.Database,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        try {
            const db = await dbPromise;
            const admin = await db.get('SELECT * FROM admins WHERE name = ?', [username]);

            console.log('Admin data:', admin); // Log admin data

            if (admin) {
                // Directly compare plain text password
                if (password === admin.password) {
                    return res.status(200).json({ message: 'Login successful' });
                } else {
                    return res.status(401).json({ message: 'Invalid username or password' });
                }
            } else {
                return res.status(401).json({ message: 'Invalid username or password' });
            }
        } catch (error) {
            console.error('Error during login:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
