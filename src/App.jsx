import './App.scss'
import { useState } from 'react';
import { MainContainerStyled } from './Components/MainContainer/MainContainer.Styled';
import { Header } from './Components/Header/Header'
import { Container } from './Components/Container/Container';
import { HomePage } from './Pages/HomePage/HomePage'
import { LectionsPage } from './Pages/LectionsPage/LectionsPage';
import { LocationsPage } from './Pages/LocationsPage/LocationsPage';
import { SpeciesPage } from './Pages/SpeciesPage/SpeciesPage';
import { DonatePage } from './Pages/DonatePage/DonatePage';
import { Errorpage } from './Pages/Errorpage/Errorpage'
import { SideBar } from './Components/SideBar/SideBar';
import { Routes, Route} from "react-router-dom";
import { items } from "./Components/Items/Items";

function App() {

  const [bgImage, setBgImage] = useState(items[0].image);
  const [title, setTitle] = useState(items[0].title);
  const [theme, setTheme] = useState(items[0].theme);
  const [article, setArticle] = useState(items[0].article);
  const [spiciesArticle, setSpiciesArticle] = useState(items[0].spiciesArticle);
  const [animate, setAnimate] = useState(false);

  const handleClick = (item) => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500);
    setBgImage(item.image);
    setTitle(item.title);
    setTheme(item.theme);
    setArticle(item.article);
    setSpiciesArticle(item.spiciesArticle);
  };

  return (
    <Container display="flex">
      <SideBar 
        setBgImage={setBgImage} 
        setTitle={setTitle} 
        setTheme={setTheme} 
        setArticle={setArticle} 
        setSpiciesArticle={setSpiciesArticle}
        items={items} 
        handleClick={handleClick}
      />
      <MainContainerStyled bgimage={bgImage} className={animate ? 'animate' : ''}>
        <Header/>
            <Routes>
              <Route index element={<HomePage title={title} theme={theme} article={article}/>} />
              <Route path="/Species" element={<SpeciesPage title={title} spiciesArticle={spiciesArticle} />} />
              <Route path="/Locations" element={<LocationsPage />} />
              <Route path="/Lections" element={<LectionsPage />} />
              <Route path="/Donate" element={<DonatePage />} />
              <Route path="*" element={<Errorpage />} />
            </Routes>
      </MainContainerStyled>
    </Container>
  )
}

export default App;