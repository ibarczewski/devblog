---
template: post
title: 'Using Recoil, Facebook''s State Management, In React: Part 1 - Overview, Atoms'
slug: recoil_primer_part_1
draft: false
date: 2020-07-02T20:27:39.960Z
description: >-
  The first part of a primer on Recoil, we will dive into what Recoil aims to
  achieve, how to add Recoil to a project, and what Atoms are.
category: react
tags:
  - react
---
Facebook recently rolled out a new state management tool called Recoil. As the official maintainers of the React framework, this has made the library compelling to use. As popular as Redux is, it is not without issues - a steep learning curve, developers complaining that it feels bolted on to React, and inconsistent project structuring (in the community) with regards to separating presentation concerns with state concerns.

Recoil comes with an \*extremely\* simple API, a low amount of boilerplate, and a "React-ish" feel to state management. While currently less mature than Redux, I do think it is worth watching, and decided to dig into it myself.

## **Adding Recoil To Your Project**

Start by creating a new application and adding the Recoil library to it.

```
npx create-react-app recoil-demo
cd recoil-demo
npm i recoil
npm i
```

Now that we've added the project to our package, we're going to bring it into the React project. We need to import **RecoilRoot** and then use it to wrap the components that need recoil state. Any components outside of RecoilRoot will not have access to state! RecoilRoot must be in the parent tree of components that want to access state.\
\
For the sake of teaching, we are going to put RecoilRoot in the root component. 

```
// defined in App.js

import React from 'react';
import { 
  RecoilRoot,
} from 'recoil';


function App() {
  return (
    <RecoilRoot>
      // we will define the CustomerDetailsInput component later
      <CustomerDetailsInput />
    </RecoilRoot>    
  );
}

export default App;
```

## Defining Atoms

**Atoms** represent **state** - more specifically, a *part* of state. State is a representation of data in the application in that current moment - for example, a shopping cart object, with the items that the customer has added to the cart, might be stored in state. Atoms are pieces of that. Any component can read or write from an atom.

Once a component reads a piece of state through an Atom, it becomes *subscribed* to the Atom - thus, any data changes will be propagated to the component, causing a re-render to occur.

Defining an atom looks like this:

```
// defined in src/atoms/customerState.js

import { 
    atom,
  } from 'recoil';import { 
    atom,
  } from 'recoil';

export const customerState = atom({
    key: 'customerState',
    default: {},
  });
```

Every atom has two properties:

* **key** - this is a unique identifier amongst the other atoms and selectors that you have defined.
* **default** - this is the initial value of the state that you are defining. In our case, we are simply going to give it an empty object.

## Reading and Writing to State Through Atoms

Recoil gives us a function called **useRecoilState** that returns an tuple. The first element is the current value of state - in our case at this very moment, when we start the application, this will be the default empty object that we defined when we created the atom. The second element is a setter function that, when called, will update the value of state. 

**Note that this can function can take an atom or a selector** - we will dive into the selector side shortly.\
\
Going back to our code, let's create a **CustomerDetailsInput** component that also has an internal definition for a **NameInput** component. Create a components folder inside of src, and then create a customerDetailsInput.js file with the following (we can clean this code up, but for the sake of varying levels of skill that may be reading this, I wanted to keep it fairly straightforward):

```
// defined in src/components/customerDetailsInput.js

import React from 'react';
import { 
    useRecoilState,
  } from 'recoil';
import  { customerState } from '../atoms/customerState';

export function CustomerDetailsInput() {
    return (
        <div>
            <NameInput />
        </div>
    );
}

function NameInput() {
    const [customerDetails, setCustomerDetails] = useRecoilState(customerState);

    const onChange = (event) => {
        setCustomerDetails( { name: event.target.value } );
    }

    return (
        <div>
            <input type="text" onChange={onChange} value={customerDetails.name} />
            Name: {customerDetails.name}
        </div>
    );
}
```

Let's break this code down:

* The CustomerDetailsInput component is simply a div wrapper around NameInput, defined below.
* The NameInput component begins with a deconstruction of the tuple that is returned. We define the value of state as customerDetails and define the setter method as setCustomerDetails. Cut and dry.
* We define an onChange function that accepts an event as a parameter, takes its value, and passes an object with a property called name to the setCustomerDetails function, set to the aforementioned value that is on event. This object is the shape of what our (very basic) state will look like for now.
* We return an input wrapped in a div. The input's onChange event will trigger the onChange function that we defined above. The value of the input will be the name property that is on the customerDetails state. 
* Under the input is a simple, unwrapped display of the name. This is mostly for debugging purposes.

Run the application and you should see the input textbox with the customer name displayed next to it as you type. When you type in the textbox, the following happens:

1. The onChange event is fired, passing in an event with event.target.value set to whatever has been typed into the textbox.
2. setCustomerDetails is called with an object that has a property of name, set to the value that you typed in the textbox.
3. State is updated, with the new state replacing the old state - in this case, the new value for name is replacing the old value for name.
4. Since state has changed, a re-render occurs, and the component is given the new value of state - defined in our component as customerDetails - which will be reflected to the user where we used customerDetails.name. 

If we were to use this piece of state in another component, we would see the update happen there as well. **As mentioned before, state is shared across components.**

The next part of this primer will go over selectors, and how we can utilize that in conjunction with atoms.
