var fs = require('fs');

module.exports = {

    async readTxt(req, res) {
        try {  
            var text = fs.readFileSync('src/testText.txt', 'utf8');
            res.send(text);
        } catch(e) {
            console.log('Ops, ocorreu o seguinte erro:', e.stack);
        }
    }
}