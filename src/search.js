'use strict'
// #TODO: make hash table for each category -- specific to a categroy 
// disadvantages: takes higher time complexity when creating map; advantages: easy search after (o(1))
const json_headers = ["ident", "type", 
    "name", "latitude_deg", "longitude_deg",
    "continent", "iso_country", "iso_region"];


async function load_json_file(){
    const response = await fetch(json_file);
    const data = await response.json()

    return data
}

function hash_map_value(index, data){
    let airport_characteristics = []

    for(let i = 0; i < json_headers.length; i++){
        airport_characteristics.push(data[json_headers[i]][index])
    }
    return airport_characteristics
}

function hash_map(data, type){
    /*
        creates a hash table based on the type of search (i.e. type == 'name')

        Preconditions: type in json_headers 
    */
    let hash_dict = {} 

    for(let i = 0; i < data[json_headers[0]].length; i++){
        var value = hash_map_value(i, data)
        if(data[type][i] in hash_dict){
            hash_dict[data[type][i]].append(value)
        }else{
            hash_dict[data[type][i]] = [value]
        }
    }
    return hash_dict; 
}

function recc_search(input, num_airports, keys){
    /*
        Return at most <num_airports> of reccomended airports based on the given
        input 

        Preconditions: 
        - keys are sorted 
        - num_airports <= keys.length
    */
    
    var right_most_key = keys[keys.length - 1]

    if(!input){
        return []
    }

    if((input <= right_most_key.slice(0, input.length)) && keys.length <= num_airports){
        return keys
    }

    let lst_airports = recc_search(input, num_airports, keys.slice(0, Math.round(keys.length/2)))
    return lst_airports
}

function search(map, input){
   if(input in map){
        return input
   }else{
        let sorted_keys = merge_sort(Object.keys(map))
        return recc_search(map, 5, sorted_keys)
   }
}      

//TODO integrate with input 
function main_search(){

}
// hash_map('../data/data.json').then(x => {
//     console.log(x[0]);
// })

