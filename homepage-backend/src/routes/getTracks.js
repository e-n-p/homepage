import { db } from '../../database';


export const getTracksRoute = {
    method: 'Get',
    path: '/api/tracks',
    handler: async (req, h) => {
        const { results } = await db.query(
            'SELECT * FROM tracks'
        );
        return results;
    }
}