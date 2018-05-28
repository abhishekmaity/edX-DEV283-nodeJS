const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname, 'customer-data.csv'), (err, data) => {
    if (err) throw err;
    const lines = data.toString().split('\r\n')
    const header = lines[0]
    const fields = header.split(',')
    lines.shift();
    const items = lines.map(line => {
        const result = {};
        const values = line.split(',')
        for (let i = 0; i < fields.length; i++) {
            const field = fields[i]
            const value = values[i]
            result[field] = value
        }
        return result;
    });
    fs.writeFile(path.join(__dirname, 'customer-data.json'), JSON.stringify(items), (err) => {
        if (err) throw err;
        console.log('The file has been converted!');
    });
});