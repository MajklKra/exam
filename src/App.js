import "./App.css"
import PageContainer from "./components/PageContainer/PageContainer"
import Toggler from "./components/Toggler/Toggler"

function App() {
  return (
    <PageContainer>
      <h1>Your app for hadnling projects</h1>
      <br></br>
      <h2>Toggle view</h2>
      <Toggler />
    </PageContainer>
  )
}

export default App
