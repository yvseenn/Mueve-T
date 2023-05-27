// import ChatBot from 'react-simple-chatbot';


//  const Chatbot = () => {
//      const steps = [
//        {
//          id: '1',
//          message: '¡Hola! ¿En qué puedo ayudarte hoy?',
//          trigger: '2',
//        },
//        {
//          id: '2',
//          user: true,
//          trigger: '3',
//        },
//        {
//         id: "3",
//         message: "Claro, podrias decirme la fecha y el modelo que estas buscando?",
//         trigger: "4"
//     },
//     {
//         id: "4",
//         user: true,
//         trigger: "5"
//     },
//     {
//         id: "5",
//         message: "Perfecto, tenemos lo que esta buscando!",
//         trigger: "6"
//     }, 
//     {
//         id: "6",
//         user: true,
//         trigger: "7"
//     },
//     {
//         id: "7",
//         message: "Le ayudo en algo mas?",
//         trigger: "8"
//     }, 
//     {
//         id: "8",
//         user: true,
//         trigger: "9"
//     },
//     {
//         id: "9",
//         message: "Un gusto, hasta luego!!",
//         end: true
//     }, 
//      ];

//     return <ChatBot steps={steps} />;
//   };

//   export default Chatbot;




// import React, { useState } from 'react';
// import ChatBot from 'react-simple-chatbot';

// const Chatbot = () => {
//   const [chatOpened, setChatOpened] = useState(false);
//   const [userResponses, setUserResponses] = useState({});

//   const handleEnd = ({ steps, values }) => {
//     setUserResponses(values);
//   };

//   const handleButtonClick = () => {
//     setChatOpened(true);
//   };

//   const steps = [
//     {
//       id: '1',
//       message: '¡Hola! Soy un chatbot. ¿En qué puedo ayudarte hoy?',
//       trigger: '2',
//     },
//     {
//       id: '2',
//       user: true,
//       trigger: '3',
//     },
//     {
//       id: '3',
//       message: 'Entendido, estás buscando {previousValue}. ¿Es correcto?',
//       trigger: '4',
//     },
//     {
//       id: '4',
//       options: [
//         { value: 'sí', label: 'Sí', trigger: '5' },
//         { value: 'no', label: 'No', trigger: '6' },
//       ],
//     },
//     {
//       id: '5',
//       message: 'Perfecto, ¡encontré lo que buscas!',
//       end: true,
//     },
//     {
//       id: '6',
//       message: 'Disculpa por la confusión. Por favor, reformula tu pregunta para ayudarte mejor.',
//       trigger: '2',
//     },
//   ];

//   return (
//     <div>
//       {chatOpened ? (
//         <ChatBot
//           steps={steps}
//           handleEnd={handleEnd}
//           botDelay={1000}
//           userDelay={1000}
//           hideUserAvatar
//           hideBotAvatar
//         />
//       ) : (
//         <button onClick={handleButtonClick}>Abrir Chatbot</button>
//       )}

//       {Object.keys(userResponses).length > 0 && (
//         <div>
//           <h3>Tus respuestas:</h3>
//           <p>Pregunta: {userResponses['2']}</p>
//           <p>Respuesta: {userResponses['3']}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;

  

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
        <button onClick={handleOpenChatbot}>Abrir Chatbot</button>
      ) : (
        <div>
          <ChatBot
            steps={steps}
            handleEnd={handleEnd}
            botDelay={1000}
            userDelay={1000}
            hideUserAvatar
            hideBotAvatar
          />
          <button onClick={handleCloseChatbot}>Cerrar Chatbot</button>
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
