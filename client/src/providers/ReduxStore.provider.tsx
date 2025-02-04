import { store } from "src/redux"
import { Provider } from "react-redux"
import type { FCWithChildren } from "src/types"


const ReduxStoreProvider:FCWithChildren = ({children}) => {

  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default ReduxStoreProvider