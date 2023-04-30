import axios from "axios";
import { GoogleMapGeolocation } from "./interfaces";

//declare let google: any;

// getting input form
const form: HTMLFormElement = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
  console.log(enteredAddress);
  axios
    .get<GoogleMapGeolocation>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_NUMBER}
    `
    )
    .then((response) => {
      if (response.data.status !== "OK")
        throw new Error(`Could not fetch location: ${response.data.status}`);
      const coordinates = response.data.results[0].geometry.location;
      const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: coordinates,
        zoom: 8,
      });
      new google.maps.Marker({
        position: coordinates,
        map,
        title: "Hello World!",
      });

    })
    .catch((error) => {
      alert(error);
      console.error(error);
    });
}


form.addEventListener("submit", searchAddressHandler);
