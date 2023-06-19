const btnEl=document.getElementById("btn");
const animeContainerEl=document.querySelector(".anime-container");
const animeImgEl=document.querySelector(".anime-img");
const animeNameEl=document.querySelector(".anime-name");


btnEl.addEventListener("click",async function(){
    try {
        btnEl.disabled=true;
        btnEl.innerText="Loading...";
        animeNameEl.innerText="Loading...";
        animeImgEl.src="spinner.svg";
        const response= await fetch("https://api.catboys.com/img");
        const data= await response.json();
       animeContainerEl.style.display="block";
       animeImgEl.src=data.url;
        animeNameEl.innerText=data.artist;
        btnEl.innerText="Get Anime";
        btnEl.disabled=false;
        
    } catch (error) {
        console.log(error);
        btnEl.disabled=false;
        btnEl.innerText="Get Anime";
        animeNameEl.innerText="An error occured..Please try again";

    }
})