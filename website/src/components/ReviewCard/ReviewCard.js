import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ReviewCard(){
  return(
  <Card className="text-center">
    <Card.Header>Current Review:</Card.Header>
      <Card.Body>
        <Card.Title>123. Two Sum</Card.Title>
        <Button variant="primary">Practice</Button>
        <Card.Text>
          <br />
          Notes:
          <br />
          -Use a dictionary!
          <br />
          -O(n) Runtime!
        </Card.Text>
      </Card.Body>
    <Card.Footer className="text-muted">Last Reviewed 2 days ago</Card.Footer>
  </Card>

  );
}

export default ReviewCard