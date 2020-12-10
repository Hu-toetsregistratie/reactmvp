# Step-by-step guide to using Components by [Instructure](https://instructure.design/)
In this file I will shortly explain how you can use the components created by instructure.

Contents
- Installation
- Importing
- Importing an Instructure component

## Installation 
### Yarn
Locate to your project's folder in the terminal and write:

``yarn add @instructure/canvas-theme``

Yarn will install the package and add it as a dependency in package.json.
### NPM
Locate to your project's folder in the terminal and write: 

``npm install @instructure/canvas-theme``

NPM will install the package and add it as a dependency in package.json.

## Importing
After installing the Instructure modules you have to import the Canvas-Theme in your file that gets rendered. 
Normally that is your 'App.js' file.

When you create a react-app the app.css gets imported in App.js. Remove this line and add

```Javascript 
import '@instructure/canvas-theme;'
``` 
instead of 
```Javascript
import './App.css';
```

## Importing an Instructure component

#### Step 1:
Look for the kind of component you want to use on [the instructure website](https://instructure.design/).
Navigate to "components" in their sidebar or use their search field at the top of the page.

#### Step 2:
When you've found the component you think you want to use; read what they have to say about the component and what the functional and non-functional requirements are.
Instructure wrote a lot about the usage of their components and put a lot of effort into their styleguide to which we want to adhere.

For testing purposes this step is optional.

#### Step 3:
When you're sure you want to import this module you have to do the following.

Scroll down to **Usage** at the bottom of the page.
Write the import line *with Tree Shaking* at the top of your components' file.

*For example*: 

I want to use the link component. So what I would do is 
- Go to my components' file called 'LinksToClickOn.JSX'. 
This is the file in which I want to import the Instructure' component in.
- add 
````Javascript
import { Link } from '@instructure/ui-link';
````

to the code.
- And add 
```Javascript
<Link />
```
to where I want to use the Instructure' Link(*) component.

\(*) Pay attention to the capitalization of the components' names.
#### Final step
Components have all sorts of properties. To learn more about a component its properties you should read about it on its page.
I recommend you look at their example code and try to see for youself if you understand what you need to use. 

If you have any problems with any components ask someone who knows about react or instructure haha.


## Troubleshooting

If the module isn't inside your node_modules folder you might need to manually add the component you want to use.
If this is the case you can scroll down  to **Usage** (for example at the [Link component](https://instructure.design/#Link/#LinkUsage)) and install it.
