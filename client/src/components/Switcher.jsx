import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HollywoodStudios from '../screens/HollywoodStudios'
import MagicKingdom from '../screens/MagicKingdom'
import AnimalKingdom from '../screens/AnimalKingdom'
import Epcot from '../screens/Epcot'

import MobileMagicKingdom from '../screens/Mobile/MobileMagicKingdom'

export default function Switcher() {
  return (
    <div>
      <Switch>
        <Route path='/parks/1'>
          <MagicKingdom />
          <MobileMagicKingdom />
        </Route>
        <Route path='/parks/2'>
          <HollywoodStudios />
        </Route>
        <Route path='/parks/3'>
          <Epcot />
        </Route>
        <Route path='/parks/4'>
          <AnimalKingdom />
        </Route>
      </Switch>
    </div>
  )
}
