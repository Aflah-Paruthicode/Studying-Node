 # *The Node.js Master Lab* 
*This repository is a deep dive into the internals of Node.js. it documents my journey of understanding,*

---

 ### The evolution of node.js
 - *2009: ryan dahl creates node.js.*
 - *The Engine: originally used spider monkey, but switched to google chrome's v8 for its massive performance.*
 - *The Name: almost called web.js, but renamed to node.js because it acts as a node that can live anywhere from servers to light bulbs.*
 - *2014: the io.js fork happened because node wasn't updating fast enough. then they eventually merged to create the stable node we use today.*
 - *Governance: now managed by the open js foundation.*

---

### The Architecture 
 *node.js is not a programming language, it is a java script runtime environment. it is a c++ application that wraps the v8 engine and adds some superpowers.*
 
1. The V8 Engine, like the heart
    *v8 is a high performance java script engine written in C++.*
   - *it takes your ecmascript (js) code and compiles it into machine code using a jit (just in time) compiler.*
   - *tc39: this is the committee that decides the rules of js. v8 follows these rules, and node.js uses v8.*
     
2. Libuv, like the brain
    *libuv is a c++ library that handles asynchronous i/o. it is the reason node.js is non blocking.*
   - *Thread Pool: for heavy tasks (like File System), libuv uses a pool of threads (usually 4) to work in the background.*
   - *Event Loop: the secret incredient that manages what happens when.*
  
---

### The Event Loop : how the multi task works
 *even though java script is single threaded, node can handle thousands of connections. it does this by offloading tasks and waiting for them in phases.*

 1. *Timers: executes callbacks scheduled by ``settimeout()`` and ``settnterval()``*
 2. *Pending Callbacks: executes i/o callbacks deferred from the previous iteration.*
 3. *Idle, Prepare: used internally by node.js for bookkeeping.*
 4. *Poll: retrieves new i/o events, executes i/o related callbacks.*
 5. *Check: executes setImmediate() callbacks.*
 6. *Close Callbacks: executes closing callbacks, e.g... socket.on('close', ...)*

---

### The Module System And Wrapper
 *when we require(), node doesn't just run our code. it wraps it in a protection shield called an iife (immediately invoked function expression).*
  - **Why?:** *this is why our variables are private and don't leak to other files.*
  - **Caching:** *node loads a module once. if we require it again, it gives us the version it already saved in memory.*

--- 

### Concepts Mastered in this Lab
 - *REPL: using the read evaluate print loop for quick testing.*
 - *CommonJS vs. ESM: mastering the transition from ``require`` to ``import/export``*
 - *Global Objects: using ``global`` and ``globalthis`` instead of the browser's ``window``*
 - *FS Module: practicing reading and writing files to the hard drive.*

 --- 
 
  ***Created with ❤️, by Aflah 🧑‍🎓*** <br />
  *If you find this repo useful! then consider giving it a star 🫰*
 
