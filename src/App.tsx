import { Provider } from "react-redux";
import store from "./stores/store";

import AppLayout from "./screens/_layout";

const App = () => {
    return (
      <Provider store={store}>
        <AppLayout />
      </Provider>
    );
}

export default App;