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
           <FaSpotify /> 
        </div>
    </div>
    )
}

export default SocialMedia