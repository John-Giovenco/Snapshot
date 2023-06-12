import React from "react"
import Card from "react-bootstrap/Card"
import profile from './cladden-photo.jpeg'

function GitHubCard() {
  const imgStyle = {
    maxWidth: "50%",
    borderRadius: "20px"
  };

  return (
      <div className="card">
        <Card style={{ paddingTop: "5em"}}>
        <Card.Img style={imgStyle} variant="top" src={profile} />
        <Card.Body>
            <Card.Title>Chris Ladden</Card.Title>
            <Card.Text>
            I'm a multi-diciplinary designer and developer living in Olathe, Kansas!
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard