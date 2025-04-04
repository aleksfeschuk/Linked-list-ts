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
    } as Node;
}
