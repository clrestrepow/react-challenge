import React from 'react'
import { Spinner, Button, Col, Row } from 'reactstrap'

const Loading = () => {
  return (
    <div className="d-flex justify-content-center text-center mb-2">
      <Row>
        <Col sm={12}>
          <Spinner
            color="danger"
            type="grow"
            className="m-2"
          >
            Loading...
          </Spinner>
          <Spinner
            color="warning"
            type="grow"
            className="m-2"
          >
            Loading...
          </Spinner>
          <Spinner
            color="info"
            type="grow"
            className="m-2"
          >
            Loading...
          </Spinner>
        </Col>
        <Col sm={12}>
          <Button
            color="default"
            disabled
          >
            <Spinner size="sm">
              Loading...
            </Spinner>
            <span>
              {' '}Loading
            </span>
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default Loading