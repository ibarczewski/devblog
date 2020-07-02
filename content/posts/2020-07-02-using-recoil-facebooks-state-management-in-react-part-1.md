---
template: post
title: 'Using Recoil, Facebook''s State Management, In React: Part 1'
slug: react
draft: true
date: 2020-07-02T20:27:39.960Z
description: react
category: react
tags:
  - react
---
```
npx create-react-app recoil-demo
cd recoil-demo
npm i recoil
npm i
```

For the sake of teaching, we are going to put RecoilRoot in the root component. RecoilRoot must be in the parent tree of the components that need recoil state.

```
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

Defining Atoms

**Atoms** represent **state** - more specifically, a *part* of state. State is a representation of data in the application in that current moment - for example, a shopping cart object, with the items that the customer has added to the cart, might be stored in state. Atoms are pieces of that. Any component can read or write from an atom.

Once a component reads a piece of state through an Atom, it becomes subscribed to the Atom - thus, any data changes will be propagated to the component, causing a re-render.

Defining an atom looks like this:

```
export const customerState = atom({
    key: 'customerState',
    default: '',
  });
```

Every atom has two properties:

* **key** - this is a unique identifier amongst the other atoms and selectors that you have defined
*  **default** - this is the initial value of the state that you are defining
