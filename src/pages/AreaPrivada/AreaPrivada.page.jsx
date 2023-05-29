import EditarUsuario from "../../components/editar-usuario/EditarUsuario";
import "./AreaPrivada.css";

export default function AreaPrivadaPage() {
  return (
    <>
      <div className="total_privado">
        <h1 className="h1_privado">Área Privada</h1>
        <div className="div_area">
          
          <main>
            {/* Body de la pagina privada */}
            <EditarUsuario></EditarUsuario>
          </main>
        </div>
      </div>
    </>
  );
}
