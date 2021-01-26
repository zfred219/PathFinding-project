


/* Use Array to implement min heap */
/* Order in array:    */
class PriorityQueue {
    constructor(data = [], compare = defaultCompare) {
        this.data = data;
        this.length = this.data.length;
        this.compare = compare;

        if (this.length > 0) {
            for (let i = (this.length >> 1) - 1; i >= 0; i--) this.bubbleDown(i);
        }
    }

    isEmpty() {
        return this.length <= 0;
    }

    add(item) {
        this.data.push(item);
        this.bubbleUp(this.length++);
    }

    poll() {
        if (this.length === 0) return undefined;

        const top = this.data[0];
        const bottom = this.data.pop();

        if (--this.length > 0) {
            this.data[0] = bottom;
            this.bubbleDown(0);
        }

        return top;
    }

    peek() {
        return this.data[0];
    }


    getAndBubble(item) {
        for (let i = 0; i < this.length; ++i) {
            if (item == this.data[i]) {
                this.bubbleUp(i)
                this.bubbleDown(i);
                return;
            }
        }
    }


    bubbleUp(pos) {
        const {data, compare} = this;
        const item = data[pos];

        while (pos > 0) {
            const parent = (pos - 1) >> 1;
            const current = data[parent];
            if (compare(item, current) >= 0) break;
            data[pos] = current;
            pos = parent;
        }
        data[pos] = item;
    }

    bubbleDown(pos) {
        const {data, compare} = this;
        const halfLength = this.length >> 1;
        const item = data[pos];

        while (pos < halfLength) {
            let bestChild = (pos << 1) + 1; // initially it is the left child
            const right = bestChild + 1;

            if (right < this.length && compare(data[right], data[bestChild]) < 0) {
                bestChild = right;
            }
            if (compare(data[bestChild], item) >= 0) break;

            data[pos] = data[bestChild];
            pos = bestChild;
        }

        data[pos] = item;
    }


    



}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

export default PriorityQueue;