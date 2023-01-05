import { useState } from "react";

const AddForm = ({opps,setOpps}) => {
    const [positionInput, setPositionInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [summaryInput, setSummaryInput] = useState("")
    const [categoryInput, setCategoryInput] = useState("")
    const [organizationInput, setOrganizationInput] = useState("")
    const [addressInput, setAddressInput] = useState("")
    const [cityInput, setCityInput] = useState("")
    const [stateInput, setStateInput] = useState("")
    const [postcodeInput, setPostcodeInput] = useState("")
    const [countryInput, setCountryInput] = useState("")
    const [websiteInput, setWebsiteInput] = useState("")

    const handlePost = async () => {
        const data = {
            position: positionInput,
            email: emailInput,
            summary: summaryInput,
            category: categoryInput,
            organization: organizationInput,
            address: addressInput,
            city: cityInput,
            state: stateInput,
            postcode: postcodeInput,
            country: countryInput,
            website: websiteInput
        }
        const request = await fetch("http://localhost:3000/opportunities",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
        const response = await request.json()
        // take the respone and add it to the back of the CATS state 
        setOpps([...opps,response])
    }

    return (
        <div className="addform">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    handlePost()
                }} style={{ display: 'flex', flexDirection: 'column' }}>

                    <label>Position:</label>
                    <input value={positionInput} onChange={(e) => setPositionInput(e.target.value)}></input>

                    <label>Email:</label>
                    <input value={emailInput} onChange={(e) => setEmailInput(e.target.value)}></input>

                    <label>Summary:</label>
                    <input value={summaryInput} onChange={(e) => setSummaryInput(e.target.value)}></input>

                    <label>Category:</label>
                    <select value={categoryInput} onChange={(e) => setCategoryInput(e.target.value)}>
                        <option>Select Category...</option>
                        <option value="Arts">Arts</option>
                        <option value="Communities and Neighbors">Communities and Neighbors</option>
                        <option value="Culture">Culture</option>
                        <option value="Economic and Workforce Development">Economic and Workforce Development</option>
                        <option value="Education">Education</option>
                        <option value="Health and Well-Being">Health and Well-Being</option>
                        <option value="Sports">Sports</option>
                    </select>

                    <label>Organization:</label>
                    <input value={organizationInput} onChange={(e) => setOrganizationInput(e.target.value)}></input>

                    <label>Address:</label>
                    <input value={addressInput} onChange={(e) => setAddressInput(e.target.value)}></input>

                    <label>City:</label>
                    <input value={cityInput} onChange={(e) => setCityInput(e.target.value)}></input>

                    <label>State:</label>
                    <input value={stateInput} onChange={(e) => setStateInput(e.target.value)}></input>

                    <label>Postcode:</label>
                    <input value={postcodeInput} onChange={(e) => setPostcodeInput(e.target.value)}></input>

                    <label>Country:</label>
                    <input value={countryInput} onChange={(e) => setCountryInput(e.target.value)}></input>

                    <label>Website:</label>
                    <input value={websiteInput} onChange={(e) => setWebsiteInput(e.target.value)}></input>

                    <button style={{
                        width: '200px',
                        height: '50px'
                    }} type="submit">Submit</button>

                </form>
        </div>
    )
}
export default AddForm;