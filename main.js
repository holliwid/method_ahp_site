

function pass_amount_of_parametrs(){
    let amount_of_params = document.getElementById('number_of_params').value
    localStorage.setItem('amount_of_params', amount_of_params)
}


function add_params_fields(){
    container_for_params = document.getElementById('container_for_params')

    console.log(localStorage.getItem('amount_of_params'))
    for(x = 0; x < parseInt(localStorage.getItem('amount_of_params')); x++){
        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Введте название параметра";
        input.className = "input"; // set the CSS class
        container_for_params.appendChild(input);
    }
}


function pass_name_of_params(){
    let names_of_params = []

    list_of_input_el = document.getElementsByClassName('input')
    console.log(list_of_input_el)

    for(let item of list_of_input_el){
        names_of_params.push(item.value)

    }

    localStorage.setItem('names_of_params', JSON.stringify(names_of_params))
}

function create_matrix_params(){
   let container = document.getElementsByClassName("container_matrix")[0]
   let amount_of_params = parseInt(localStorage.getItem('amount_of_params'))

    
   let con = document.createElement('div')
    con.classList.add('name_of_param')
   for(let x = 0; x < amount_of_params; x++){
    let lab = document.createElement("label")
    lab.textContent = JSON.parse(localStorage.getItem("names_of_params"))[x]
    con.appendChild(lab)
   }
   container.appendChild(con);



    for(let x = 0; x < amount_of_params; x++){
        let con = document.createElement('div')
        con.classList.add('container_ex_mat')
        

        let lab = document.createElement("label")
        lab.textContent = JSON.parse(localStorage.getItem("names_of_params"))[x]
        con.appendChild(lab)


        for(let y = 0; y < amount_of_params; y++){
            if (x == y){
                let input = document.createElement("input");
                input.type = "number";
                input.className = "input"; // set the CSS class
                input.readOnly = true
                input.value = '1'
                input.id = `${x}_${y}`
                con.appendChild(input);
            }
            else if (y > x){
                let input = document.createElement("input");
                input.type = "number";
                input.className = "input"; // set the CSS class
                input.readOnly = true
                input.value = '0'
                input.id = `${x}_${y}`
                con.appendChild(input);
            }
            else{
                let input = document.createElement("input");
                input.type = "number";
                input.className = "input"; // set the CSS class
                input.id = `${x}_${y}`
                input.setAttribute('onchange',`change_value(${x}, ${y})`)
                con.appendChild(input);
            }
        }
        container.appendChild(con);
    }
}

function change_value(x, y){
    let el_original = document.getElementById(`${x}_${y}`)
    let el = document.getElementById(`${y}_${x}`)

    el.value = 1/el_original.value

    console.log(el)
}


function pass_value_parametrs(){
    let amount_of_params = parseInt(localStorage.getItem('amount_of_params'))
    param_matrix = Array(amount_of_params)
    console.log(param_matrix.length)


    for(let x = 0; x < amount_of_params; x++){
        param_matrix[x] = new Array(amount_of_params);
        let row = new Array()
        for(let y = 0; y < amount_of_params; y++){
            param_matrix[x][y] = document.getElementById(`${x}_${y}`).value
        }
    }

    localStorage.setItem('matrix_params', JSON.stringify(param_matrix))

}













/////////////////////////////// VARIANCE//////////////////////////

function pass_amount_of_variance(){
    let amount_of_variance = document.getElementById('number_of_variance').value
    localStorage.setItem('amount_of_variance', amount_of_variance)
}


function add_variance_fields(){
    container_for_params = document.getElementById('container_for_params')

    console.log(parseInt(localStorage.getItem('amount_of_variance')))
    console.log(123)
    for(x = 0; x < parseInt(localStorage.getItem('amount_of_variance')); x++){
        console.log(x)
        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Введте название параметра";
        input.className = "input"; // set the CSS class
        container_for_params.appendChild(input);
    }
}


function pass_name_of_variance(){
    let names_of_variance = []

    list_of_input_el = document.getElementsByClassName('input')
    console.log(list_of_input_el)

    for(let item of list_of_input_el){
        names_of_variance.push(item.value)

    }

    localStorage.setItem('names_of_variance', JSON.stringify(names_of_variance))
}


function create_matrix_variance(){
    let container = document.getElementsByClassName("container_matrix")[0]
    let len_of_names_of_variance = localStorage.getItem('amount_of_variance')
    console.log(parseInt(localStorage.getItem('amount_of_params'))+'   ododo')

    for(let z = 0; z < parseInt(localStorage.getItem('amount_of_params')); z++){

        let con_mat = document.createElement('div')
        con_mat.classList.add('container_ex_mat')


        let lab = document.createElement("label")
        lab.textContent = `${JSON.parse(localStorage.getItem("names_of_params"))[z]}`
        con_mat.appendChild(lab)
        


        for(let x = 0; x < len_of_names_of_variance; x++){
            let con = document.createElement('div')

            
            let lab = document.createElement("label")
            lab.textContent = JSON.parse(localStorage.getItem("names_of_variance"))[x]
            con.appendChild(lab)

            
            for(let y = 0; y < len_of_names_of_variance; y++){
                if (x == y){
                    let input = document.createElement("input");
                    input.type = "number";
                    input.className = "input"; // set the CSS class
                    input.readOnly = true
                    input.value = '1'
                    input.id = `${x}_${y}_${z}`
                    con.appendChild(input);
                }
                else if (y > x){
                    let input = document.createElement("input");
                    input.type = "number";
                    input.className = "input"; // set the CSS class
                    input.readOnly = true
                    input.value = '0'
                    input.id = `${x}_${y}_${z}`
                    con.appendChild(input);
                }
                else{
                    let input = document.createElement("input");
                    input.type = "number";
                    input.className = "input"; // set the CSS class
                    input.id = `${x}_${y}_${z}`
                    input.setAttribute('onchange', `change_value_variance(${x},${y},${z})`)
                    con.appendChild(input);
                }
            }
            con_mat.appendChild(con);
        }
        container.appendChild(con_mat);
    }
}


function change_value_variance(x, y, z){
    console.log(`${x}_${y}_${z}`)
    let el_original = document.getElementById(`${x}_${y}_${z}`)
    let el = document.getElementById(`${y}_${x}_${z}`)

    el.value = 1/el_original.value

    console.log(el)
}


function pass_value_variance(){
    let len_of_names_of_variance = localStorage.getItem('amount_of_variance')
    let param_matrix = new Array(localStorage.getItem('amount_of_params'));



    for(let x = 0; x < parseInt(localStorage.getItem('amount_of_params')); x++){
        param_matrix[x] = new Array(len_of_names_of_variance);
        for(let y = 0; y < len_of_names_of_variance; y++){
            param_matrix[x][y] = new Array(len_of_names_of_variance)
            for(let z = 0; z < len_of_names_of_variance; z++){
                param_matrix[x][y][z] = document.getElementById(`${z}_${y}_${x}`).value
            }
        }
    }


    localStorage.setItem('matrix_variance', JSON.stringify(param_matrix))

    for(let z = 0; z < parseInt(localStorage.getItem('amount_of_params')); z++){
        for(let x = 0; x < len_of_names_of_variance; x++){
            for(let y = 0; y < len_of_names_of_variance; y++){
                console.log(param_matrix[z][x][y])
            }
        }
    }
}

function request_matrix(){
    var xhr = new XMLHttpRequest();
    let data = localStorage
    var url = "result";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    data = JSON.stringify(data);
    xhr.send(data);

}