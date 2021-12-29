for(let i = 0; i < projets.length; i++)

$('#cards').append(`
    <div id="card" style="background-image: url(${projets[i].bgImg});">
        <div id="desc-card">
            <p>${projets[i].description}</p>

            <a class="btnMore" href="${projets[i].link}" target="_blank">
                Voir le site
                <i class="fas fa-angle-right"></i>
            </a>
        </div>
    </div>
`);