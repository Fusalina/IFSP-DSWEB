function init_load() {
    get_estados();
    get_cities2();
    get_country();
}

function limit_name(element)
{
    var max_chars = 2;

    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
}

function get_estados() {
    let dropdown = document.getElementById("get_estados");
    dropdown.length = 0;
    let opcao_padrao = document.createElement("option");
    opcao_padrao.text = "Escolha o estado";
    dropdown.add(opcao_padrao);
    dropdown.selectedIndex = 0;
    const url_uf =
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome";
    fetch(url_uf).then(function (response) {
        response.json().then(function (data) {
            let option;
            for (let i = 0; i < data.length; i++) {
                option = document.createElement("option");
                option.text = data[i].nome;
                option.value = data[i].sigla;
                dropdown.add(option);
            }
        });
    });
}

function get_cities2() {
    let dropdown = document.getElementById("get_cities");
    dropdown.length = 0;
    let opcao_padrao = document.createElement("option");
    opcao_padrao.text = "Escolha sua cidade";
    dropdown.add(opcao_padrao);
    dropdown.selectedIndex = 0;
    console.log(document.getElementById("get_estados").value);
    if (document.getElementById("get_estados").value !== "Escolha o estado") {
        const url_cities = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + document.getElementById("get_estados").value + "/municipios?orderBy=nome";
        fetch(url_cities).then(function (response) {
            response.json().then(function (data) {
                let option;
                for (let i = 0; i < data.length; i++) {
                    option = document.createElement("option");
                    option.text = data[i].nome;
                    option.value = data[i].sigla;
                    dropdown.add(option);
                }
            });
        });
    }


}


function get_country() {
    let dropdown = document.getElementById("get_country");
    dropdown.length = 0;
    let opcao_padrao = document.createElement("option");
    opcao_padrao.text = "Escolha o seu País";
    dropdown.add(opcao_padrao);
    dropdown.selectedIndex = 0;
    const url_country = "https://servicodados.ibge.gov.br/api/v1/paises/{paises}";
    fetch(url_country).then(function (response) {
      response.json().then(function (data) {
        let option;
        for (let i = 0; i < data.length; i++) {
          option = document.createElement("option");
          option.text = data[i].nome["abreviado"];
          dropdown.add(option);
        }
      });
    });
  }