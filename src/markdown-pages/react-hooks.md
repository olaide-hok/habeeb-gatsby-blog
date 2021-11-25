---
title: "What you should know about React Hooks"
date: "2021-11-16"
---

### A quick fundamental intro to the use of React Hooks.

React Hooks were introduced in February 2019 and since then developers round the world have been implementing it.

But really what are Hooks ?

Using Hooks are way that allows writing functional components which provides access to new functionality that are only available if class components were written.

Hooks cannot be used inside class components but can be used inside functional components.

The useState hook allows for functional components to have access to internal state features that are only available if class components were implemented.

It is a function that gets a parameter which is a value intended for the initial value of the state.

It gives back an array with two values which are then destructed. The first is the state value that is of interest. The second is a function that allows setting of the first value.

useEffect hook gives the ability to fire side effects inside functional components.

It does not give anything back, it gets a function that gets called whenever the components changes, or updates and re-renders.

useEffect takes a secondary parameter, an array which are properties that the effect as access to which will not trigger a re-render. An empty array, which can be passed as a second argument means do not re-render for any changes.

useEffect cannot be called inside a conditional (eg. the If-else loop) rather at the top level of the component in which it is going to be implemented.

If a conditional is to be leveraged, it should be put inside the useEffect hook.

The useEffect hook allows for passing back function from a function parameter. The returned function from useEffect is called a cleanup function.

A cleanup function is what useEffect calls when the component unmounts.

There are other hooks such as useContext, useMemo, useCallback etc.

I hope you enjoyed reading this piece.

Suggestions are highly welcomed.