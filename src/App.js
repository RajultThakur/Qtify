import Navbar from "./components/Navbar";
import hero from "./assets/hero.png"
// import Card from "./components/card-component/Card";
// import album from "./assets/album3.jpeg"
import { useEffect, useState } from "react";
import CardCategory from "./components/card-component/CardCategory";
function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);

  const getTopAlbums = async() => {
    const response = await fetch("https://qtify-backend-labs.crio.do/albums/top");
    const data = response.json();
    return data
  }

  const getNewAlbums = async() => {
    const response = await fetch("https://qtify-backend-labs.crio.do/albums/new");
    const data = response.json();
    return data
  }

  useEffect(() => {
    console.log("running")
    async function run(){
      const topAlbums = await getTopAlbums();
      const newAlbums = await getNewAlbums();
      setTopAlbumsData(topAlbums);
      setNewAlbumsData(newAlbums);
    }
    run();
  }, [])
  
  return (
    <div className=''>
      <Navbar />
      <div className="h-[270px] bg-black flex p-3 justify-center">
        <img className="object-contain h-full" src={hero} alt="" />
      </div>
      <CardCategory albumsData={topAlbumsData} category = "Top Albums"/>
      <CardCategory albumsData={newAlbumsData} category = "New Albums"/>

    </div>
  );
}

export default App;
