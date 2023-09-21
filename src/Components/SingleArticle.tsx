import { Card, ListGroup, Button } from "react-bootstrap"
import { Result } from "../Interfaces/Articles"
import { Link, useParams } from "react-router-dom"
interface SingleArticleProps {
    article: Result
}

const SingleArticle = ( {article} : SingleArticleProps) => {

    

   const published = new Date(article.published_at).toLocaleDateString()
    return(
        <div> 
     <Card style={{maxHeight: "300px"}}>
      <Card.Img variant="top" src={article.image_url} style={{objectFit: "cover", overflow: "hidden"}} />
      <Card.Body>
      <Card.Title  style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", margin: 0}}>
        {article.title}
        </Card.Title>
        <ListGroup>
            <ListGroup.Item className="border border-0 text-start p-0 mt-2">{published}</ListGroup.Item>
           <Link to={`/article/${article.id}`}> <Button className="border border-0 w-100  mt-3">Read the Summary</Button></Link>
     </ListGroup>
      </Card.Body>
    </Card>
      </div>
    )
}
export default SingleArticle