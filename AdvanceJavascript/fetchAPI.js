// Using Async Await
const getFact = async () => {
    console.log("Getting Data from API.......");
    let response = await fetch("https://cat-fact.herokuapp.com/facts");
    console.log(response);
    let data = await response.json();
    console.log(data);
    data.forEach((item) => {
        console.log(item.text);
    })

}

// Using Promise Chains
function getFacts() {
  return fetch("https://cat-fact.herokuapp.com/facts/");
}

getFacts()
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.map((item) => console.log(item.text));
  });
