import { getRequests, getClowns, deleteRequest, saveCompletion } from "./dataAccess.js"



export const Requests = () => {
    const requests = getRequests()
    const clowns = getClowns();
    const requestToList = (requestObj) => {
        return `
        <li>
            ${requestObj.description}
            <select class="clowns" id="clowns">
                <option value="">Choose Clown</option>
                ${
                clowns.map(
                    clown => {
                        return `<option value="${requestObj.id}--${clown.id}">${clown.name}</option>`
                    }
                ).join("")
                }
            </select>
            <button class="request__delete"
                    id="request--${requestObj.id}">
                Deny
            </button>
        </li>
    `
    }
    let html = `
        <ul>
            ${
                requests.map(requestToList).join("")
            }
        </ul>
    `

    return html
}


export const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")

            const completion = { 
                requestId: requestId,
                plumberId: plumberId,
                date_created: Date.now()
            }

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
            saveCompletion(completion);

        }
    }
)