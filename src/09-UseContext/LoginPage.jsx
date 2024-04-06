import { useContext } from "react"
import { UserContext } from "./context/USerContext";

export const LoginPage = () => {
  const {user,setUser}=useContext(UserContext);
  return (
    <>
    <h1>LoginPage</h1>
    <hr />

    <pre aria-label="pre">{JSON.stringify(user,null,3)}</pre>

    <button aria-label="user"
    className="btn btn-primary"
    onClick={()=> setUser({id:123,name:'Juan',email:'gaaaa'})}
    >Establecer Usuario</button>
    </>
  )
}
