import React from 'react';
import { BankContext } from '../../../context/bankContext';
import { Col, Row } from 'reactstrap';
import BankCard from './BankCard';

const BankList = () => {
  const useBankContext = React.useContext(BankContext);
  return (
    <Row className="pt-4">
      {useBankContext?.banks?.map((item, index) => (
        <Col key={index} sm={6} md={4}>
          <BankCard bank={item} />
        </Col>
      ))}
    </Row>
  )
}

export default BankList;