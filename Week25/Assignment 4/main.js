let xhrRequest = new XMLHttpRequest();
xhrRequest.open("GET", "./articles.json", true);
xhrRequest.send();

xhrRequest.onreadystatechange = function () {
  if (this.status == 200 && this.readyState == 4) {
    let articlesData = JSON.parse(this.response);
    console.log("Parsed Data:", articlesData);

    let articlesJSON = JSON.stringify(articlesData);
    console.log("JSON Stringified Data:", articlesJSON);

    let containerDiv = document.createElement("div");
    containerDiv.setAttribute("id", "articlesContainer");

    for (let i = 0; i < articlesData.length; i++) {
      let articleDiv = document.createElement("div");

      let titleElement = document.createElement("h2");
      let titleText = document.createTextNode(articlesData[i].title);
      titleElement.append(titleText);

      let descriptionElement = document.createElement("p");
      let descriptionText = document.createTextNode(articlesData[i].description);
      descriptionElement.append(descriptionText);

      let authorElement = document.createElement("p");
      let authorText = document.createTextNode(articlesData[i].author);
      authorElement.append(authorText);

      let categoryElement = document.createElement("p");
      let categoryText = document.createTextNode(articlesData[i].category);
      categoryElement.append(categoryText);

      articleDiv.append(titleElement, descriptionElement, authorElement, categoryElement);
      containerDiv.append(articleDiv);
    }

    document.body.prepend(containerDiv);
  }
};
