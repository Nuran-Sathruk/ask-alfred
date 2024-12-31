const SayingQuestionsResults = [
    {
    query: "what is ai",
    title: "What is Artificial Intelligence (AI)?",
    link: "https://en.wikipedia.org/wiki/Artificial_intelligence",
    description: "AI stands for Artificial Intelligence, a field of computer science focused on creating systems capable of performing tasks that usually require human intelligence."
},

{
    query: "paris",
    title: "Paris - Wikipedia",
    link: "https://en.m.wikipedia.org/wiki/Paris",
    description: "Paris is the capital and largest city of France. With an official estimated population of 2,102,650 residents in January 2023 in an area of more than, Paris is the fourth-largest city in the European Union and the 30th most densely populated city in the world in 2022."
},

{
    query: "what is the capital of germany",
    title: "Capital of Germany - Wikipedia",
    link: "https://en.m.wikipedia.org/wiki/Capital_of_Germany",
    description: "The capital of Germany is the City Land of Berlin, It is the seat of the Federal President of Germany, whose official residence is Bellevue Castle. The Federal Council is the representation of the Lands of Germany and has its seat at the former Prussian House of Lords."
},

{
    query: "what is the capital of france",
    title: "What is the capital of France? - Paris",
    link: "https://en.wikipedia.org/wiki/Paris",
    description: "The capital of France is Paris, known for its cultural landmarks such as the Eiffel Tower, Notre-Dame, and its vibrant art scene."
},

{
    query: "youtube",
    title: "YouTube",
    link: "https://www.youtube.com",
    description: "Share your videos with friends, family, and the world."
}

];

function performSearch() {
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();
    const resultDiv = document.getElementById("result");

resultDiv.innerHTML = '';

const matchingResults = SayingQuestionsResults.filter(result => result.query.includes(searchQuery));

if (matchingResults.length > 0) {
    matchingResults.forEach(result => {
    resultDiv.innerHTML += `
    <div class="search-result">
    <a href="${result.link}" class="result-title" target="_blank">${result.title}</a>
    <div class="result-link">${result.link}</div>
    <div class="result-description">${result.description}</div>
    </div>
    <hr/>`;

});

} else {

resultDiv.innerHTML = '<p class="error-message"> (404) No Results Found.</p>';

}

learnFromSearch(searchQuery, matchingResults.length > 0 ? matchingResults : null);
}

function learnFromSearch(query, results) {
    if (!results) {
        console.log(`Learning new query: ${query}`);
}

}