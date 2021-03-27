//1.creating instance of xml http
var request=new XMLHttpRequest();
//2.create a connection//open a connection
request.open('Get','https://restcountries.eu/rest/v2/all',true)
request.send();
request.onload=function (){
    var data=JSON.parse(this.response);
    for(i=0;i<data.length;i++)
    {
        Name=" ";
        Name=(data[i].name)
    }
}
    var request=new XMLHttpRequest();  

    request.open('Get','http://api.openweathermap.org/data/2.5/weather?q=Name&appid=2c66401c31baba86c9895e30a7c2ecfe',true);
//3.send the request
    request.send();
//4.load the response this function is triggered only when the data is retrived
request.onload=function (){
    var data1=JSON.parse(this.response);
    for(q in data1 ){
        console.log(Name,":",data1.coord)
    }
}




