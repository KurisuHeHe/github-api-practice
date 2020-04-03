const searchURL = "https://api.github.com/users/";
//https://api.github.com/users/kurisuhehe/repos normal full URL

function displayResults(responseJson) {
  const repos = responseJson;
  $(".results-list").empty();
  for (let i = 0; i < responseJson.length; i++) {
    console.log(repos[i].full_name);
    $(".results-list").append(`<li>name: ${repos[i].full_name}</li>
    <li>url: ${repos[i].url}</li>`);
  }
  $(".results").removeClass("hidden");
}

function getRepos() {
  const gitHandle = document.getElementById("search").value;
  const url = searchURL + gitHandle + "/repos";

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => alert("Something went wrong"));
}

function handleForm() {
  $("form").submit(event => {
    event.preventDefault();
    getRepos();
  });
}

$(handleForm);
