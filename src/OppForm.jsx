import { useState } from "react";

const OppForm = ({opps,setOpps}) => {

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
            name: nameInput,
            breed: breedInput,
            image: imageInput,
            score: scoreInput
        }
        const request = await fetch("http://localhost:3000/cats",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
        const response = await request.json()
        // take the respone and add it to the back of the CATS state 
        setCats([...cats,response])
    }
    return (
        <>
            {formOpen ?
                <form onSubmit={(e) => {
                    e.preventDefault()
                    handlePost()
                }} style={{ display: 'flex', flexDirection: 'column' }}>

                    <label>Name:</label>
                    <input value={nameInput} onChange={(e) => setNameInput(e.target.value)}></input>

                    <label>Breed:</label>
                    <input value={breedInput} onChange={(e) => setBreedInput(e.target.value)}></input>

                    <label>Image:</label>
                    <input value={imageInput} onChange={(e) => setImageInput(e.target.value)}></input>

                    <label>Score:</label>
                    <input value={scoreInput} onChange={(e) => setScoreInput(e.target.value)}></input>

                    <button style={{
                        width: '200px',
                        height: '50px'
                    }}>Submit</button>

                </form>
                : null}

            <button style={{
                width: '200px',
                height: '50px'
            }} onClick={() => {
                setFormOpen(!formOpen)
            }}>Toggle Form</button>

        </>
    )
}
export default Submit;

        

    )
}

export default OppForm