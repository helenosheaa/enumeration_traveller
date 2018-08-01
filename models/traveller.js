const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = [];
    this.journeys.forEach((journey) => {
      startLocations.push(journey.startLocation);
    });
    return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = [];
    this.journeys.forEach((journey) => {
      endLocations.push(journey.endLocation);
    });
    return endLocations;
};

Traveller.prototype.getModesOfTransport = function () {
  const modesOfTransport = [];
    this.journeys.forEach((journey) => {
      modesOfTransport.push(journey.transport);
    });
    return modesOfTransport;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const foundJourney = this.journeys.filter( journey => journey.transport === transport);
  return foundJourney;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysByMinDistance = this.journeys.filter((journey) => journey.distance > minDistance);
  return journeysByMinDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistanceTravelled = (total, journey) => total + journey.distance;
  return this.journeys.reduce(totalDistanceTravelled, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return Array.from(new Set( this.getModesOfTransport()))
};

module.exports = Traveller;
