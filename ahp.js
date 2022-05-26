module.exports = {calculate}

fs = require('fs');
var {Blob} = require('buffer')

const ahp = require('ahp');


function calculate(dict){
    const ahpContext = new ahp();

    dict_matrix_variance = dict['matrix_variance'].replace(/[\[\]&]+/g, "").replace(/""/g, "0").replace(/[""]/g, "").split(",")
    names_of_params = dict['names_of_params'].replace(/[\[\]&]+/g, "").replace(/[""]/g, "").split(",")
    names_of_variance = dict['names_of_variance'].replace(/[\[\]&]+/g, "").replace(/[""]/g, "").split(",")
    dict_matrix_params = dict['matrix_params'].replace(/[\[\]&]+/g, "").replace(/""/g, "0").replace(/[""]/g, "").split(",")

    console.log(dict)
    let amount_of_params = parseInt(dict['amount_of_params'])
    let amount_of_variance = parseInt(dict['amount_of_variance'])

    
    
    let matrix_variance = {}
    let value = new Array()
    let count = 0
    for(let x = 0; x < amount_of_params; x++){
        value[x] = new Array()
        for (let y = 0; y < amount_of_variance; y++){
            // value[x][y] = new Array()
            for (let z = 0; z < amount_of_variance; z++){
                value[x][y] = parseFloat(dict_matrix_variance[count])
                count += 1
            }
        }
        matrix_variance[names_of_params[x]] = value
        
    }

    
    let matrix_params = new Array()
    let count_p = 0
    for(let x = 0; x < amount_of_params; x++){
        matrix_params[x] = new Array()
        for (let y = 0; y < amount_of_params; y++){
            matrix_params[x][y] = parseFloat(dict_matrix_params[count_p])
            count_p += 1
        }
        
    }


    console.log(names_of_variance)
    console.log(names_of_params)
    console.log(matrix_variance)
    console.log(matrix_params)

    //TODO dict с параметрами
    

    ahpContext.import({
        items: names_of_variance,
        criteria: names_of_params,
        criteriaItemRank: matrix_variance,
        criteriaRank: matrix_params
    });
    
    const output = ahpContext.run();
    
    let text = ""
    const analyticContext = ahpContext.debug();
    for(const key in analyticContext){
        text += `${key}: ${analyticContext[key]}`
    
    
}
console.log(text)
writeOnFile(text)

}


function writeOnFile(data){
    let filename = './a23.txt'
    fs.writeFile('result.txt', data, function (err) {
        if (err) return console.log(err);
        console.log('Hello World > result.txt');
      });
}