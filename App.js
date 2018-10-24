import { createStackNavigator } from "react-navigation";
import Main from "./components/Main"


const App = createStackNavigator({
  Main: { screen: Main },

});

export default App;