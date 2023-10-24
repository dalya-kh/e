import { ListGroup } from "./ListGroup";
import 'bootstrap/dist/css/bootstrap.css'
function App(props) {

  return (
    <>
 
     <ListGroup items={['Amman','London']}  heading="Cities" />
     <ListGroup items={['Apple','Banana']}  heading="Fruits" />
    </>
  );
}
export default App;
