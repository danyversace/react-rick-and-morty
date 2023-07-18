import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './CharacterDetails.css'
import axios from 'axios'

function CharacterDetails() {


        //this page shows details for a specific character
        //how do i know which character


        const {characterId} = useParams()

        //need to show info for this character when the page loads
        // https://rickandmortyapi.com/api/character/5

        // create state to hold details for this character

        const [character, setCharacter] = React.useState('')

    useEffect(
        ()=> {
            console.log('get details for', characterId)
            //call api to get the data
            axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(res => {
                console.log(res.data)
                //I have the data, what do i do with it?

                setCharacter(res.data)

            })
            .catch(err=> console.log(err))


        }, [] // run Once when the page loads
    )
    



  return (
    <div className='details-container'>
        <img src={character?.image} alt="" />
        <div className='container-info'>
            <p>Name: {character?.name}</p>
            <p>Gender: {character?.gender}</p>
            <p>Location: {character?.location?.name}</p>
            <p>Species: {character?.species}</p>
        </div>
        
    </div>
  )
}

export default CharacterDetails