//Answer for question no.2
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    for(i=0;i<res.length;i++)
        console.log(res[i].flag);
    }

//Answer for question no.3
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
    for(i=0;i<res.length;i++)
        console.log(res[i].capital[0]+" "+res[i].region+" "+res[i].subregion+" "+res[i].population)
    }
   