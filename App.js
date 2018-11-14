import { createStackNavigator } from "react-navigation";
import Main from "./components/Main"
import Screen2 from "./components/Screen2"

const App = createStackNavigator({
  Main: { screen: Main },
  Screen: { screen: Screen2 }
});

export default App;