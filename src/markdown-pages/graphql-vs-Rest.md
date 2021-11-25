---
title: "GraphQL or REST ?"
date: "2021-11-17"
---

### A server language for interacting with backend databases.

GraphQL tries to solve a problem, to understand what this problem is we need to know what purpose it serves for the backend.

It is a server language that wraps around an existing database or server that a request can be made against in a different way.

A bit on how servers are structured to help get a good grasps of GraphQL.

A typical Server will expose different end points which can be accessed by a frontend application or client in order to make request to its database.

A REST (Representational State Transfer) is a typical server which has a layout where requests such as POST, GET, UPDATE, and DELETE for data can be made from the client side or a frontend application.

Getting a specific information from a REST structured server might result in sending multiple requests to the backend.

Also, a lot of irrelevant data might be sent to the client side when querying for a specific information. This results in over-fetching of unneeded data.

These problem are what GraphQL tries to solve.

A GraphQL server, rather than it having multiple or different endpoints, it instead as one endpoint where requests (GET, POST, UPDATE, and DELETE) for all the possible data can be made from.

To make a request to this endpoint, queries or mutations have to be sent.

A query is asking for data (ie. to read data). A mutation is modifying data. Both are similar to a JSON object. The JSON object contains properties that is required from the database server.

These methods allows for fetching the specific data of interest. This server structure also does not require knowing all the different endpoints that can be accessed for fetching data.

In a REST backend server structure if a new feature is suddenly built in the backend, a new endpoint would be required and the frontend would need to be notified of the new feature.

This is not the case with GraphQL server layout. If the backend server changes, the frontend need not to be aware of such. All that is required is the way a data can be queried.

Every single type of data inside GraphQL is nullable ie. a null object is returned if it doesn't exist.

A REST backend server can be converted to a GraphQL backend server with the aid of APOLLO, more on this later.

I hope you enjoyed reading this piece.