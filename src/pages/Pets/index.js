import {Card} from '../../components/Card';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'


export function Pets(){

const params = useParams();

const [pet, setPets] = useState([]);

  useEffect(() => {
     async function fetchPets(){
          try {
            const result = await axios.get('https://ironrest.herokuapp.com/catchapet')
            setPets([...result.data]);
          } catch (error){
              console.log(error)
          }
      }

      fetchPets();

  }, [])

    return (
        <>
            {pet.filter((currentPet) => { 
                return currentPet.species.toLowerCase() === params.species
                
                })
                .map((currentPet) => {
                return <Card 
                key={currentPet._id}
                name={currentPet.name} 
                gender={currentPet.gender} 
                age={currentPet.age} 
                favoriteToy={currentPet.favoriteToy} 
                img={currentPet.img} />
             })}
        </>
    )
}
