import { NavigationContainer } from '@react-navigation/native' // Componente para efetuar a navegação entre telas
import { createNativeStackNavigator } from '@react-navigation/native-stack' //Biblioteca de navegação
import React, { useState } from 'react';

import AuthProvider from './src/contexts/auth';

//Páginas
import Routes from './src/routes';
import Inicio from './src/pages/Inicial';
import Cadastro from './src/pages/Cadastro';
import Login from './src/pages/Login';
import Objetivo from './src/pages/Money/Objetivos';
import Gasto from './src/pages/Money/Gastos';
import InformConta from './src/pages/Config/informConta';

const Stack = createNativeStackNavigator() // Constante de navegação

export default function App () {

    return (
      
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
          >

            <Stack.Screen 
              name='Inicio'
              component={Inicio}
              options={{
                statusBarColor: '#161F4E'
              }}
            />

            <Stack.Screen 
              name='Cadastro'
              component={Cadastro}
              options={{
                statusBarColor: '#161F4E'
              }}
            />

            <Stack.Screen 
              name='Login'
              component={Login}
              options={{
                statusBarColor: '#161F4E'
              }}
            />

            <Stack.Screen 
              name='Routes'
              component={Routes}
              options={{
                statusBarColor: '#000',
                statusBarStyle: 'light'
              }}
            />
          
            <Stack.Screen
            name='Objetivo'
            component={Objetivo}
            options={{
              headerShown: true,
              headerTitle: 'VOLTAR',
              headerTintColor: '#FFF',
              statusBarColor: '#161F4E',
              headerStyle: {
                backgroundColor: '#161F4E'
              }
            }}
            />

            <Stack.Screen
              name='Gasto'
              component={Gasto}
              options={{
                headerShown: true,
                headerTitle: 'VOLTAR',
                headerTintColor: '#FFF',
                statusBarColor: '#161F4E',
                headerStyle: {
                  backgroundColor: '#161F4E'
                }
              }}
            />

            <Stack.Screen
              name='InformConta'
              component={InformConta}
              options={{
                statusBarColor: '#000',
                statusBarStyle: 'light',
                headerShown: true,
                headerTitle: 'VOLTAR'
              }}
            />

          </Stack.Navigator>
        </AuthProvider>

      </NavigationContainer>
    );
}