import '../styles/globals.css'
import {ThirdwebWeb3Provider} from "@3rdweb/hooks"

const supportedChainId = [4];
const connectors = {
  injected:{}
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider 
        supportedChainIds={supportedChainId}
        connectors={connectors}
    >
         <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
