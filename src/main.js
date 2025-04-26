'use strict'

const json_headers = ["ident", "type", 
    "name", "latitude_deg", "longitude_deg",
    "continent", "iso_country", "iso_region"];


function hasher(input){
    let hashed_str = ""
    for(let i=0; i <input.length; i++){
        for(let j=0; j<input[i].length; j++){
            hashed_str += String(input[i].charCodeAt(j))
        }
    }
    return hashed_str
}

function hash_map_value(index, data){
    let airport_characteristics = []
    for(let i = 0; i < json_headers.length; i++){
        airport_characteristics.push(data[json_headers[i]][index])
    }
    return airport_characteristics
}

async function hash_map(json_file){
    let hash_dict = {}

    const response = await fetch(json_file);
    const data = await response.json()

    for(let i = 0; i < data[json_headers[0]].length; i++){
        var value = hash_map_value(i, data)
        hash_dict[hasher(value)] = value
    }
    return hash_dict; 
}

function search(input){
   
}      

// hash_map('../data/data.json').then(x => {
//     console.log(x[0]);
// })
