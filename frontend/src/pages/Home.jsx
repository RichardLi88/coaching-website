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
        {user && <Member />}
      </Suspense>
    </>
  );
}

export default Home;
