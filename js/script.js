function changeText() {
    const text = document.getElementById("text").innerHTML;
    if (text === "Nothing to see here") {
        document.getElementById("text").innerHTML = "I told you";
    } else if (text === "I told you") {
        document.getElementById("text").innerHTML = "Well, if you want";
    } else if (text === "Well, if you want") {
        alert("Here's a cool MV from JKT48 for you 🙂");
        window.location.href = "https://www.youtube.com/watch?v=5cy3vDjTfFY";
    }
}