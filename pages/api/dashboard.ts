import { requireAuth } from '../../lib/auth';

export default requireAuth(async (req, res) => {
    // Your API logic here
    res.status(200).json({ message: 'Welcome to the admin dashboard' });
});
