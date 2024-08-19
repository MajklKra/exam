import "./ProgForm.css"

function ProgForm({ data, valid, onChange, onAdd }) {
  return (
    <div className="prog-form">
      <input
        type="text"
        placeholder="jmeno programatora"
        name="name"
        onChange={onChange}
        value={data.name}
      />

      <label htmlfor="junior">Junior</label>
      <input
        id="junior"
        type="radio"
        name="position"
        onChange={onChange}
        value="Junior"
        checked={data.position === "Junior"}
      />

      <label htmlfor="senior">Senior</label>
      <input
        id="senior"
        type="radio"
        name="position"
        onChange={onChange}
        value="Senior"
        checked={data.position === "Senior"}
      />

      <button disabled={!valid} onClick={onAdd}>
        Přidat
      </button>
    </div>
  )
}

export default ProgForm
