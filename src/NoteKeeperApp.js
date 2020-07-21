import React, {Fragment} from 'react';
import { Modal } from './components/Modals';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import Header from './components/Header/Header';
import LoginPage from './pages/LoginPage/LoginPage';


const NoteKeeperApp = () => {
  return(
    // <LoginPage />
    <Fragment>
      <Header />
      <DashboardPage />
      <Modal />
    </Fragment>
)};

export default NoteKeeperApp;