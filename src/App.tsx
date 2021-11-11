import React, { useState } from 'react';


import SideBar, { GenreResponseProps } from './components/SideBar';
import Content from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';



export function App() {

  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);


  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar setSelectedGenre={setSelectedGenre} />

      <Content genre={selectedGenre} />
    </div>
  )
}