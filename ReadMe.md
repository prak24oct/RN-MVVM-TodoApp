# Todo App Documentation
This document provides an overview of a Todo app built with React Native using the Model-View-ViewModel (MVVM) architecture pattern and Redux for state management.


### Introduction
This Todo app is built with React Native, following the MVVM architecture pattern. It uses Redux for state management, ensuring a unidirectional data flow and a clear separation of concerns.

### MVVM Architecture
MVVM is an architectural pattern that facilitates the separation of the development of the graphical user interface (the view) from the development of the business logic or back-end logic (the model). This is achieved through the introduction of an intermediate component: the ViewModel.

#### Model: 
Model represents the data and the business logic of the application. In this app, the Redux store acts as the model.

#### View:
The UI layer, displaying data and routing user interactions to the ViewModel.


#### ViewModel:
Handles the presentation logic and state for a particular view, providing data from the Model to the View and processing user input.

#### Components and Files
1. HomeTodoScreen: Displays the list of todo items and a button to create new todos.
2. NewTodoScreen: Provides an interface to create a new todo item.
3. UpdateTodoScreen: Allows updating and deleting an existing todo item.
4. useHomeTodoController: View controller for HomeTodoScreen.
5. useNewTodoController: View controller for NewTodoScreen.
6. useUpdateTodoController: View controller for UpdateTodoScreen.
7. useTodoViewModel: ViewModel for todos.
8. Redux Slice: Manages the todo items' state.


### Installation
To install and run the app locally:

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-folder>
```

2. Install the dependencies:

```bash
npm install
```

#### Running the App
To run the app on an emulator or a physical device:

```bash
npm run android
# or
npm run ios
```