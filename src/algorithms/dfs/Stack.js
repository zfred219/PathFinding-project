
/* A helper stack function to help DFS */
function Stack(){
    let stack = [];

    // Current length
    this.getSize = () => stack.length;

    // Check if it's empty
    this.isEmpty = () => 0 === stack.length;

    // insert into queue at the end
    this.push = (elem) => { 
        stack.push(elem);
    };

    // pop out of queue at the end
    this.poll = () => { 
        return stack.pop();
    };

     // Peek the first element of queue
     this.peek = () => {
        return  stack.length > 0 ? stack[stack.length - 1] : undefined;
    }
};

export default Stack;

