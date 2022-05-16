module.exports = {
    map: function(events) {
        return events.map(event => {
            return {
                id: '/api/v1/listaEventi/' + event._id,
                name: event.nomeAtt,
                category: event.categoria
            }
        });
    }
}