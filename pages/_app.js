
import '../styles/globals.css'
import {BrowserRouter} from "react-router-dom"

function MyApp({ Component, pageProps }) {
  return  <Component {...pageProps} />
  // <BrowserRouter store={store}>
  //    {/* <Provider store={store}>
  //      <App />
  //     </Provider> */}
   
  {/* </BrowserRouter> */}

}

export default MyApp
