export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        const db = await dbPromise;
        const admin = await db.get('SELECT * FROM admins WHERE username = ?', [username]);

        if (admin) {
            console.log(`Admin found: ${admin.username}`);
            const isPasswordMatch = await bcrypt.compare(password, admin.password);
            console.log(`Password match: ${isPasswordMatch}`);

            if (isPasswordMatch) {
                res.status(200).json({ message: 'Login successful' });
            } else {
                res.status(401).json({ message: 'Invalid username or password' });
            }
        } else {
            console.log('Admin not found');
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
