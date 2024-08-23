import fs from 'fs'
import path from 'path';
type ObjType = {
  [key: string]: Node;
};
class Node {
    child: ObjType
    output: string[][]
    fail: null | Node
    end : boolean

constructor() {
    this.child = {}
    this.output = []
    this.fail = null
    this.end = false
}

}

class AhoCorasick {
    root : Node
    constructor() {
        this.root = new Node();
    }

    insert(words: string[]) {
        let output = words
        let word = words[0]
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!node.child[char])
                node.child[char] = new Node();
            node = node.child[char];
        }
        node.output.push(output);
        node.end = true
    }


    fail() {
        const que : Node[]= []
        for (const i in this.root.child) {
            this.root.child[i].fail = this.root;
            que.push(this.root.child[i]);
        
            while (que.length > 0) {
                const currentNode: Node | null = que.shift()!;
            
                for (const i in currentNode.child) {
                    const nextNode = currentNode.child[i]
             
                    que.push(nextNode);

                    let failNode = currentNode.fail;

                    while (failNode !== null && !failNode.child[i]) {
                        failNode = failNode.fail;
                    }
                
                    nextNode.fail = failNode ? failNode.child[i] || this.root : this.root;
                    nextNode.output = nextNode.output.concat(nextNode.fail!.output);
                
                }
        
        
            }            }

        }
    search(input: string) {
        type type2 = { [key: number] : string[][] }

        this.fail()
        let text = input
        let result: type2 = {}
        let currentNode : Node | null = this.root;
        for (let i = 0; i < text.length; i++) {
            
            const char = text[i];
            while (currentNode !== null && !currentNode.child[char]) {
                currentNode = currentNode.fail;
            }
    
            currentNode = currentNode ? currentNode.child[char] || this.root : this.root;
       
        
            for (const output of currentNode.output) {
                
                    result[i - output[0].length + 1] =[]
             result[i - output[0].length + 1].push(output)
      
              
                
            }
        
     //       console.log(result)
            
        }
                
            return result
        
        
    }
        
    
}

class Pos {
    
    preprocess = (text: string) => {
        const str = text.replace(/([^가-힣a-zA-Z]*)/, " ")
        const undefArr = str.split(' ')
        const arr = undefArr.splice(1, undefArr.length)
        return arr
        
    }

    tag = async (text: string) => {
       
        const ac = new AhoCorasick()
                type type2 = { [key: number] : string[][] }
        type type3 = { [key: string]: string[][] }
        type type4 = { [key: string]: string[][] }
                               type type5= { [key: string] : string[]}


        let res : type4= {}
        try {
            const notpos = new RegExp(/^(?:.*[\\\/])?notpos_kr(?:[\\\/]*)$/g);
       
            
            const rec = (filepath: string) => {
                if (notpos.test(filepath))
                    return (path.join(filepath, 'dic/dic.csv'))
                return rec(path.join(filepath, '..'))
            }
            
            const data = fs.readFileSync(rec(__dirname))
            const pd = data.toString().split('\n')

            for (let i in pd) {

                let word = pd[i].slice(0, -1).split(',')
                
                
                ac.insert(word)
            }
            res = ac.search(text)

            let result: type3 = {}
            
            for (let i of Object.keys(res)) {
                result[i] = []
                        result[i].push(res[i][res[i].length-1])
                    }
            


            let idx = 0
            let key = 0
            let ret: type5 = {}
            let keys = Object.keys(result)
            for (let i = 0; i < text.length; i++)
           {
               key = Number(keys[idx])
               if (!result[idx]) {
                     if (text[idx] != ' '){
                    ret[idx] =[text[idx], 'UNK']
                    idx++
                   }
                   else idx++
                    
                } else 
                  {
                    
                   ret[idx] = result[idx][0];
                     idx += result[idx][0][0].length
                }
                
                    }
            let out: string[][] = []
            for (let i of Object.values(ret))
                if (i[0])
                    out.push(i)
            return  out
            }
                    

        
        catch (err) {
            console.error(err)
        }
    }

}
export {Pos}