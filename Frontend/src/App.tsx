import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"
import './App.css'

function App() {

  return (
    <>
    <ModeToggle />
    <Button>Click me</Button>
    <Input type="text" />
     <h1 className='text-3xl text-teal-600 font-extrabold'>Reactjs with typescript.</h1>
    </>
  )
}

export default App
