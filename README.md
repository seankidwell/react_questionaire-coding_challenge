1. What are keys in React and why are they important?
Keys are used in React when creating lists (arrays) of elements. They tell React that each element is unique so they can be more easily identified when the whole list is altered in some way.

2. What is the difference between a controlled component and an uncontrolled component?
Controlled components are more commonly used and store information on their own state where it can be mutated using setState(). Uncontrolled components are "quick and dirty" in the sense that, rather than storing information on state, they opt to directly affect the DOM using refs.

3. What is Props?
Props (short for properties) is used to pass information from a parent component down to a child component. By passing props to a child component, you can access the passed data through the props object on the child component.

4. Describe how events are handled in React?
Events such as onClick or onChange are tied to elements rendered in the JSX and are given methodes to execute upon the occurrence of the event.

5. What is wrong with this code?
this.setState((prevState, props) => {
  return {streak: prevState.streak + props.count}
})
From what I can tell, this code appears to be fine. this.setState is accepting an updater function which has the parameters prevState and props in the right order. Then, it is returning the change that is to be made to the state.

6. What are the limitations of React?
The only example of a limitation I can come up with is unidirectional data flow. Because of this, you cannot affect the state of a parent component by using one of its child components.

7. Explain the purpose of render() in React().
The render method is what fires when the component is to be rendered onto the UI. Not only can the render method return JSX to be displayed in the app, but it will also execute any code inserted before the returning of any JSX.

8. What are the different phases of React component's lifecycle?
Mounting, updating, and unmounting

9. What are Higher Order Components (HOC)?
Higher Order Components are function components which can be passed another component as an argument and return a transformed version of that argument component.

10. In which lifecycle event do you make AJAX requests and why?
AJAX requestes should be made during a components mounting step because doing so on the update step would severly slow the components ability to re-render.