import axios from 'axios';


// getting input form

const form: HTMLFormElement = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;
    console.log(enteredAddress);
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_NUMBER}
    `).then((response)=>{
        console.log(response);
    }).catch(error =>{
        console.log(error);
    });
}

form.addEventListener("submit",searchAddressHandler);