import { store } from "../redux"
import { Provider } from "react-redux"
import type { FCWithChildren } from "../types"


const ReduxStoreProvider:FCWithChildren = ({children}) => {

  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default ReduxStoreProvider