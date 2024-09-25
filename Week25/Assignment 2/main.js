let request = new XMLHttpRequest();
request.open("GET" , "./articles.json",true);
request.send();

request.onreadystatechange = function (){
if(this.readyState=== 4 && this.status === 200){
  console.log( request.responseText);
  console.log("Data Loaded");
}
};


