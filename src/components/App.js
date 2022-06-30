import {React,useEffect,useState} from 'react'

export default function App() {
    const [loading, setLoading] = useState(false)
    const [dog, setDog] = useState();
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response=>response.json())
        .then(data=>{
            setDog(data.message)
        })
        setLoading(true)
    }, []);
  
      if (!dog) return <p>Loading...</p>;

      //  <p>{!loading? "Loading...":""}</p>
       return <img src={dog} alt="A Random Dog" />

     // return  {!loading? <p>Loading...</p>:<img src={dog} alt="A Random Dog"/>}
  
  
}
