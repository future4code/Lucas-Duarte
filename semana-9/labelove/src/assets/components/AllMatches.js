import React, { useState } from 'react';
import axios from 'axios';

export default function AllMatches() {

  const getMatches = async () => {

    try {
        const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucasduarte/matches")
        
        console.log("Matches:", response)
    }
    catch (error) {
        console.log("Erro:", error)
    }
}

    return(
        <div>

        </div>
    )

}