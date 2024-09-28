

//https://newsapi.org/v2/everything?q=tesla&from=2024-01-04&sortBy=publishedAt&apiKey=e410068bc4254482a5576cc5b69c1b07
//e410068bc4254482a5576cc5b69c1b07

async function generatesNews(){
    
    
    const apiKey = `e410068bc4254482a5576cc5b69c1b07`
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`)
    const data = await response.json()
    
    // console.log(data)
    const articlesContainer = document.querySelector("#news");
    
    data.articles.forEach(article => {

        // create the new element div for each article and put the img and title inside it
        const div = document.createElement("div")
        div.classList.add("article")
        div.innerHTML = `
        <img src = "${article.urlToImage}">
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <a href = "${article.url}"></a>
        `
        articlesContainer.appendChild(div)
    });

}
const btn = document.querySelector("#btn");
btn.addEventListener("click" , async(e)=>{
    e.preventDefault();

    await generatesNews();
    
})
const moreNews = document.querySelector("#moreNews")
moreNews.addEventListener("click" , async(e)=>{
    e.preventDefault();
    const apiKey = `e410068bc4254482a5576cc5b69c1b07`
    const response = await fetch(`https://newsapi.org/v2/everything?q=apple&from=2024-02-12&to=2024-02-12&sortBy=popularity&apiKey=${apiKey}`)
    const data = await response.json()

    console.log(data)

    data.articles.forEach(article => {
        const div = document.createElement("div")
        div.classList.add("article")

        div.innerHTML = `
        <img src = "${article.urlToImage}">
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <a href = "${article.url}"></a>
        `
        moreNews.appendChild(div)
    })

})
