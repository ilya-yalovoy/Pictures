const mainObj = {
    getImgURL: 'https://keephere.ru/get_chunk/',
    getImgID:  'L4xZIj_TTlDxoOS',

    numImgInPage: 10,

    
}

let numImgDownload = 0;  //количество загруженых картинок;
const blockImg = document.querySelector('#imgBlock');


getJSON(getURL(), createImgElement);

function getURL() {
    var mainUrl = mainObj.getImgURL+mainObj.getImgID+ '/' + ++numImgDownload + '/' + mainObj.numImgInPage;
    return mainUrl;
}

function getJSON(URL, callbackFunction) {
    var request = new XMLHttpRequest();
    request.open('GET', URL);
    request.responseType = 'json';
    request.send();

//    request.onload = function() {
        const superHeroes = request.response;

        callbackFunction(superHeroes);
  //  }
}

function createImgElement(objImg) {
    objImg.files.forEach(element => {
        let a = document.createElement('figure');
        a.style.marginBottom = '5px'
        a.innerHTML = `
        <a href="${element.big_photo}" data-fancybox="images" data-caption="${element.caption}">
            <img loading="lazy" class="img-fluid loading_gif"  src="https://keephere.ru/get/L44LlITVZ/r369x497/photo_2019-12-25_18-54-19.jpg" alt="photo_2019-12-25_18-54-19" title="Новогодняя раскраска (photo_2019-12-25_18-54-19.jpg)"/>
        </a><br>
        <figcaption class="photo_desc">
            <span class="small_text">Скачать оригинал:</span><a href="${element.direct_link}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-download norm_link" viewBox="0 0 16 16"><path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/><path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/></svg></a> (${element.size_x}x${element.size_y} px)<br><span class="small_text">Комментарии:</span> <a class="glyphicon" href="/p/L44LlITVZ"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text norm_link" viewBox="0 0 16 16">
<path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
<path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
</svg></a><br>
            ${element.caption}<br>
            ${arrTags(element.tags)} <br>
        </figcaption>
    `;

        blockImg.append(a);
    });
}


function arrTags(arr) {
    let str;
    arr.forEach(element => {
        str = str + `#<i>${element}</i> `;
    })
    return str;
}





