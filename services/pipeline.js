const gov = require('./government');
const constants =  require('./constants');
const pipe = {
    oxygen: 0,
    hydrogen: 0,
    limit: constants.pipelineLimit,
    isFlowing: false,
    content: '',
    incoming: () => {
        if((pipe.oxygen+pipe.hydrogen) < (pipe.limit - 3)){
            pipe.content.concat(gov.getHydrogen());
            pipe.content.concat(gov.getHydrogen());
            pipe.hydrogen+=2;
            pipe.content.concat(gov.getOxygen());
            pipe.oxygen++;
        }
    },
    intervalId: '',
    generateWater: () => {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(pipe.oxygen > 0 && pipe.hydrogen > 1) {
                    pipe.oxygen--;
                    pipe.hydrogen = pipe.hydrogen - 2;
                    resolve(constants.water)
                } else {
                    reject('shortage')
                }
            }, constants.waterGenerationTime*1000)
        })
    },
    changeStatus: (s) => {
        if(s !== pipe.isFlowing){
            pipe.isFlowing = s;
            if(s === false){
                clearInterval(pipe.intervalId);
            } else {
                pipe.intervalId = setInterval(pipe.incoming,0)
            }
        }
    }
}

module.exports = pipe;