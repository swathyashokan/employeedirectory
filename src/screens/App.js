import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmployeeList from './EmployeeList';
import EmployeeDetails from './EmployeeDetails';

const Stack = createNativeStackNavigator();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="EmployeeList" component={EmployeeList} />
                    <Stack.Screen name="EmployeeDetails" component={EmployeeDetails} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}


export default App;