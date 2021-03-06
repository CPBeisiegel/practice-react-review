import { useState } from "react";
import axios from "axios";
// O navigate serve para redirecionarmos apos o submit do form 
import {useNavigate} from "react-router-dom"

export function PostNewPets() {
    // Um formulário vai precisar de um state
    const navigate = useNavigate()
    /* Colocamos o useState para obter as informações do formulário e posteriormente atualiza-las com o uso do setForm  */
    const [form, setForm] = useState({
        name: "",
        species: "",
        gender: "",
        age: 1,
        favoriteToy: "",
        img: "",
    })

    /* A função handleChange foi criada para pegarmos os elementos inseridos no formulário apartir do event.target, que pega o input e o seu valor inserido na hora do cadastro */
    function handleChange(event) {
        setForm({...form, [event.target.name]: event.target.value})
    }
    /* A função handleSubmit tem como objetivo pegar as informações colocadas no formulário e envia-las para a api através do uso do axios.post */
    async function handleSubmit(event){
        event.preventDefault()
        /* Usamos um for in para verificar se nenhum dos campos está sendo enviado vazio, isso ajuda a não permitir que um dado vazio ou incompleto seja inserido na api e a quebre */
        for(let key in form){
            if (!form[key]) {
                window.alert(`Gentileza preencher o campo ${key} corretamente`);
                return;
              }
        }
        /* Para cadastrar as informações do form, usamos o método http post juntamente com o axios. Diferentemente do get, precisamos passar os endpoints da api que precisamos preencher */
        try{
            await axios.post("https://ironrest.herokuapp.com/catchapet", form)
            // Ele acontece depois da ação do axios ocorrer após o envio das informações ter acontecido
            navigate(`/pets/${form.species.toLowerCase()}`)

        } catch(error){
            console.error(error);
        }
    }

    /* Pegando sempre o nome dos campos dos elementos que queremos enviar para a nossa api (form.value) */

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
                onChange={handleChange}
            />
            <label htmlFor="cat">Gato</label>
            <input
                id="cat"
                name="species"
                value="Cat"
                type="radio"
                onChange={handleChange}
            />
            <p>Genero:</p>
            <label htmlFor="male">Male</label>
            <input
                id="male"
                name="gender"
                value="Male"
                type="radio"
                onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
            <input
                id="female"
                name="gender"
                value="Female"
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
                value={form.favorite} 
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
  

  
// CRUD - CREATE, READ, UPDATE and DELETE
// 1 CRUD COMPLETO