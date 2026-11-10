function countText() {
    let text = document.getElementById("text").value;

    let charCount = text.length;

    let wordCount = text.trim();

    if (wordCount === "") {
        wordCount = 0;
    } else {
        wordCount = wordCount.split(" ").length;
    }

    document.getElementById("words").innerHTML = "Words: " + wordCount;
    document.getElementById("chars").innerHTML = "Characters: " + charCount;
}