"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLinkedList = createLinkedList;
function createNode(value = null) {
    return {
        value: value,
        nextNode: null,
    };
}
function createLinkedList() {
    let head = null;
    return {
        head: head,
        append(value) {
            const newNode = createNode(value);
            if (!head) {
                head = newNode;
                return;
            }
            let current = head;
            while (current.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        },
        prepend(value) {
            const newNode = createNode(value);
            newNode.nextNode = head;
            head = newNode;
        },
        size() {
            let count = 0;
            let current = head;
            while (current) {
                count++;
                current = current.nextNode;
            }
            return count;
        },
        getHead() {
            return head;
        },
        tail() {
            if (!head)
                return null;
            let current = head;
            while (current.nextNode) {
                current = current.nextNode;
            }
            return current;
        },
        at(index) {
            if (index < 0)
                return null;
            let current = head;
            let i = 0;
            while (current && i < index) {
                current = current.nextNode;
                i++;
            }
            return current || null;
        },
        pop() {
            if (!head)
                return;
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
        contains(value) {
            let current = head;
            while (current) {
                if (current.value === value)
                    return true;
                current = current.nextNode;
            }
            return false;
        },
        find(value) {
            let current = head;
            let index = 0;
            while (current) {
                if (current.value === value)
                    return index;
                current = current.nextNode;
                index++;
            }
            return null;
        },
        toString() {
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
