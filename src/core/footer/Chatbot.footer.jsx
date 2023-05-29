import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import './Chatbot.css';

const Chatbot = () => {
  const [chatOpened, setChatOpened] = useState(false);
  const [userResponses, setUserResponses] = useState({});

  const handleEnd = ({ steps, values }) => {
    setUserResponses(values);
  };

  const handleOpenChatbot = () => {
    setChatOpened(true);
  };

  const handleCloseChatbot = () => {
    setChatOpened(false);
  };

  const steps = [
    {
      id: '1',
      message: '¡Hola! Bienvenido a Mueve-t. ¿En qué puedo ayudarte hoy?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Entendido. ¿Podrías decirme más detalles sobre el coche que estás buscando?',
      trigger: '4',
    },
    {
      id: '4',
      user: true,
      trigger: '5',
    },
    {
      id: '5',
      message: 'Perfecto, estamos buscando coches que coincidan con tus preferencias. ¡Te mostraremos las opciones disponibles!',
      trigger: '6',
    },
    {
      id: '6',
      message: 'Disculpa, no pude entender bien. ¿Podrías reformular tu pregunta o proporcionar más detalles?',
      trigger: '4',
    },
    {
        id: '6',
        user: true,
        trigger: '7',
      },
      {
        id: '7',
        message:'Nos pondremos en contacto contigo lo antes posible. Muchas gracias!',
        end: true
      },
  ];

  return (
    <div>
      {!chatOpened ? (
        <button className='button_chatbot' onClick={handleOpenChatbot}>Abrir Chatbot</button>
      ) : (
        <div className='chatbot'>
          <ChatBot
            steps={steps}
            handleEnd={handleEnd}
            botDelay={1000}
            userDelay={1000}
            hideUserAvatar
            hideBotAvatar
          />
          <button className='button_chatbot' onClick={handleCloseChatbot}>Cerrar Chatbot</button>
        </div>
      )}

      {Object.keys(userResponses).length > 0 && (
        <div>
          <h3>Tus respuestas:</h3>
          <p>Pregunta: {userResponses['2']}</p>
          <p>Respuesta: {userResponses['4']}</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
