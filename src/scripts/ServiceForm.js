import { sendRequest } from "./dataAccess.js"
import { Requests } from "./Requests.js"

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="serviceParent"> Parent Name</label>
            <input type="text" name="serviceParent" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceChild">Child Name</label>
            <input type="text" name="serviceChild" class="input" />
        </div>
        <div class="field">
            <label class="label" for="servicePartyNum">Number of Attendees</label>
            <input type="number" name="servicePartyNum" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Party Address</label>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Party Date</label>
            <input type="date" name="serviceDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDuration">Party Duration (In Hours)</label>
            <input type="number" name="serviceDuration" class="input" />
        </div>

        <button class="button" id="submitRequest">Rent a Clown</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParent = document.querySelector("input[name='serviceParent']").value
        const userChild = document.querySelector("input[name='serviceChild']").value
        const userPartyNum = document.querySelector("input[name='servicePartyNum']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userDate = document.querySelector("input[name='serviceDate']").value
        const userDuration = document.querySelector("input[name='serviceDuration']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParent,
            childName: userChild,
            partyNum: userPartyNum,
            partyAddress: userAddress,
            partyDate: userDate,
            partyDuration: userDuration
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI);
    }
})