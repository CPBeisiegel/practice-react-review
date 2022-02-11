import {Card} from '../../components/Card';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'


export function Pets(){


/* O parâmetro da rota que vamos usar, precisamos usar o params e chama-lo na page quando formos chamar o dog ou o cat */
const params = useParams();
// Usamos o useState para modificar os valores, todo momento que temos uma mudança na condição de um elemento é necessário usar o state 
const [pet, setPets] = useState([]);
// Usamos esse state para renderizar novamente o state
const [rerender, setRereder] = useState(true);

// Usamos o useEffect para montar na hora da renderização os elementos obtidos pelo axios ao chamar a api 
// A melhor forma de se usar a função assincrona é com o try and catch, ele vai retornar a promise que estamos esperando 
  useEffect(() => {
     async function fetchPets(){
          try {
              /* Salvamos a resposta da api em uma variavel para depois setarmos ela dentro do pet  */
            const result = await axios.get('https://ironrest.herokuapp.com/catchapet')
            /* Usamos o spred operator para espalhar os valores obtidos através da api para posteriormente inserir novos valores com o setPets. 
            O data ligado ao result é usado para pegar os dados da api pois é a chave que temos dentro da api. 
            [é necessário lembrar que dentro da api temos vários chaves por isso usamos o data, pois é nele que fica as informações que desejamos  */
            setPets([...result.data]);
          } catch (error){
              console.log(error)
          }
      }
      /* É necessário lembrar de chamar a function que criamos para que ela seja instanciada */
      fetchPets();
    /* O useEffect precisa sempre ter o array mesmo que vazio. Usamos o array para saber se o mesmo vai precisar renderizar novamente ou não, 
    caso seja renderizado novamente precisamos inserir nele o valor que vamos atualizar */
    // colocamos como false para não criarmos um loop infinito
    setRereder(false);
    // chamamos o rerender para renderizarmos novamente
  }, [rerender])



   /* Estamos filtrando os valores obtidos na api para setar na pagina e depois usamos o map para percorrer o valor filtrado, e colocar em cada elemento do componente que criamos*/
     /* Estamos atribuindo o paramentro da rota que vamos utilizar*/
        /* Lembrar sempre de verificar a api para pegar o nomes corretos das chaves */
        /* Usamos o ? para dizer que se a species existir passar, se não, não passar */
    return (
        <>
           
            {pet.filter((currentPet) => { 
                return currentPet.species?.toLowerCase() === params.species
                
                })
                .map((currentPet) => {
                return <Card 
                key={currentPet._id}
                setRerender={setRereder}
                id={currentPet._id}
                species={currentPet.species}
                name={currentPet.name} 
                gender={currentPet.gender} 
                age={currentPet.age} 
                favoriteToy={currentPet.favoriteToy} 
                img={currentPet.img} />
             })}
        </>
    )
}
