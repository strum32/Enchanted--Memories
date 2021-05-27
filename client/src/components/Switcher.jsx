import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HollywoodStudios from '../screens/HollywoodStudios'
import MagicKingdom from '../screens/MagicKingdom'
import AnimalKingdom from '../screens/AnimalKingdom'
import Epcot from '../screens/Epcot'
import MobileMagicKingdom from '../screens/Mobile/MobileMagicKingdom'
import MobileHolly from '../screens/Mobile/MobileHollyWood'
import MobileEpcot from '../screens/Mobile/MobileEpcot'
import MobileAnimal from '../screens/Mobile/MobileAnimal'

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
          <MobileHolly />
        </Route>
        <Route path='/parks/3'>
          <Epcot />
          <MobileEpcot/>
        </Route>
        <Route path='/parks/4'>
          <AnimalKingdom />
          <MobileAnimal />
        </Route>
      </Switch>
    </div>
  )
}
