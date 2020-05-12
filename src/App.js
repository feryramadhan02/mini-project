import React from "react"; //import class react dr React nya sndiri
import HeadNavigation from "./components/HeadNavigation";
import MainContent from "./components/MainContent";
import FooterBottom from "./components/FooterBottom";
import MyProject from "./components/MyProject";


function App() {
  return (
    <div>
      <h1 style={{ color: "red" }}>Hello</h1>
      <p style={warna}>Good morning</p>
      <HeadNavigation />
      <MainContent />
      <FooterBottom />
      <MyProject />
    </div>
  )
}
/*------Bisa juga pke Class -------
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hallo</h1>
        <h2>Let's learn</h2>
      </div>
      //div hanya boleh 1 kali, krn dibuat per item-item
    )
  }
} */

const warna = {
  color: "pink", //pke koma krn object
  fontsize: "20px"
}
export default App;