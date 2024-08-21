'use server'
import { promises as fs } from 'fs'
import fss from 'fs'
import { nGram } from "simplengrams";
import pool from "../lib/db";
import path from 'path'


import { redirect } from 'next/navigation'
export default async function markovCreate() {
    try {
        await fs.readFile('/tmp/tmp.txt')
    } catch (err) {
        await fs.writeFile('/tmp/tmp.txt', "")
    }
        const datas = await fs.readFile('/tmp/tmp.txt');
        const text = datas.toString();
        //console.log("text: " + text)
        let pos = new Pos();

        const data = pos.tag(text) ?? ''
        
        async function genSentence(cfd, landkey, num) {
                let sentence = ['']
            let word = await cfd[await landkey][0]
                for (let i = 0; i < num; i++) {
                    sentence.push(word)
                //    //console.log(cfd)
                    //console.log(word)
                    if (cfd[word]) 
                        word = cfd[word][Math.floor(Math.random() * (cfd[word].length))]
                    else
                        continue
            }

            
            //const regEx = /'^J|^E|^X|^S'/
            
                let res = sentence.join(' ')
                return res
            }
            console.log(data)
   
            async function calc_cfd() {
                let cfd = {};
                const words : any = data
                let sentences = [[]]
                let ngrams: (string | null)[][] = []

                for (let s in words) {
                            
                        sentences.push(words[s][0])
                        //    //console.log(words[s][0])
                
                    
                    }
                
                
                                let sentence = sentences.join(' ')
                ngrams = nGram(sentence);
                if (!ngrams[1])
                    (ngrams[0][0] = ngrams[ngrams.length-1][1])
                for (let arrs in ngrams) {
                    let arr = ngrams[arrs]
                    ////console.log(arr)
                    if (arr[0] == null) {
                        throw "ngram issue"
                    }
                    
                    let w1: string = arr[0]
                    Object.assign(cfd, { [w1]: [] })
                    for (let arrs2 in ngrams) {
                        let arr = ngrams[arrs2]
                        let p1 = arr[0]
                        let p2 = arr[1]
                        
                        if (w1 == p1)
                            cfd[w1].push(p2)
                        ////console.log('들어감')
                    }
                  
                }
              //console.log(ngrams)
                const landkey = ngrams[Math.floor(Math.random() * ngrams.length)][0]
               
                return [cfd, landkey]
                
            }
                       const max = 500
            const min = 50
            let res = await genSentence((await calc_cfd())[0], (await calc_cfd())[1], Math.floor(Math.random() * (max - min) + min))
           console.log(res)
        
            const insert = async () => {
                try {
                    const sql = 'INSERT INTO markov (body) VALUES ("?")';
                    const result = await pool.query(sql, [res]);
                    //console.log(result);
                } catch (err) {
                    //console.log(err);
                }
            }

            await insert();
             redirect('/markovResult')
        }



class Node {
    child: Map<string, Node>;
    output: string[][]
    fail: null | Node
    end : boolean
    
    constructor() {
        this.child = new Map()
        this.output = []
        this.fail = null
        this.end = false
    }
}

class AhoCorasick {
    root: Node
    constructor() {
        this.root = new Node();
    }

    insert(words: string[]) {
        let output = words
        let word = words[0]
        let node = this.root;
        for (const char of word) {
            if (!node.child.get(char))
                node.child.set(char, new Node());
            node = node.child.get(char) || this.root;
        }
        node.output.push(output);
        node.end = true
    }


    fail() {
        const que : Node[] = []
        for (const [i, c] of this.root.child.entries()) {
            c.fail = this.root;
            que.push(c);
          
            while (que.length > 0) {
                const currentNode = que.shift();
                if (typeof currentNode === undefined)
                    break;
                            
                for (const i in currentNode?.child) {
                    const nextNode = currentNode?.child.get(i);

                    if (nextNode == null)
                        continue;
                
                    que.push(nextNode);

                    let failNode = currentNode.fail;

                    while (failNode !== null && !failNode.child.get(i)) {
                        failNode = failNode.fail;
                    }
                
                    if (currentNode != this.root)
                        nextNode.fail = failNode ? failNode.child.get(i) || this.root : this.root;

                    if (nextNode.fail !== null)
                        nextNode.output = nextNode.output.concat(nextNode.fail.output);
                }
        
            }
        }
    }

    search(input: string) : Map<number, string[][]> {
        this.fail();
        let text = input;
        let result : Map<number, string[][]> = new Map();
        let currentNode : Node | null = this.root;
        for (let i = 0; i < text.length; i++) {
            const char = text[i];

            while (currentNode !== null && !currentNode.child.get(char)) {
                currentNode = currentNode.fail;
            }
    
            currentNode = currentNode ? currentNode.child.get(char) || this.root : this.root;
        
            for (const output of currentNode.output) {
                let resultArray = result.get(i - output[0].length + 1) || [];
                resultArray.push(output);
                result.set(i - output[0].length + 1, resultArray);
            }   
        }
        return result;
    }

}

class Pos {
    preprocess = (text: string) => {
        const str = text.replace(/([^가-힣a-zA-Z]*)/, " ")
        const undefArr = str.split(' ')
        const arr = undefArr.splice(1, undefArr.length)
        return arr.toString();
    }

    tag = (text: string) => {
        const ac = new AhoCorasick();
        let res : Map<number, string[][]> = new Map();
        try {
            const data = fss.readFileSync(path.join(process.cwd() + '/dic.csv'))
            const pd = data.toString().split('\n');
            for (let i of pd) {
                let word = i.slice(0, -1).split(',');
                ac.insert(word);
            }
            res = ac.search(text);

            const result : Map<number, string[]> = new Map();
            for (let [i, x] of res.entries()) {
                const resultArray = x[x.length - 1] || [];
                result.set(i, resultArray);
            }
       
            let idx = 0
            let key = 0
            let ret : Map<number, string[]> = new Map();
            let keys = Array.from(result.keys());
            for (let s of text)
            {
                if (idx >= text.length) break;
                key = keys[idx];
                const resv = result.get(idx) || []
                if (resv.length == 0) {
                    if (text[idx] != ' ') {
                        ret.set(idx, [text[idx], 'UNK']);
                    }
                    idx++;
                } else {
                    ret.set(idx, resv);
                    idx += resv[0].length;
                }
            }
                
            return Array.from(ret.values());
        } catch (err) {
            console.error(err);
        }
    }
}
