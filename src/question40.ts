// make a function that have an dictionary object


function make_album(artist_name:string, album_title:string, track = 0) {
     type album = {
        "Artist": "artist_name",
        "Title": "album_title",
        "tracks": "track"
    }
    return make_album;

}

var newAlbum = make_album("Nusrat Fateh Ali Khan", "Shahen shah");
console.log(newAlbum)
var newAlbum = make_album("Mehdi Hassan", "Ab ke hum bichde");
console.log(newAlbum)
var newAlbum = make_album("Tylor swift", "folklore",9);
console.log(newAlbum)