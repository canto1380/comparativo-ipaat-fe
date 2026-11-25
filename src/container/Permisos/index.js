import MarcoAdmin from "../Admin/MarcoAdmin";
import PermisosContainer from "./PermisosContainer";

const Permisos = () => (
  <MarcoAdmin title="Permisos">
    {(tokenAuth) => <PermisosContainer tokenAuth={tokenAuth} />}
  </MarcoAdmin>
);

export default Permisos;
