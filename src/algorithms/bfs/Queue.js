
/* An helper queue function to help BFS */
function Queue(){
    let queue = [];
    let offset = 0;

    // Current length
    this.getLength = () => queue.length - offset

    // Check if it's empty
    this.isEmpty = () => 0 === queue.length;

    // insert into queue at the end
    this.enqueue = (offset) => { 
        queue.push(offset)
    };

    // pop out of queue at the front
    this.dequeue = () => { 
        if(0 !== queue.length) {
            let element = queue[offset];
            if (++offset * 2 >= queue.length){
                queue  = queue.slice(offset);
                offset = 0;
            }
            return element;
        }
    };
    
    // Peek the first element of queue
    this.peek = () => {
        return  queue.length > 0 ? queue[offset] : undefined;
    }
};

export default Queue;