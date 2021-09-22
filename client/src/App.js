import { useEffect, useState } from 'react'
import './App.css'
import './fonts/Fira_Sans_Condensed/index.css'
import './fonts/Josefin_Sans/index.css'
import './fonts/Overpass/index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/badge/:language/:bgColor/' children={<Child />} />
        </Switch>
      </Router>
    </>
  )
}
function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { language, bgColor, color } = useParams()
  switch (bgColor) {
    case 'black':
      bgColor = '2a2f33'
      color = 'e9eaea'
      break
    case 'blue':
      bgColor = '41B9E1'
      color = 'ECF8FC'
      break
    case 'pink':
      bgColor = 'FFB6C1'
      color = 'fff7f8'
      break
    case 'green':
      bgColor = '228B22'
      color = 'e8f3e8'
      break
    case 'yellow':
      bgColor = 'FFBF00'
      color = '191300'
      break
    case 'orange':
      bgColor = 'EC5800'
      color = 'fdeee5'
      break
    case 'brown':
      bgColor = '6F4E37'
      color = 'f0edeb'
      break
    case 'red':
      bgColor = 'D22B2B'
      color = 'fdf8f8'
      break
    case 'purple':
      bgColor = '5a4c65'
      color = 'dedbe0'
      break
    case 'silver':
      bgColor = 'f2f2f2'
      color = '191919'
      break
    default:
      bgColor = '2a2f33'
      color = 'e9eaea'
  }

  return (
    <div
      style={{
        backgroundColor: `#${bgColor}`,
        display: 'inline-block',
        fontFamily: 'Fira Sans',
        cursor: 'default',
      }}
    >
      {console.log(useParams())}
      <p
        style={{
          margin: 0,
          color: `#${color}`,
          fontWeight: 'bold',
          padding: '4px 10px',
        }}
      >
        {language.toUpperCase()}
      </p>
    </div>
  )
}

export default App
