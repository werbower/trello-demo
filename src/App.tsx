import React from 'react';
import './App.css';
import { Column } from './Column';
import { AppContainer } from './styles';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './AppStateContext';
import { CustomDragLayer } from './CustomDragLayer';

function App() {
    const { state, dispatch } = useAppState();

    return (
        <AppContainer>
            <CustomDragLayer />
            {state && Array.isArray(state.lists)
                ? state.lists.map((list, i) => (
                      <Column
                          id={list.id}
                          text={list.text}
                          key={list.id}
                          index={i}
                      />
                  ))
                : null}

            <AddNewItem
                toggleButtonText='+ Add another list'
                onAdd={(text) => dispatch({ type: 'ADD_LIST', payload: text })}
            />
        </AppContainer>
    );
}

export default App;
