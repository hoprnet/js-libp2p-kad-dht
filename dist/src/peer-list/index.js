/**
 * A list of unique peers.
 */
export class PeerList {
    constructor() {
        this.list = [];
    }
    /**
     * Add a new peer. Returns `true` if it was a new one
     */
    push(peerId) {
        if (!this.has(peerId)) {
            this.list.push(peerId);
            return true;
        }
        return false;
    }
    /**
     * Check if this PeerInfo is already in here
     */
    has(peerId) {
        const match = this.list.find((i) => i.equals(peerId));
        return Boolean(match);
    }
    /**
     * Get the list as an array
     */
    toArray() {
        return this.list.slice();
    }
    /**
     * Remove the last element
     */
    pop() {
        return this.list.pop();
    }
    /**
     * The length of the list
     */
    get length() {
        return this.list.length;
    }
}
//# sourceMappingURL=index.js.map