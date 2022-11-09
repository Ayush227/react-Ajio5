import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function ImageAndTextExample() {
  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-DailyBanner-Header.jpg"
        />
      </Card>
    </div>
   
  );
}
export default function ImageAndTextExample1() {
  return (
    <div>
      <br />
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-Topbanner-header.jpg"
        />
      </Card>
      <br />
    </div>
  );
}

export default ImageAndTextExample;