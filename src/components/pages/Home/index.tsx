import React from 'react'
import { BankContext } from '../../../context/bankContext'
import Loading from '../../shared/Loading';
import BankList from './BankList';
import Actions from './Actions';
import { Alert } from 'reactstrap';

const Home = () => {
  const useBankContext = React.useContext(BankContext);
  return (
    <React.Fragment>
      {useBankContext?.banks === undefined ?
        <Loading />
        :
        <>
          <Actions />
          {useBankContext?.banks.length === 0 &&
            <Alert color="primary" className="mb-0 mt-3">
              No hay bancos disponibles.
            </Alert>
          }
          <BankList />
        </>
      }
    </React.Fragment>
  )
}

export default Home