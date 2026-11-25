import MarcoAdmin from "../Admin/MarcoAdmin";
import RolesContainer from "./RolesContainer";

const Roles = () => (
  <MarcoAdmin title="Roles">
    {(tokenAuth) => <RolesContainer tokenAuth={tokenAuth} />}
  </MarcoAdmin>
);

export default Roles;
