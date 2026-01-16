import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

import { User } from "../context/UserProvider";

const AppRouter = () => {
  const [banderaLogin, setBanderaLogin] = useState(false);
  const { state } = useContext(User);

  return (
    <div>
      <Router>
        <Routes>
          {/* {window?.location?.pathname === '/' && (
            <Route path='*' element={<Navigate to='/login' replace />} />
          )} */}

          {!state || !state.token || state.userToken === '' ? (
            <Route
              path="/*"
              element={
                <PublicRoutes
                  banderaLogin={banderaLogin}
                  setBanderaLogin={setBanderaLogin}
                />
              }
            />
          ) : (
            <Route path="/*" element={<PrivateRoutes token={state} />} />
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
