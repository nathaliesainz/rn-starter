import React, {useState, useReducer} from "react";
import { View, Text, StyleSheet, Button} from 'react-native';

const reducer = (state, action) => {
    // state === { counter: number }
    // action === { type: 'increment' || 'decrement', payload: 1 }

    switch(action.type) {
        case 'increment':
            return { ...state, counter: state.counter + action.payload };
        case 'decrement':
            return { ...state, counter: state.counter - action.payload };
        default:
            return state;
    }
};


const CounterScreen = () => {
    // instead of const [counter, setCounter] = useState(0); this:
    const [state, runReducer] = useReducer(reducer, {counter: 0} )

    return (
    <View>
        <Button 
            title="Increase" 
            onPress={ () => {
                runReducer({ type: 'increment', payload: 1 })
            }} />
        <Button 
        title="Decrease" 
        onPress={ () => {
            runReducer({ type: 'decrement', payload: 1 })
        }} />
        <Text>Current Count: {state.counter} </Text>
    </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;