
// Task 15:
// You now have more books in your library. You should manage them all in one place.

// Create a books array. 
// Steps: 1. Each element of this array will be a book objrct. 
// 2. Each book object will have the following properties as shown in the code:-

//     name: 'book',
//     title: 'Software Quality Assurance Made Easy',
//     description: 'A Deep Dive Into All the Roles Involved in the Creation of Software',
//     numberOfPages: 70,
//     author: 'Solis Tech',
//     reading: true, 

   const booksArray = [ {
    name: 'book',
    title: 'Software Quality Assurance Made Easy',
    description: 'A Deep Dive Into All the Roles Involved in the Creation of Software',
    numberOfPages: 70,
    author: 'Solis Tech',
    reading: true, 
},
{
    name: 'book',
    title: 'Manual QA / Automation Engineer',
    description: 'Collaboration in Selenium Automation',
    numberOfPages: 500,
    author: 'Mesh Gun',
    reading: true,
},
{
    name: 'book',
    title: 'Selenium Testing Tools Cookbook, 2nd Edition',
    description: 'Over 90 recipes to help you build and run automated tests',
    numberOfPages: 1000,
    author: 'Victory Bush',
    reading: true,
},
{
    name: 'book',
    title: 'Agile QA/Testing',
    description: 'Test Obsessed',
    numberOfPages: 200,
    author: 'IP Philip',
    reading: true,
},
{
    name: 'book',
    title: 'Test iOS Apps with UI Automation',
    description: 'Bug Hunting Made Easy',
    numberOfPages: 217,
    author: 'Jonathan Penn',
    reading: true,
},
{
    name: 'book',
    title: 'Python Unit Test Automation',
    description: 'Practical Techniques for Python Developers and Testers',
    numberOfPages: 132,
    author: ' Ashwin Mesh',
    reading: true,
}
    ];
// Step: 3. Use a for-loop to loop through the Array. 
// Finally log all books when the reading status is true to console.


for (let num =0; num < booksArray.length; num++) {
    if (booksArray[num].reading){
        
    console.log('Book Title: ' +( booksArray[num].title) + ', Author: ' + (  booksArray[num].author));

    }

}