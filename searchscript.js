$("#searchBtn").click(function(){
  var artistName = $("#inputBox").val();
  var queryURL = "https://api.genius.com/search?q="+artistName+"&access_token=Qkx5o7R9EGHd1mf-Xx_jSHirZRR7IliudsMVmNtfCq3cV_vvpVvM9a1UE-2fe1SX";
  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function(response) {
    var artistName = response.response.hits[0].result.primary_artist.name
    $("#artistName").append(artistName);
    console.log(response);
    console.log(response.response.hits[0].result.primary_artist.name);
    var artistName = response.response.hits[0].result.primary_artist.name
    var song1 = response.response.hits[0].result.full_title
    $("#artistInfo").append(song1 + " by " + artistName);
    
    var artistPic = response.response.hits[0].result.primary_artist.header_image_url;
    var img = $('<img />', { 
        id: 'artistImage',
        src: artistPic,
      });
      img.appendTo($('#artistImage'));

  });
  });
  