const button = document.getElementById("button");
const input = document.getElementById("input");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");
const cityCondition = document.getElementById("condition");
const lastUpdated = document.getElementById("last-updated");

async function getData(cityName) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=b97f6de3807243aaa4832937252903&q=${cityName}&aqi=yes`
  );

  return await promise.json();
}

button.addEventListener("click", async () => {
  const value = input.value;

  if (value === "") {
    cityName.innerText = "";
    cityTime.innerText = "";
    cityTemp.innerText = "";
    cityCondition.innerText = "";
    lastUpdated.innerText = "";
    document.getElementById("weather-icon").style.display = "none";
  } else {
    const result = await getData(value);

    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;

    cityTime.innerText = `${result.location.localtime}`;

    cityTemp.innerText = `Temperature - ${result.current.temp_c} Celcius`;

    cityCondition.innerText = `Weather Condition - ${result.current.condition.text}`;

    lastUpdated.innerText = `Last Updated on ${result.current.last_updated}`;
  }
});
