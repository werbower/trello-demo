import React from 'react';
import './App.css';
import { Card } from './Card';
import { Column } from './Column';
import { AppContainer } from './styles';
import { AddNewItem } from './AddNewItem';

function App() {
    return (
        <AppContainer>
            <Column text='To do'>
                <Card text='Generate app scaffold'></Card>
            </Column>
            <Column text='In Progress'>
                <Card text='Learn Typescript'></Card>
            </Column>
            <Column text='Done'>
                <Card text='Begin to use static typing'></Card>
            </Column>
            <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
        </AppContainer>
    );
}

export default App;
