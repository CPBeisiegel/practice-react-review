import { useState } from "react"


export function PostNewPets() {
    // Um formulário vai precisar de um state


    const [form, setForm] = useState({
        name: "",
        species: "",
        gender: "",
        age: 0,
        favoriteToy: "",
        img: "",
    })


    function handleChange(event) {
        setForm({...form, [event.target.name]: event.target.value})
    }

    return (
        <form>
       
        <label for="petName">Nome do pet:</label>
        <input
            id="petName"
            placeholder="Rex"
            name="name"
            value={form.name}
            onChange={handleChange}
        />
        <p>Especie:</p>
        <label for="dog">Cão</label>
        <input
            id="dog"
            name="species"
            value="Dog"
            type="radio"
            onChange={handleChange}
        />
        <label for="cat">Gato</label>
        <input
            id="cat"
            name="species"
            value="Cat"
            type="radio"
            onChange={handleChange}
        />
        <p>Genero:</p>
        <label for="male">Male</label>
        <input
            id="male"
            name="gender"
            value="Male"
            type="radio"
            onChange={handleChange}
        />
        <label for="female">Female</label>
        <input
            id="female"
            name="gender"
            value="Female"
            type="radio"
            onChange={handleChange}
        />
        <label for="age">Idade:</label>
        <input 
            id="age" 
            type="number" 
            name="age" 
            value={form.age} 
            onChange={handleChange} 
        />
        <label for="favoriteToy">Brinquedo Favorito:</label>
        <input
            id="favoriteToy"
            name="favoriteToy" 
            value={form.favorite} 
            onChange={handleChange} 
         />
        <label for="img">Link da foto:</label>
        <input 
            id="img" 
            name="img" 
            value={form.img} 
            onChange={handleChange} 
        />
            
        </form>
    )
  }
  

  
// CRUD - CREATE, READ, UPDATE and DELETE
// 1 CRUD COMPLETO