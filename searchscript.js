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
    var song1 = response.response.hits[0].result.title_with_featured
    $("#hit1").append("1." + song1);
    var song2 = response.response.hits[1].result.title_with_featured
    $("#hit2").append("2." + song2);
    var song3 = response.response.hits[2].result.title_with_featured
    $("#hit3").append("3." + song3);
    var song4 = response.response.hits[3].result.title_with_featured
    $("#hit4").append("4." + song4);
    var song5 = response.response.hits[4].result.title_with_featured
    $("#hit5").append("5." + song5);
    var song6 = response.response.hits[5].result.title_with_featured
    $("#hit6").append("6." + song6);
    var song7 = response.response.hits[6].result.title_with_featured
    $("#hit7").append("7." + song7);
    var song8 = response.response.hits[7].result.title_with_featured
    $("#hit8").append("8." + song8);
    var song9 = response.response.hits[8].result.title_with_featured
    $("#hit9").append("9." + song9);
    var song10 = response.response.hits[9].result.title_with_featured
    $("#hit10").append("10." + song10);

    var artistPic = response.response.hits[0].result.primary_artist.header_image_url;
    var img = $('<img />', { 
        id: 'artistImage',
        src: artistPic,
      });
      img.appendTo($('#artistImage'));

  });
  });
  