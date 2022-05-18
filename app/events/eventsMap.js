module.exports = {
    map: function(events, routeId) {
        return events.map(event => {
            return {
                id: '/api/v1/' + routeId + '/' + event._id, //Chiedere a chi di dovere se la risorsa evento debba essere ricevuta in questo modo.
                name: event.nomeAtt,
                category: event.categoria
            }
        });
    }
}