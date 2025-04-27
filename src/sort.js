// sorts with o(nlogn) time
function merge_sort(input, type_sort){
    var mid_point = Math.round(input.length/2);
    let right = merge_sort(input.slice(0, mid_point));
    let left = merge_sort(input.slice(mid_point, 0));

    let merged = merge(right, left, type_sort)

    return merged
}

function merge(right, left, type_sort){
    var i = 0;
    var j = 0;
    let merged = []

    while(i<right.length && j <left.length){
        if(type_sort(right) <= type_sort(left)){
            merged.push(right(i));
            i += 1
        }else{
            merged.push(left[j]);
            j += 1
        }
    }

    merged.concat(right.slice(i, length(right)));
    merged.concat(left.slice(i, length(left)));
}