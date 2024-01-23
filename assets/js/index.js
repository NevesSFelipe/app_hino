var dropdown_hymns = document.getElementById("dropdown_hymns");
var title_hymn = document.getElementById("title_hymn");
var array_anthem_parameter = {
  "cantor_cristao": "Cantor Cristão"      
};

document.addEventListener("DOMContentLoaded", function(e) {
    load_hymns();
});

function load_hymns()
{
    let full_url = window.location.href;
    let array_full_url = full_url.split("?");
    let anthem_parameter = array_full_url[1];

    title_hymn.innerHTML = array_anthem_parameter[anthem_parameter];
    show_hymns(anthem_parameter);
   
}

function show_hymns(name_table) 
{
    const action = "action=list";
    const table = `table=${name_table}`;
    
    const url = "core.php";
    const full_url = `${url}?${action}&${table}`;
    
    const options = {

        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    fetch(full_url, options)

        .then(response => {
            
            if (!response.ok) {
                throw new Error(`Erro de rede: ${response.status}`);
            }
            
            return response.json(); 
        })

        .then(data => {

            collapse_hymns(data)

        })

        .catch(error => {
            console.error('Erro na requisição:', error.message);
        });

}

function collapse_hymns(data)
{
    let html = "";
            
    for(const key in data) {
        
        html += 

            `<div class="card">

                <div class="card-header" id="heading_${data[key]["id_hymn"]}" data-toggle="collapse" data-target="#collapse_${data[key]["id_hymn"]}" aria-expanded="true" aria-controls="collapse_${data[key]["id_hymn"]}">
            
                    <h2 class="mb-0">
                
                        <button class="btn" type="button">
                    
                            <h5 class="h5_title_hymn">${data[key]["title_hymn"]}</h5>
                        
                        </button>
                    
                    </h2>
                
                </div>

                <div id="collapse_${data[key]["id_hymn"]}" class="collapse collapsed" aria-labelledby="heading_${data[key]["id_hymn"]}" data-parent="#dropdown_hymns">

                    <div class="card-body">`

                        + nl2br(data[key]["lyrics_hymn"]) + 

                    `</div>

                </div>

            </div>`
        ;
    
    }

    dropdown_hymns.innerHTML = html;

}

// helpers
function nl2br(str) {
    return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
}