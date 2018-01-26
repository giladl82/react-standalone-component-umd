
# A React component UMD example

Starting from my last repository "[react-standalone-component]"(https://github.com/giladl82/react-standalone-component)

I thought, that my solition, was a bad one.

So, I did what I do best, and took a breake :grin:

Then i realized, that my problems were.

**#1** I my libraryTarget was 'commonjs' (replaced it with 'umd')

**#2** I exported my component as default.
Now, I export it as named export
Plus, I export a new named function 'init'.

The init function can be used by a none react client to initialize the component.

I've started out trying to create a standalone component. since until now, I only created full react apps.

This was pretty ease after reading the post "[How to create a React component and publish it on NPM](https://medium.com/@BrodaNoel/how-to-create-a-react-component-and-publish-it-in-npm-668ad7d363ce)"
by **Noel Broda**

But then, I came to realize, that in my place of work, they don't use react in most projects, and if I'd like to write a component that could be used in none react projects, and in projects using ES5, I need to export my component 
as a simple js function.

After doing some reading and searching, I came to the conclusion, that it is only possible using **babel-standalone**

There are some differences between a component used in a react project, and a component used with babel standalone, 

**#1** Using babel-standalone, means that the compoent, wont get compiled with webapck etc.
You only need the source code.

**#2** When using babel-standalone, There is no imoprt/export. (one could use system.js but It still has some differences from native modules)

----------

## The code

This project includes to projects,
**#1** The component. just as described above, a simple component exported using naming export

**#2** The app project, a simple app served using node.js serve module.

The html file, is a simple file including the component script file (I've manually copied the file, because, I would expected that in a real scenario, it will come from a CDN)

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react-dom.min.js"></script>

    <script src="component.js" type='text/babel'></script>
    <script> Fancy.init('#root', {color:'green'}</script>

That's it.
Hope it will help some one
