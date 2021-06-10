
import fs from 'fs';

export function saveToDatabase(database, databaseFile = 'db.json') {
    fs.writeFile(databaseFile, JSON.stringify(database, null, 2), (error) => {
        if (error) {
            console.error(error.message);
            response.json({
                success: false,
                message: 'Database could not be written.',
            });
        }
    });
}


export function loadFromDatabase(databaseFile = 'db.json') {
    try {
        const database = fs.readFileSync(databaseFile);
        return JSON.parse(database);
    } catch (error) {
        console.error(error.message);
        return;
    }
}
