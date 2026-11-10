async function getJoke() {
    let response = await fetch("https://official-joke-api.appspot.com/random_joke");

    let data = await response.json();

    document.getElementById("joke").innerHTML =
        data.setup + "<br><br>" + data.punchline;
}