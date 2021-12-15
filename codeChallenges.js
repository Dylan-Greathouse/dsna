// class Queue {
//     #list = [];

//     enqueue() {
//         this.#list.unshift()
//     }

//     dequeue() {
//        return this.#list.pop()
//     }

//     hasNext() {
//         for(i = 0; i < this.#list.length; i++) {
//             if(i === 1) {
//                 return true;
//             }
//         }
//     }
// }

// class Dequeue {
//     #list = [];

//     enqueue(item) {
//         this.#list.push(item);
//     }

//     dequeue() {
//         const list = this.#list;
//         const item = list[this.#index];
//         this.#index++;
//         return item;
//     }

//     hasNext(){
//       return !!this.size;
//     }

//     get size() {
//         return this.#list.length - this.#index; 
//     }
// }

// function CheckSyntax(code) {
//     const stack = new Stack();
//     //when a '(' is shown then it needs a closing ')'
//     for(){

//     }
//     // when a '{' is shown then needs a closing '}'
// };

class Stack {
    #list = []
    
    push(item) {
    this.#list.push(item);
    }
    
    pop() {
        const list = this.#list;
    return list.length ? list.pop() : null;
    }
    
    peek () {
    return this.#list.flat(-1);
        
    }
    
    get size() {
        return this.#list.length;
    }
    
}
    


function checkSyntax(code) {
    const stack = new Stack();
    let stringArr = code.split("");
    
    for(let i=0; i<stringArr.length; i++) {
        if(stringArr[i]==='(' ) {
            stack.push(stringArr[i]);
        }
        if(stringArr[i] === ')') {
           if(stack.pop() !== '(') {
               return false;
           }
        }
        if(stringArr[i] === '{') {
            stack.push(stringArr[i])
        }
        if(stringArr[i] === '}'){
            if(stack.pop() !== '{') {
                return false;
            }
        }
    }
        if (stack.size === 0) {
        return true
        } else {
        return false
        }
};

console.log(checkSyntax('if(true) { return; }'))
    
    
    