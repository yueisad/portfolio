import React from 'react';
import { FaGithub, FaSpotify, FaLinkedin   } from 'react-icons/fa';

function SocialMedia() {
  return (
    <div className="app__social">
        <div>
            <a href="https://www.linkedin.com/in/alden-park/" target="_blank">
               <FaLinkedin /> 
            </a>
        </div>
        <div>
            <a href="https://github.com/yueisad" target="_blank">
               <FaGithub/> 
            </a>
        </div>
        <div>
            <a href="https://open.spotify.com/artist/3BAEcQIYh5RuryfojaY0Pb?si=9AFySbeWQcCacN2un8-a_Q" target="_blank">
               <FaSpotify/> 
            </a>
        </div>
    </div>
    )
}

export default SocialMedia