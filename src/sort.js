// sorts with o(nlogn) time
function merge_sort(input){

    if(input.length == 1 | input.length == 0){
        return input
    }
    var mid_point = Math.round(input.length/2);
    let right = merge_sort(input.slice(mid_point));
    let left = merge_sort(input.slice(0, mid_point));

    let merged = merge(right, left)

    return merged
}

function merge(right, left){
    var i = 0;
    var j = 0;
    let merged = []

    while(i < right.length && j < left.length){
        if(right[i] <= left[j]){
            merged.push(right[i]);
            i += 1
        }else{
            merged.push(left[j]);
            j += 1
        }
    }

    merged = merged.concat(right.slice(i, right.length));
    merged = merged.concat(left.slice(j, left.length));

    return merged
}

console.log(merge_sort([1,5,7,2,1,0,9]))
