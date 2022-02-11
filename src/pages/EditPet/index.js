import { useState } from "react";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom"
import {useEffect} from "react"

export function EditPet() {
    
    const params = useParams();
    const navigate = useNavigate();



    const [form, setForm] = useState({
        name: "",
        species: "",
        gender: "",
        age: 1,
        favoriteToy: "",
        img: "",
    })

    useEffect(() => {
        async function fetchPet() {
            try {
              const response = await axios.get(`https://ironrest.herokuapp.com/catchapet/${params.id}`);
                setForm({...response.data})
            } catch (error) {
              console.error(error);
            }
          }

          fetchPet()
    },[])

   
    function handleChange(event) {
        setForm({...form, [event.target.name]: event.target.value})
    }
   
    function handleSubmit(event){
        event.preventDefault()
        
        for(let key in form){
            if (!form[key]) {
                window.alert(`Gentileza preencher o campo ${key} corretamente`);
                return;
              }
        }
        
        console.log("Não caiu no if")
        /* Inserimos esse comando para deletar o id do form antes de editarmos a valor dentro do formulário e envia-lo para a api */
        delete form._id;
        /* Antes de passarmos o update precisamos remover o id pois ele não pode ser atualizado devido a ação default do put, se não fizermos isso vai dar um erro 500 */
        axios
        .put(`https://ironrest.herokuapp.com/catchapet/${params.id}`, form)
        .then((result) => navigate(`/pets/${form.species.toLowerCase()}`))
        .catch((error) => {
          console.error(error);
        });
    }

   

    return (
        <form onSubmit={handleSubmit}>
       
            <label htmlFor="petName">Nome do pet:</label>
            <input
                id="petName"
                placeholder="Rex"
                name="name"
                value={form.name}
                onChange={handleChange}
            />

            <p>Especie:</p>
            <label htmlFor="dog">Cão</label>
            <input
                id="dog"
                name="species"
                value="Dog"
                type="radio"
                checked={form.species === "Dog" ? true : false}
                onChange={handleChange}
            />
            <label htmlFor="cat">Gato</label>
            <input
                id="cat"
                name="species"
                value="Cat"
                checked={form.species === "Cat" ? true : false}
                type="radio"
                onChange={handleChange}
            />

            <p>Genero:</p>
            <label htmlFor="male">Male</label>
            <input
                id="male"
                name="gender"
                value="Male"
                checked={form.gender === "Male" ? true : false}
                type="radio"
                onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
            <input
                id="female"
                name="gender"
                value="Female"
                checked={form.gender === "Female" ? true : false}
                type="radio"
                onChange={handleChange}
            />

            <label htmlFor="age">Idade:</label>
            <input 
                id="age" 
                type="number" 
                name="age" 
                value={form.age} 
                onChange={handleChange} 
            />
            <label htmlFor="favoriteToy">Brinquedo Favorito:</label>
            <input
                id="favoriteToy"
                name="favoriteToy" 
                value={form.favoriteToy} 
                onChange={handleChange} 
            />
            <label htmlFor="img">Link da foto:</label>
            <input 
                id="img" 
                name="img" 
                value={form.img} 
                onChange={handleChange} 
            />
            <button type="submit">Cadastrar Pet! </button>
        </form>
    )
  }
  