import MarcoAdmin from "../Admin/MarcoAdmin";
import UsuariosContainer from "./UsuariosContainer";

const Usuarios = () => (
  <MarcoAdmin title="Usuarios">
    {(tokenAuth) => <UsuariosContainer tokenAuth={tokenAuth} />}
  </MarcoAdmin>
);

export default Usuarios;
