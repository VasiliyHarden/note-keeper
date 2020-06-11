import React, {Fragment} from 'react';
import { Modal } from './components/Modals';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import Header from './components/Header/Header';


const NoteKeeperApp = () => {
  return(
  <Fragment>
    <Header />
    <DashboardPage />
    <Modal />
  </Fragment>
)};

export default NoteKeeperApp;