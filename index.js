const pipeline = require('./services/pipeline');
const constants = require('./services/constants');
const express = require('express');
const app = express();
const port = 3000;
let waterCount = 0;
let content = '';
let intervalId;

app.get('/changeStatus/:s', function(req, res){
    const s = req.params.s;
    if(s === 'on'){
        console.log('Turning on the factory...')
        pipeline.changeStatus(true); //Turn on incoming;
        
        intervalId = setInterval(() => {
            for (let index = 0; index < constants.waterPerSecond; index++) {
                pipeline.generateWater().then(c => {
                    content.concat(c);
                    waterCount++;
                }, err => {
                    console.log(err)
                })
            }
            console.log(waterCount)
        }, 1000);
    } else if(s === 'off'){
        console.log('Turning off the factory...')
        clearInterval(intervalId);
        pipeline.changeStatus(true);
    }
    res.send('Ok')
    
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})