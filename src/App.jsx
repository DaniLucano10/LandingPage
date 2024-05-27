
import './App.css'

import { Homepage } from './components/Homepage'
import { ProgramsPage } from './components/ProgramsPage'
import { QualificationsPage } from './components/QualificationsPage'
import { RankingPage } from './components/RankingPage'
import { UserInformation } from './components/UserInformation'

function App() {


  return (
    <>
      <Homepage /> 
      <UserInformation /> 
      <RankingPage/>
      <ProgramsPage/>
      <QualificationsPage/>
    </>
  )
}

export default App
