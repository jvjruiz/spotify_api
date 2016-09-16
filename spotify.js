var getFromApi = function(endpoint, query) {
    var url = 'https://api.spotify.com/v1/' + endpoint;
        
    var queryString = Qs.stringify(query);
    if (queryString) {
        url += '?' + queryString;
    };

    return fetch(url).then(function(response) {
        if (response.status < 200 || response.status >= 300) {
            return Promise.reject(response.statusText);
        }
        return response.json();
    });
};


var artist ;
var getArtist = function(name) {
    var query = {
        q: name,
        limit: 1,
        type: 'artist'
    }

    return getFromApi('search', query).then(function(response){
        artist = response.artists.items[0];
        console.log(artist)
        return artist
    }).catch(function(err){
        console.error("This is the error: " + err);
    });
    
};

