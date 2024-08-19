import "./Toggler.css"

function Toggler({ onChoose, active }) {
  const handleClick = (e) => {
    onChoose(e.target.name)
  }

  return (
    <div className="page-toggler">
      <button
        className={`toggler-btn ${active === 1 ? "active" : ""}`}
        name="list-of-dogs"
        onClick={handleClick}
      >
        List of Programmers
      </button>

      <button
        className={`toggler-btn ${active === 2 ? "active" : ""}`}
        name="shelter-storage"
        onClick={handleClick}
      >
        Form for planning tasks
      </button>
    </div>
  )
}

export default Toggler
