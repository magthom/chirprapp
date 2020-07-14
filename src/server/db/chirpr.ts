import { Connection } from './index';

export const all = async () => {
    return new Promise((resolve, reject) => {
        Connection.query(`SELECT 
            chirps.*,
            users.name
        FROM chirps
        JOIN users ON users.id = chirps.userid
        ORDER BY chirps.id DESC`, 
        (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        }
        );
    });
};

export default {
    all
};