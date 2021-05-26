fetch("http://localhost:3000/test")
  .then(function (response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }

    // Examine the text in the response
    response.json().then(function (data) {
      console.log(data);
      DisplayData(data);
    });
  })
  .catch(function (err) {
    console.log("Fetch Error :-S", err);
  });

  function DisplayData(data) {
    document.getElementById("output").innerHTML = JSON.stringify(data);
  }