
import './App.css'
import { BuildPage } from './components/BuildPage'
import { EmployersPage } from './components/EmployersPage'

import { Homepage } from './components/Homepage'
import { LocationPage } from './components/LocationPage'
import { ProgramPage } from './components/ProgramPage'
import { ProgramsPage } from './components/ProgramsPage'
import { QualificationsPage } from './components/QualificationsPage'
import { RankingPage } from './components/RankingPage'
import { UserInformation } from './components/UserInformation'
import { UserPage } from './components/UserPage'
import { FormPage } from './components/FormPage'

function App() {


  return (
    <>
      <Homepage /> 
      <UserInformation /> 
      <RankingPage/>
      <ProgramsPage/>
      <QualificationsPage/>
      <ProgramPage />
      <UserPage/>
      <LocationPage />
      <BuildPage />
      <EmployersPage />
      <FormPage />
    </>
  )
}

export default App
