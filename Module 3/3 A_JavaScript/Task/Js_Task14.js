// My Personal Library 2
// Task

// Add a toggleReadingStatus method to your books objects. 

// The method should update the value of the reading property of the book object.

// Remember to log the reading property to the console to confirm the current status.

const myBook = {
    name: 'book',
    title: 'Software Quality Assurance Made Easy',
    description: 'A Deep Dive Into All the Roles Involved in the Creation of Software',
    numberOfPages: 70,
    author: 'Solis Tech',
    reading: true,
    
// Add a toggleReadingStatus method to my books objects. 
    toggleReadingStatus(){
        if (this.reading === true){
            console.log('The current reading status of the book ' +( this.title) + ' is now ' + ( this.reading));
        }
        else{
            console.log('The current reading status of the book is false');
        }
    }
};
myBook.toggleReadingStatus();