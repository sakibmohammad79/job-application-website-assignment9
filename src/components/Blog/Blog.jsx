import React from 'react';

const Blog = () => {
    return (
        <div className='md:w-[1120px] mx-auto space-y-5 my-12 p-4 md:p-6 text-gray-500'>
            <div>
                <h3 className='text-3xl font-bold text-orange-500'>A. When should you use context API?</h3>
                <p className='font-medium text-2xl'><span className='font-bold text-3xl text-orange-400'>Answer:</span> In React, passing props is a fundamental concept that enables a parent component to share data with its child components as well as other components within an application.In many cases, passing props can be an effective way to share data between different parts of your application. But passing props down a chain of multiple components to reach a specific component can make your code overly cumbersome.Prop drilling can make your code more difficult to read and maintain, and can also make it harder to refactor your components later on.This is where the Context API comes in. With Context API, you can store data at the top level of the component tree and make it available to all other components that need it without passing props.</p>
            </div>
            <div>
                <h3 className='text-3xl font-bold text-orange-500'>B. What is a custom hook?</h3>
                <p className='font-medium text-2xl'><span className='font-bold text-3xl text-orange-400'>Answer:</span> Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app. When we want to share the logic between other components, we can extract it to a separate function. You create the hook same way as you create any JS function. Look at it as a refactoring of code into another function to make it reusable. It will speed up your productivity and save your time.</p>
            </div>
            <div>
                <h3 className='text-3xl font-bold text-orange-500'>C. What is useRef?</h3>
                <p className='font-medium text-2xl'><span className='font-bold text-3xl text-orange-400'>Answer:</span> Ref means just reference, so it can be a reference to anything (DOM node, Javascript value, etc). The useRef hook returns a mutable object which doesn’t re-render the component when it’s changed. Think it like useState, but unlike useState, doesn’t trigger re-render of the component. The object that useRef returns have a current property that can hold any modifiable value.</p>
            </div>
            <div>
                <h3 className='text-3xl font-bold text-orange-500'>D. What is useMemo?</h3>
                <p className='font-medium text-2xl'><span className='font-bold text-3xl text-orange-400'>Answer:</span> useMemo in React is essential react hook for improving the performance and speed of your application by caching the output in the computer memory and returning it when the same input is given again. The React useMemo hook performs some calculations when requested and caches the result in the computer memory. Whenever the React memo hooks are asked to perform another operation with the same value, the old result will be returned without needing to waste computer resources calculating all over again.</p>
            </div>
        </div>
    );
};

export default Blog;