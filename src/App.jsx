import Card from "./Components/Card";
import MainContent from "./Components/MainContent";
import './index.css'

const App = () => {
  
    return (
    <>
      
    <MainContent />
    <Card
    Titulo = {"Noticia 1"}
    categoria = {"Política"}
    parágrafo = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rerum, dolores perspiciatis mollitia error quis veniam consequuntur? Molestias reprehenderit adipisci recusandae vero, nesciunt reiciendis veniam nostrum, provident, quod perferendis molestiae."} 
    />
    <Card
    Titulo = {"Noticia 2"}
    categoria = {"Educação"}
    parágrafo = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rerum, dolores perspiciatis mollitia error quis veniam consequuntur? Molestias reprehenderit adipisci recusandae vero, nesciunt reiciendis veniam nostrum, provident, quod perferendis molestiae."} 
    />
    <Card
    Titulo = {"Noticia 3"}
    categoria = {"Esporte"}
    parágrafo = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rerum, dolores perspiciatis mollitia error quis veniam consequuntur? Molestias reprehenderit adipisci recusandae vero, nesciunt reiciendis veniam nostrum, provident, quod perferendis molestiae."} 
    />
    </>
    );
  };


export default App;