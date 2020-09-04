
class Queue {
    constructor() {
        this.data = [];
        this.rear = 0;
        this.size = 10;
    }

    isValidPos(pos) {
        return pos < this.data.length
    }

    add(userId) {
        this.data.push(userId)
        return this.data.length;
    }

    removeByPosition(pos) {
        if (this.isValidPos(pos)) {
            return this.data.splice(pos, 1)[0];
        }
        return false
    }

    removeByUser(userId) {
        const index = this.data.indexOf(userId);
        if (index !== -1) {
            this.removeByPosition(index)
        }
        return false
    }

    move(fromPosition, toPosition) {
        if (this.isValidPos(fromPosition) && this.isValidPos(toPosition)) {
            const movingElement = this.removeByPosition(fromPosition)
            this.data.splice(toPosition, 0, movingElement);
            return true
        }
        return false
    }

    reverse(){
        this.data = this.data.reverse()
    }

    swap(pos1, pos2) {
        if (this.isValidPos(pos1) && this.isValidPos(pos2)) {
            var temp = this.data[pos1];
            this.data[pos1] = this.data[pos2];
            this.data[pos2] = temp;
            return true
        }
        return false
    }

    print() {
        for (let i = 0; i < this.data.length; i++) {
            console.log(`${i}:${this.data[i]}`)
        }
    }
}

export default Queue
