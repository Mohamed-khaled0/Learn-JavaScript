getData("./article.json")
    .then((result) => {
        result.length = 5;
        return result;
    })
    .then((result) => {
        for(let i = 0; i < result.length; i++){
            let div = document.createElement("div");

            let title = document.createElement("h3");
            let titleText = document.createTextNode(result[i].title);
            title.appendChild(titleText);

            let description = document.createElement("p");
            let descriptionText = document.createTextNode(result[i].description);
            description.appendChild(descriptionText);

            div.appendChild(title);
            div.appendChild(description);

            document.body.appendChild(div);
        }
    }).catch((rej) => {
        return(rej);
    })



async function fetchData(){
  try{
      let myData = await fetch("./article.json");
      let data = await myData.json();
      data.length = 5;
      for(let i = 0; i < data.length; i++){
          let div = document.createElement("div");

          let title = document.createElement("h3");
          let titleText = document.createTextNode(data[i].title);
          title.appendChild(titleText);

          let description = document.createElement("p");
          let descriptionText = document.createTextNode(data[i].description);
          description.appendChild(descriptionText);

          div.appendChild(title);
          div.appendChild(description);

          document.body.appendChild(div);
      }
  }catch(error){
      console.log("No Data Found");
  }
}

fetchData();


