import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"


export const Buttons = () => {
    return `
        <h1>Buttons's Clown Rental</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Clown Requests</h2>
            ${Requests()}
        </section>
    `
}