'use strict';
var result;

var getJSON = function(url) {
    var xmlHttp = new XMLHttpRequest();

    //what happen on status change
    xmlHttp.onreadystatechange = function (){
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            //read the text
            result = xmlHttp.responseText;
        }
    }

    // send the request
    xmlHttp.open('get', url, false);
    xmlHttp.send();
    console.log(result);
    return result;

};

var jsonData = JSON.parse(getJSON('http://test.competa.com/js-movies-test/data/movies-json.php')).data[0];
var text = '';

for (var i = 0; i < jsonData.assets.length - 1; i++) { 
    text += '<img src="' + jsonData.assets[i].img + '" class="img">';
}

//console.log(text);
document.getElementById("gallery").innerHTML = text;
