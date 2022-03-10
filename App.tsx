import { Provider as PaperProvider } from 'react-native-paper'
import theme from './src/theme/basePaperTheme'
import RootNavigator from './src/navigation/RootNavigation'

const App = () => {
  return (
    <PaperProvider theme={theme}>
        <RootNavigator />
    </PaperProvider>
  );
}

export default App

