
async function helper(features,backend) {
    try {
        const response = await fetch(backend, {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                stnID: features[0], 
                month: features[1],
                eto: features[2],
                precip: features[3],
                solRad: features[4],
                avgVap: features[5],
                maxAir: features[6],
                minAir: features[7],
                avgAir: features[8],
                maxHum: features[9],
                minHum: features[10],
                avgHum: features[11],
                avgWind: features[12],
                avgSoil: features[13]
            })
        });
        if (response.status === 200) {
            console.log('here')
        }
        let tempData = await response.json();
        return tempData;
    } 
    catch (err) {
        console.log(err);
    }
}

async function getWildfirePrediction(features) {
    const host = window.location.hostname;
    const backend = 'http://'+host+':5000/getWildfirePrediction';
    return helper(features,backend);
}

export {getWildfirePrediction};