import Navbar from "./components/Navbar";
import hero from "./assets/hero.png"
import Card from "./components/card-component/Card";
import album from "./assets/album3.jpeg"
function App() {
  return (
    <div className=''>
      <Navbar />
      <div className="h-[270px] bg-black flex p-3 justify-center">
        <img className="object-contain h-full" src={hero} alt="" />
      </div>
      <div className="mt-2 p-2 flex gap-4 bg-black overflow-x-scroll items-center">
        <Card image = {album} title = "New Bollywood" follower="100M"/>
        <Card image = {album} title = "New Bollywood" follower="100M"/>
        <Card image = {album} title = "New Bollywood" follower="100M"/>
        <Card image = {album} title = "New Bollywood" follower="100M"/>
        <Card image = {album} title = "New Bollywood" follower="100M"/>
        <Card image = {album} title = "New Bollywood" follower="100M"/>
        <Card image = {album} title = "New Bollywood" follower="100M"/>
        <Card image = {album} title = "New Bollywood" follower="100M"/>
        <Card image = {album} title = "New Bollywood" follower="100M"/>
      </div>
    </div>
  );
}

export default App;
