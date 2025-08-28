
### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- **Answer: 
  getElementById(): Selects a single element with the given ID. Id name must be unique.

  getElementsByClassName(): Selects all elements with the given class name. It's return a live HTML collection. We can access each element by using for...of.

  querySelector(): Selects the first element that matches the given css selector. We can use any valid css selector.

  querySelectorAll(): Selects all elements that matches the given css selector. We can use any valid css selector. 
  It's return a static NodeList. We can access each element by using for...each.

---

### 2. How do you create and insert a new element into the DOM?

- **Answer:
  I can create a new element by using this : const newDiv = document.createElement("div");

  Insert into DOM: 
  const container = document.getElementById("container");
  container.appendChild(newDiv);

---

### 3. What is Event Bubbling and how does it work?

- **Answer:
  Event bubbling is when an event (like a click) happens on a nested element, and it propagates upward through its parent elements until it reaches the top.

  Event occurs on the target element. It "bubbles" up through ancestors. Each ancestor gets a chance to handle the event (if it has a listener).

  Let body -> parent -> child. Each element has a click event listener. When I click the child element, the others element parent and body also clicked. It's Event Bubbling.

---

### 4. What is Event Delegation in JavaScript? Why is it useful?

- **Answer:
  Event Delegation is a technique where instead of adding an event listener to each and every similar element, we can add an event listener to a parent element. We can call an event by using .target property.

  Why useful:
  Fewer event listener consume less memory, faster execution. If child elements are added/removed later it can handle them dynamically. Easier to maintain, clean code and more efficient.

---

### 5. What is the difference between preventDefault() and stopPropagation() methods?

- **Answer:
  event.preventDefault(): Prevents default action from an element. It cant stop Event Bubbling.

  event.stopPropagation(): Stops the event from bubbling up. It doesn't affect default action of an element.

---
