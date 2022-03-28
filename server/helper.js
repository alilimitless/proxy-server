const entrance = "entrance";
const exit = "exit"
const baseURL = "http://ec2-3-94-100-131.compute-1.amazonaws.com/"
const publicArrivalPath = baseURL + "activities/public/arrival";
const publicDeparturePath = baseURL + "activities/public/departure";
const reservedArrivalPath = baseURL + "activities/reserved/arrival";
const reservedDeparturePath = baseURL + "activities/reserved/departure";

module.exports = {
    entrance,
    exit,
    publicArrivalPath,
    publicDeparturePath,
    reservedArrivalPath,
    reservedDeparturePath
}