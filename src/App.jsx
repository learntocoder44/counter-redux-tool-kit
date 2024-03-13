import { Provider } from "react-redux";
import "./App.css";
import store from "./Store/store";
import Counter from "./counter.jsx"; // Corrected import and component name

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
