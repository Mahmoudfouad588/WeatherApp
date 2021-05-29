/*
fetch(
  "https://community-open-weather-map.p.rapidapi.com/weather?q=Cairo%2Cegy&lat=300240.2&lon=311419.68&lang=en&units=metric",
  {
    method: "GET",
    headers: {
      "x-rapidapi-key": "b7eee6b9eamsh25b3956d5f4ebb1p1682e4jsnbb9167ba1908",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    },
  }
)
  .then((response) => {
    console.log(response);
    let theData = response.json();
    console.log(theData);
    console.log("I'M Going CRAZY");
  })

  .catch((err) => {
    console.error(err);
  });
*/
//------------------------------

//---------------------------------------- The Right CODE ----------------------------------------
//---------------------------------------- The Right CODE ----------------------------------------
//---------------------------------------- The Right CODE ----------------------------------------
//---------------------------------------- The Right CODE ----------------------------------------

let loc = navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
  window.curLat = position.coords.latitude;

  window.curlon = position.coords.longitude;

  let url = `https://community-open-weather-map.p.rapidapi.com/weather?lat=${curLat}&lon=${curlon}&lang=en&units=metric`;

  let fetching = fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "b7eee6b9eamsh25b3956d5f4ebb1p1682e4jsnbb9167ba1908",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    },
  }).then((response) =>
    response
      .json() // from here we get the right data out of the fuckin promise
      .then((data) => ({
        data: data,
        status: response.status,
      }))
      .then((res) => {
        console.log(res.data);
        let temperature = res.data.main.temp.toFixed();
        let realFeel = res.data.main.feels_like.toFixed();
        let locat = res.data.name;
        let wethStatu = res.data.weather[0].main;

        console.log("Current Temprature : " + temperature + "C");
        console.log("Real Feels : " + realFeel + "C");
        console.log("Current Location : " + locat);
        console.log("Status : " + wethStatu);

        // getting data to the interface
        //
        //
        function pasteDate() {
          let degre = document.getElementById("deg");
          let feal = document.getElementById("rfeal");
          let statue = document.getElementById("stu");
          let loc = document.getElementById("locate");
          degre.innerHTML = temperature + " C°";
          feal.innerHTML = "Real Feel " + realFeel + " C°";
          statue.innerHTML = wethStatu;
          loc.innerHTML = locat;
        }
        pasteDate();
      })
  );
}
