import React from 'react'
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from 'theme'
import ChatApp from 'components/ChatApp';

function App () {
  return (
    <ThemeProvider theme={theme}>
      <ChatApp />
    </ThemeProvider>
  )
}

export default App;
