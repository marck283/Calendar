module.exports = {
    map: function(events, routeId) {
        return events.map(event => {
            return {
                id: routeId + '?id=' + event._id,
                name: event.nomeAtt,
                category: event.categoria
            }
        });
    }
}