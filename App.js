import { createStackNavigator } from "react-navigation";
import Main from "./components/Main"
import Screen2 from "./components/Screen2"
import EditUser from "./components/EditUser"

const App = createStackNavigator({
  Main: { screen: Main },
  Screen: { screen: Screen2 },
  EditUser: { screen: EditUser }
});

export default App;