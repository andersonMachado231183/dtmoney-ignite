import { GlobalStyle } from "./styles/global";
import { Header } from './components/Header';
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

export function App() {

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransationModal(){
        setIsNewTransactionModalOpen(true);
    }
    function handleCloseNewTransationModal(){
        setIsNewTransactionModalOpen(false);
    }

  return (
    <>
    <Header onOpenNewTransactionModal={handleOpenNewTransationModal}/>
    <Dashboard />
    <GlobalStyle />
    <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransationModal}
    />
    </>
  );
}