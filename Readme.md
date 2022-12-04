# Introduction to React states and hooks

[Slides](https://docs.google.com/presentation/d/19eyWhEGqPNrUt5GNT1-iCpobScdBIsu9dPSvcicWDUs/edit?usp=sharing)

## Part 1. 
- Properties (props) and components
- Syntax of "functional" component
- Component state
- Who should control the state?
- Handle async state updates (animation, disable actions)

A React component defines part of the application (DOM / UI). The component's behavior and appearance is determined by it's props and states.

- The component's props are defined and managed by the parent component and cannot be changed inside the component.
- The component's state is created and managed inside the component.
- To propagate back information from the child to the parent, we use state setter functions, defined in the parent and sent to the child as props.
