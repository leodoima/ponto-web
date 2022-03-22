import styled from "styled-components";

const Container = styled.nav`
    width: 300px;
    height: 100vh;

    margin: 0px;
    background-color: #1D254E;
`;


const List = styled.ul`
    height: auto;
    padding: 0;
    width: 100%;
`;

const Row = styled.li`
    width: 100%;
    height: 60px;
    list-style-type: none;
    margin: 0%;
    display: flex;
    flex-direction: row;
    color: #FFFFFF;
    justify-content: center;
    align-items: center;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        background-color: #8D91A5;
    }
`;

const Icon = styled.div`
    flex: 30%;
    display: grid;
    place-items: center;
`;

const Title = styled.div`
    flex: 70%;
    font-size: 16px;
`;

const Image = styled.image`
    width: 56px;
    height: 56px;
`;

export {Container, List, Row, Icon, Title, Image};