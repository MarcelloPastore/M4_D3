const APIURL = "https://api.pexels.com/v1";
const APIKey = "HoAIcqvK8lylK9eZwuiN2eo6TWmwpfhjqhMUyw79WzoD5nFuogmMUfgr";

const row = document.querySelector(".row");

// !Searchbar funzionante (sono fottissimo)
function getSearch() {
    let input = document.querySelector("#ricerca");
    let bottone = document.querySelector("#bottone");

    bottone.addEventListener("click", () => {
        getAlbum(input.value);
        console.log(input.value);
    });
}
getSearch();

// ! Problema 2) fare chiamata ajax
const getAlbum = (input) => {
    fetch(APIURL + "/search?query=" + input , {
        headers: {
            Authorization: APIKey
        }
    })
    .then((res) => {
        return res.json()
    })
    .then((res2) => {
        albumCard(res2.photos)
    })
    .catch((err) => {console.log( "Attezione, errore: " + err)});
}



// ! Problema 1) funzione creare un dom con gli oggetti degli api
let albumCard = (photos) => {
    console.log(photos)
    for (let i=0 ; i<photos.length ; i++) {
        row.innerHTML += `
        <div class="cont col-6 col-md-3 col-lg-2 p-5">
            <div class="card h-100">
                <img src="`+ photos[i].src.original +`" class="card-img-top img-fluid w-50" alt="`+ photos[i].url +`">
                <div class="card-body">
                    <h5 class="card-title">`+ photos[i].photographer +`</h5>
                    <p class="card-text"> ID: `+ photos[i].id + ` Size: ` + photos[i].width +` x `+ photos[i].height +`</p>
                    <a href=" `+ photos[i].url +` "class="btn btn-primary" target="_blank">See on the site</a>
                </div>
            </div>
        </div>
    `
    }
}