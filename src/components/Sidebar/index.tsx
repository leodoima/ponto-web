import React from 'react';
import { FaHome, FaRegClock, FaRegFileAlt } from "react-icons/fa";


import {Container, List, Row, Icon, Title} from './styles';

 const sidebarData = [
     {
         title: "Inicio",
         icon: <FaHome/>,
         link: "/inicio"
     },
     {
        title: "Histórico",
        icon: <FaRegClock />,
        link: "/historico"
    },
    {
        title: "Exportar",
        icon: <FaRegFileAlt />,
        link: "/exportar"
    },
 ]


function Home(){
    return(
        <>
            <Container>
                <List className='SidebarList'>
                    {sidebarData.map((val, key) => {
                        return(
                            <Row
                                key={key}
                                onClick={() => {
                                    console.log(val.link);
                                }}>
                                <Icon>{val.icon}</Icon><Title>{val.title}</Title>
                            </Row>
                        );
                    })}
                </List>
            </Container>
        </>
    );
}

export default Home;