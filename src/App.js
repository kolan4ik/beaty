import React, {useState} from 'react';
import {
  HashRouter as Router,
  Switch,
  BrowserRouter,
  Route,
} from "react-router-dom";


import {LINKS_HOME, LINKS_ADD_PERSONAL, LINKS_ADD_PERSONAL_POSITION, LINKS_ADD_PERSONAL_PAY, LINKS_ADD_PERSONAL_SUCCESS, LINKS_CREATE_SERVICES, LINKS_CREATE_SERVICES_STEP1, LINKS_CREATE_SERVICES_STEP2, LINKS_CREATE_SERVICES_STEP3, LINKS_CREATE_SERVICES_STEP4, LINKS_CREATE_SERVICES_STEP5, LINKS_CREATE_SERVICES_SUCCESS, LINKS_MONEY, LINKS_MONEY_BONUS, LINKS_MONEY_BONUS_CART, LINKS_BRANCH, LINKS_BRANCH_SERVICES, LINKS_BRANCH_PERSONAL, LINKS_BRANCH_TIME, LINKS_BRANCH_SUCCESS} from './links';

import {createBrowserHistory} from "history";

import Nav from "./components/Nav";
import TopBack from "./components/TopBack";

import MapList from "./components/MapList"
import Branch from "./components/Branch"
import BranchServices from "./components/BranchServices"
import BranchPersonal from "./components/BranchPersonal"
import BranchTime from "./components/BranchTime"
import BranchSuccess from "./components/BranchSuccess"

import Money from "./components/Money"
import MoneyBonus from "./components/MoneyBonus"
import MoneyBonusCash from "./components/MoneyBonusCash"

import AddPersonal from "./components/AddPersonal"
import AddPersonalPosition from "./components/AddPersonalPosition"
import AppPersonalPay from "./components/AddPersonalPay"
import AddPersonalSuccess from "./components/AddPersonalSuccess"

import CreateServices from "./components/CreateServices"
import CreateServicesStep1 from "./components/CreateServicesStep1"
import CreateServicesStep2 from "./components/CreateServicesStep2"
import CreateServicesStep3 from "./components/CreateServicesStep3"
import CreateServicesStep4 from "./components/CreateServicesStep4"
import CreateServicesStep5 from "./components/CreateServicesStep5"

const history = createBrowserHistory();

function App() {
  const [colorBg, setColorBg] = useState("#F5F5F5");
  return (
    <div style={{background: colorBg}} className="App">
      <BrowserRouter history={history}>
        <Router>
          <Switch>
            <Route exact path={LINKS_ADD_PERSONAL}>
              <TopBack title="Ура новый сотрудник"/>
              <AddPersonal changeBg={() => setColorBg('#013AAB')}/>
            </Route>
            <Route path={LINKS_ADD_PERSONAL_POSITION}>
              <TopBack title=""/>
              <AddPersonalPosition changeBg={() => setColorBg('#013AAB')}/>
            </Route>
            <Route path={LINKS_ADD_PERSONAL_PAY}>
              <TopBack title=""/>
              <AppPersonalPay changeBg={() => setColorBg('#013AAB')}/>
            </Route>
            <Route path={LINKS_ADD_PERSONAL_SUCCESS}>
              <AddPersonalSuccess title='Сотрудник в команде' linkText="Открыть список сотрудников" text='Если вы хотите настроить услуги мастера индивидуально, то это можно сделать в карточке сотрудника)' changeBg={() => setColorBg('#F5F5F5')}/>
            </Route>


            <Route exact path={LINKS_CREATE_SERVICES}>
              <TopBack title="Вау новая услуга"/>
              <CreateServices changeBg={() => setColorBg('#013AAB')}/>
            </Route>
            <Route exact path={LINKS_CREATE_SERVICES_STEP1}>
              <TopBack title="Вау новая услуга"/>
              <CreateServicesStep1 changeBg={() => setColorBg('#013AAB')}/>
            </Route>
            <Route exact path={LINKS_CREATE_SERVICES_STEP2}>
              <TopBack title=""/>
              <CreateServicesStep2 changeBg={() => setColorBg('#013AAB')}/>
            </Route>
            <Route exact path={LINKS_CREATE_SERVICES_STEP3}>
              <TopBack title=""/>
              <CreateServicesStep3 changeBg={() => setColorBg('#013AAB')}/>
            </Route>
            <Route exact path={LINKS_CREATE_SERVICES_STEP4}>
              <TopBack title=""/>
              <CreateServicesStep4 changeBg={() => setColorBg('#013AAB')}/>
            </Route>
            <Route exact path={LINKS_CREATE_SERVICES_STEP5}>
              <TopBack title=""/>
              <CreateServicesStep5 changeBg={() => setColorBg('#013AAB')}/>
            </Route>
            <Route exact path={LINKS_CREATE_SERVICES_SUCCESS}>
              <AddPersonalSuccess title='Услуга создана!' linkText="Открыть список услуг" text='' changeBg={() => setColorBg('#F5F5F5')}/>
            </Route>


            <Route exact path={LINKS_MONEY}>
              <Nav/>
              <Money changeBg={() => setColorBg('#AA00FF')}/>
            </Route>
            <Route exact path={LINKS_MONEY_BONUS}>
              <Nav/>
              <MoneyBonus changeBg={() => setColorBg('#AA00FF')}/>
            </Route>
            <Route exact path={LINKS_MONEY_BONUS_CART}>
              <Nav/>
              <MoneyBonusCash changeBg={() => setColorBg('#AA00FF')}/>
            </Route>


            <Route exact path={LINKS_BRANCH}>
              <Branch changeBg={() => setColorBg('#F5F5F5')}/>
            </Route>
            <Route path={LINKS_BRANCH_SERVICES}>
              <BranchServices changeBg={() => setColorBg('#F5F5F5')}/>
            </Route>
            <Route path={LINKS_BRANCH_PERSONAL}>
              <BranchPersonal changeBg={() => setColorBg('#F5F5F5')}/>
            </Route>
            <Route path={LINKS_BRANCH_TIME}>
              <BranchTime changeBg={() => setColorBg('#F5F5F5')}/>
            </Route>
            <Route path={LINKS_BRANCH_SUCCESS}>
              <BranchSuccess changeBg={() => setColorBg('#F5F5F5')}/>
            </Route>
            <Route path={LINKS_HOME}>
              <MapList changeBg={() => setColorBg('#F5F5F5')}/>
            </Route>

          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
