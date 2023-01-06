

const VolunteerForm = ({opp}) => {

    function handleSubmit(e) {
    e.preventDefault();
  }

  return(
    <div>
      <h6>By Submitting This Form, We Will Contact {opp.organization} at: {opp.email} on your behalf!</h6>
<form className="donate-container" onSubmit={handleSubmit}>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <br/>
  <label>
    Email:
    <input type="text" name="name" />
  </label>
  <br/>
  <textarea>I'm interested in this volunteer opportunity!</textarea>
  <br/>
  <input type="submit" value="Submit" />
</form>
</div>
  )
}

export default VolunteerForm;