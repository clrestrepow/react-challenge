import React from 'react';
import { BankContext } from '../../../context/bankContext';
import { Button } from 'reactstrap';

const Actions = () => {
  const useBankContext = React.useContext(BankContext);
  return (
    <div className="mt-4 text-center">
      <Button color="primary ms-1 me-1" onClick={() => useBankContext?.clearCache()}>
        Eliminar caché
      </Button>
      <Button color="secondary ms-1 me-1" onClick={() => window.location.reload()}>
        Recargar página
      </Button>
    </div>
  )
}

export default Actions;