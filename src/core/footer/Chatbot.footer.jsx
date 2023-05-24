import ChatBot from 'react-simple-chatbot';


 const Chatbot = () => {
     const steps = [
       {
         id: '1',
         message: '¡Hola! ¿En qué puedo ayudarte hoy?',
         trigger: '2',
       },
       {
         id: '2',
         user: true,
         trigger: '3',
       },
       {
        id: "3",
        message: "Claro, podrias decirme la fecha y el modelo que estas buscando?",
        trigger: "4"
    },
    {
        id: "4",
        user: true,
        trigger: "5"
    },
    {
        id: "5",
        message: "Perfecto, tenemos lo que esta buscando!",
        trigger: "6"
    }, 
    {
        id: "6",
        user: true,
        trigger: "7"
    },
    {
        id: "7",
        message: "Le ayudo en algo mas?",
        trigger: "8"
    }, 
    {
        id: "8",
        user: true,
        trigger: "9"
    },
    {
        id: "9",
        message: "Un gusto, hasta luego!!",
        end: true
    }, 
     ];

    return <ChatBot steps={steps} />;
  };

  export default Chatbot;