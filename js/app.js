var keepGoing = true;
function getWeather() {
    $.ajax({
        url : "http://api.wunderground.com/api/d61c36ca46cda311/conditions/q/il/Chicago.json",
        dataType : "jsonp",
        success : function(parsed_json) {
            console.log(parsed_json);
            console.log(parsed_json.current_observation.temp_f);
            if (keepGoing) {
                setTimeout(getWeather, 3000);
            }
        }
    });
}
