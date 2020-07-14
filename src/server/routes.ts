import * as express from 'express';
import db from './db';

const router = express.Router();

router.get('/api/chirps', async (req, res, next) => {
    try {
        let chirps = await db.Chirpr.all()
        res.json(chirps);
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
});

export default router;