import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

export const requireAuth = (handler: NextApiHandler) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        // Check for authentication (e.g., session or token)
        // This is just a placeholder for actual authentication logic
        if (req.cookies.adminToken) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        return handler(req, res);
    };
};
