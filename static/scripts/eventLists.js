var reqObj = new XMLHttpRequest(), eventJSONList;
reqObj.responseType = "json";
reqObj.onreadystatechange = function () {
    if(this.readyState === 4 && this.status === 200) {
        //Popola la pagina con i dati ricevuti
        eventJSONList = this.response; //Cattura la risposta in formato JSON
        for(var f in eventJSONList) {
            document.getElementById("eventLists").innerHTML += "<li class=\"list-group-item\"></li>"
        }
    }
};

reqObj.open("GET", "events.json", true);
reqObj.send();