const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const api_url = "https://thequoteshub.com/api/random";
const newQuoteBtn = document.querySelector("button");
const tweetBtn = document.querySelector("button img");


async function getquote(url) {
    const response = await fetch(url)
    var data = await response.json();
    // console.log(data)
    quote.innerHTML = data.text;
    author.innerHTML = data.author;
}

getquote(api_url);

newQuoteBtn.addEventListener("click", () => getquote(api_url));

const shareOnTwitter = () => {
    const tweetText = encodeURIComponent(quote.innerHTML + " ---- by " + author.innerHTML); //Encodes the combined string so that any special characters (like spaces, punctuation, or symbols) are safely included in a URL.
    window.open("https://twitter.com/intent/tweet?text=" + tweetText, "_blank", "width=550,height=235");
};

tweetBtn.addEventListener("click", shareOnTwitter);