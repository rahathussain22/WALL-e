import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import RegistrationNavigation from "./RegistrationNavigation";
const AppNavigation = ()=>{
    return(
        <NavigationContainer>
            <RegistrationNavigation />
        </NavigationContainer>
    )
}

export default AppNavigation;