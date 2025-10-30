import Navbar from "./navBar"
import Page1Content from "./page1Content"


const Section1 = (props) => {
  return (
    <div className='h-screen w-full'>
      <Navbar/>
      <Page1Content users = {props.users}/>
    </div>
  )
}

export default Section1
