/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function getValues(node: ListNode | null, arr: number[]){
    if(!node)
        return
    arr.push(node.val)
    if(node.next)
        getValues(node.next, arr)
 }

 function makeLinkedList(node: ListNode, arr: number[], i: number){
    if(arr[i] !== undefined){
        node.val=arr[i]
        if(arr[i+1] !== undefined){
            node.next = new ListNode
            i+=1
            makeLinkedList(node.next, arr, i)
        }
    }
 }

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    var arr = []
    getValues(head, arr)
    if(arr.length===1)
        return head
    let ret = []
    for(let i=0; i<arr.length; i+=k){
        var subArr = []
        for(let j=0; j<k; j++){
            if(arr.length - i < k && k!=arr.length)
                break
            if(arr[i+j] !== undefined)
                subArr.push(arr[i+j])
            if(j===k-1)
                for(let l=0;l<k;l++)
                    ret.push(subArr.pop())
        }
    }
    let mod = arr.length % k
    let leftovers = []
    for (let i=0;i<mod;i++){
        leftovers.push(arr[arr.length-i-1])
    }
    for (let i=0;i<mod;i++)
        ret.push(leftovers.pop())
    let retHead = new ListNode
    makeLinkedList(retHead, ret, 0)
    return retHead
};