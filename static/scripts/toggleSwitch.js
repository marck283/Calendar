var request = async () => {
    try {
        const response = await fetch("/api/v1/events");
        if(response.ok) {
            const jsonResponse = await response.json();
            for (var f of jsonResponse.listForCategory) {
                document.getElementById("eventLists").innerHTML += "<h3>" + f.category + "</h3>\
                <ul class=\"list-group list-group-flush\"><li class=\"list-group-item\"><div class=\"row row-cols-4\"\
                id=\"" + f.category + "\">";
                for (var item of f.events) {
                    document.getElementById(f.category).innerHTML += "<div class=\"col\"><div class=\"card\">\
                    <h5 class=\"card-title\">" + item.name + "</h5>\
                    <a href=\"#?id=" + item.id + "\" class=\"btn btn-primary\" name=\"cardButton\">Maggiori informazioni...</a></div></div>";
                    //Si ricordi che, nel link associato al bottone di cui sopra, dovrà essere inserito anche l'id dell'evento
                    //come parametro di query. Questo id dovrà essere cercato, una volta che Enrico avrà creato la sua pagina di
                    //visualizzazione di un evento pubblico, tramite il campo opportuno contenuto nel file JSON ricevuto dal client.
                }
                document.getElementById("eventLists").innerHTML += "</div></li></ul>";
            }
        }
    } catch(error) {
        console.log(error);
    }
}

var showIfChecked = () => {
    if (document.getElementById("buttonSwitch").checked) {
        document.getElementById("calendarWrapper").style.display = "block";
        document.getElementById("divCal").style.display = "block";
        document.getElementById("eventLists").style.display = "none";
        document.getElementById("eventLists").innerHTML = "";
    } else {
        request();
        document.getElementById("calendarWrapper").style.display = "none";
        document.getElementById("divCal").style.display = "none";
        document.getElementById("eventLists").style.display = "block";
    }
};