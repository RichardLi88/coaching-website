import { lazy, useContext, Suspense } from "react";
import Background from "../components/utility/Background";
import { userContext } from "../contexts/UserContext";
import HomePage from "./HomePage";

const Member = lazy(() => import("./Member"));
const Admin = lazy(() => import("./Admin"));

function Home() {
  const { user } = useContext(userContext);

  return (
    <>
      <Suspense>
        {!user && <HomePage />}
        {user && user.isAdmin === false && <Member />}
        {user && user.isAdmin === true && <Admin />}
      </Suspense>
    </>
  );
}

export default Home;
