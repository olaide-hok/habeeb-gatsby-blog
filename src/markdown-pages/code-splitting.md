---
title: "Chunking, Code Splitting, and Error Handling in React."
date: "2021-11-20"
---

### How React helps achieve this.

The Create-react-app gives code splitting and chunking features.

**Code splitting** involves bundling up and serving the requested code for the particular page of the web application a user navigates to.

This technique is a great way to optimize an app. A way to test optimization is through the Network tab in the Google developer tools.

Serving up code files when needed is done through **Dynamic importing**. This means bringing in an import almost like a **Promise** ie. pulling in a file and loading it when necessary.

**React-Lazy** helps achieve this. The intended component is wrapped in the lazy function provided by React and used in conjunction with react-router which by default supports code splitting.

**Suspense Feature in React**

Suspense is a component in React that allows wrapping part of an application that might be rendering asynchronous components. It takes a fallback property which takes in an HTML element or component itself. It can encapsulate multiple components while waiting, it renders the fallback until every component in it has finished lazy-loading.

**Error Boundary in React**

With chunking comes the dependency on the ISP network being active and fast whenever request is made to navigate new routes in an application. When this is done, fetching the JS chunk related to the route is done.

If the connection suddenly stops or slows down and throws an error of some kind, the spinner will possibly hang and render indefinitely.

If an error is returned, it needs to be handled as Suspense wouldn't know what to do with that error which might cause the app to break. To deal with this, an **Error Boundary** is used.

An Error Boundary is a React feature which allows writing of a unique component that will catch an error and render some fallback component or UI instead of letting the error occur.

An Error Boundary component is a class component that as either a **componentDidCatch** lifecycle method in it or a static **getDerivedStateFromError** method.

The static **getDerivedStateFromError** is a method which essentially catches any error that gets thrown in any of the children of the error boundary component in which it is declared. It returns some object that will set the state inside the class component.

The **componentDidCatch** which gives access to both the **error** and **info** related to the error and how it got thrown. Info might be which component threw the error. It also allows an operation to be done with the error such as logging it in the console.

In conclusion, less JS makes the initial loading of an app faster and in cases where errors arises, React provides features to help handle it.