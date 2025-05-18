function heuristic_haversine(lat1, lon1, lat2, lon2){
    /* Calculates the distance between two points 
    using heurisitc formula in km */ 
    R = 6378 //km
    lon1 = lon1*(Math.PI /180)
    lon2 = lon2*(Math.PI /180)
    lat1 = lat1*(Math.PI/180)
    lat2 = lat2*(Math.PI/180)

    long_delta = Math.abs(lon2 - lon1)
    lat_delta = Math.abs(lat2 - lat1)
    
    a = (Math.sin(lat_delta)/2)**2 + Math.cos(lat1)*Math.cos(lat2)*Math.sin(long_delta/2)**2
    c = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    distance = R*c

    return distance

}

function heurisitc_weighted(heuristic, total_heuristic){
    /* calculates the heuristic respective to the 
    distance from point A to point B (aka the weights of the edges)
    */
    return Math.round(heuristic/total_heuristic)
}