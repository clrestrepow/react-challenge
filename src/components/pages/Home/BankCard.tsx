import React from 'react';
import { BankContext } from '../../../context/bankContext';
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { BankCardInterface } from '../../../interfaces/bankInterface';

const BankCard = ({ bank }: BankCardInterface) => {
  const useBankContext = React.useContext(BankContext);
  return (
    <Card
      className="mb-4"
      style={{
        width: '18rem',
        maxWidth: '100%',
        margin: 'auto'
      }}
    >
      <CardImg
        alt="Sample"
        src={bank.url}
        style={{
          height: 200
        }}
      />
      <CardBody>
        <CardTitle tag="h5">
          {bank.bankName}
        </CardTitle>
        <CardText>
          {bank.description}
        </CardText>
        <Button color="danger" onClick={() => useBankContext?.removeBank(bank.bankName)}>
          Eliminar
        </Button>
      </CardBody>
    </Card>
  )
}

export default BankCard;