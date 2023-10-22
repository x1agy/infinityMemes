import { useEffect, useState } from "react";

function App() {
  const [imageId, setImageId] = useState(1)
  const [imagesData, setImagesData] = useState("")
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/" + imageId)
      .then((result) => {
        return result.json();
      })
      .then(item => {
        setImagesData(item)
      })
      .finally(() => {
        if(imageId < 1){
          setImageId(5000)
        }
        else if(imageId > 5000){
          setImageId(1)
        }
      })
  }, [imageId])

  function incremAndDecrem(e){
    if(e.target.innerHTML == "&gt;"){
      setImageId(imageId + 1)
    }
    else {
      setImageId(imageId - 1)
    }
    console.log(imageId)
  } 

  function fillPage(){
    if(imagesData === ""){
      return(
        <div>Loading...</div>
      )
    }
    
    else{
      return(
        <section>
          <h2>{imagesData.title}</h2>
          <img src={imagesData.url}/>
          <button className="buttonOne" onClick={incremAndDecrem}>&gt;</button>
          <button className="buttonTwo" onClick={incremAndDecrem}>&lt;</button>
        </section>
      )
    }
  }

  return (
    <div className="App">
      {fillPage()}
    </div>
  );
}

export default App;
