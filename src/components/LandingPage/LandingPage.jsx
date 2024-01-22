import React from 'react';
import style from "./LandingPage.module.css"
import NavBar from '../Navbar/NavBar';
import ChatPage from '../Chat/ChatPage';
import { useNavigate } from 'react-router-dom';
import  { useState, useEffect } from 'react';
import socketIO from 'socket.io-client';

function LandingPage(props) {
  

const socket = socketIO.connect('http://localhost:5173');
socket.on('message', (data) => {
    console.log('Message received:', data);
  }); 
   
    return (
        <div>
          <NavBar/>
            <ChatPage socket={socket}/>
        </div>
    );
}

export default LandingPage;