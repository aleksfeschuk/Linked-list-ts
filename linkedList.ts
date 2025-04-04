interface Node {
    value: string | null;
    nextNode: Node | null;
}

interface LinkedList {
    head: Node | null;
    append(value: string): void;
    prepend(value: string): void;
    size(): number;
    getHead(): Node | null;
    tail(): Node | null;
    at(index: number): Node | null;
    pop(): void;
    contains(value: string): boolean;
    find(value: string): number | null;
    toString(): string;
}

function createNode(value: string | null = null): Node {
    return {
        value: value,
        nextNode: null,
    };
}

function createLinkedList(): LinkedList {
    let head: Node | null = null;

    return {
        head: head,

        append(value: string): void {
            const newNode = createNode(value);
            if(!head) {
                head = newNode;
                return;
            }
            let current = head;
            while (current.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        },

        prepend(value: string): void {
            const newNode = createNode(value);
            newNode.nextNode = head;
            head = newNode;
        },

        size(): number {
            let count = 0;
            let current = head;
            while(current) {
                count++;
                current = current.nextNode;
            }
            return count;
        },

        getHead(): Node | null {
            return head;
        },

        tail(): Node | null {
            if (!head) return null;
            let current = head;
            while(current.nextNode) {
                current = current.nextNode;
            }
            return current;
        },

        at (index: number): Node | null {
            if (index < 0) return null;
            let current = head;
            let i = 0;
            while (current && i < index) {
                current = current.nextNode;
                i++;
            } 
            return current || null;
        },

        pop(): void {
            if (!head) return;
            if (!head.nextNode) {
                head = null;
                return;
            }
            let current = head;
            while (current.nextNode && current.nextNode.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = null;
        },

        contains(value: string): boolean {
            let current = head;
            while(current) {
                if (current.value === value) return true;
                current = current.nextNode;
            }
            return false;
        },

        find(value: string): number | null {
            let current = head;
            let index = 0;
            while (current) {
                if (current.value === value) return index;
                current = current.nextNode;
                index++;
            }
            return null;
        },

        toString(): string {
            let result = "";
            let current = head;
            while (current) {
                result += `( ${current.value} ) ->`;
                current = current.nextNode;
            }
            return result + 'null';
        },
    };
}

export { createLinkedList };