        // i. Get element of id “main-content” and assign them in a variable.
        const mainContent = document.getElementById('main-content');

        // ii. Display all child elements of “main-content” element.
        console.log('Child elements of main-content:', mainContent.children);

        // iii. Get all elements of class “render” and show their innerHTML in browser.
        const renderElements = document.getElementsByClassName('render');
        Array.from(renderElements).forEach(el => {
            document.body.innerHTML += `<div>${el.innerHTML}</div>`;
        });

        // iv. Fill input value whose element id first-name using JavaScript.
        document.getElementById('first-name').value = 'John';

        // v. Repeat part iv for id “last-name” and “email”.
        document.getElementById('last-name').value = 'Doe';
        document.getElementById('email').value = 'john.doe@example.com';

        // 2. Additional tasks:
        // i. What is node type of element having id “form-content”.
        const formContentNodeType = document.getElementById('form-content').nodeType;
        console.log('Node type of form-content:', formContentNodeType);

        // ii. Show node type of element having id “lastName” and its child node.
        const lastNameNodeType = document.getElementById('lastName').nodeType;
        console.log('Node type of lastName:', lastNameNodeType);
        const lastNameChildNodeType = document.getElementById('lastName').firstChild.nodeType;
        console.log('Child node type of lastName:', lastNameChildNodeType);

        // iii. Update child node of element having id “lastName”.
        document.getElementById('lastName').firstChild.nodeValue = 'Last Name: Smith';

        // iv. Get First and last child of id “main-content”.
        const firstChild = mainContent.firstChild;
        const lastChild = mainContent.lastChild;
        console.log('First child of main-content:', firstChild);
        console.log('Last child of main-content:', lastChild);

        // v. Get next and previous siblings of id “lastName”.
        const lastNameElement = document.getElementById('lastName');
        const nextSibling = lastNameElement.nextSibling;
        const previousSibling = lastNameElement.previousSibling;
        console.log('Next sibling of lastName:', nextSibling);
        console.log('Previous sibling of lastName:', previousSibling);

        // vi. Get parent node and node type of element having id “email”.
        const emailElement = document.getElementById('email');
        const parentNode = emailElement.parentNode;
        const parentNodeType = parentNode.nodeType;
        console.log('Parent node of email:', parentNode);
        console.log('Node type of parent node of email:', parentNodeType);