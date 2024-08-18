'use server'

import { promises as fs } from 'fs'
import { join } from 'path'
import axios from 'axios'
import { nGram } from "simplengrams";
import pool from "../lib/db";


import { redirect } from 'next/navigation'
export default async function markovCreate() {
    console.log("before try")
    try {
        console.log("after try")
        const data = await fs.readFile('/tmp/tmp.txt');
        const text = data.toString();
        console.log("text: " + text)
        
        const res = await axios
            .post( 
                "http://aiopen.etri.re.kr:8000/WiseNLU",
                {
                    argument: {
                        analysis_code: "morp", 
                        text: text,
                    },
                },
                {
                    headers: {
                        
                        Authorization: process.env.APIKEY,
                    },
                }
            )
        
        console.log(res)
        const sentenceArray = res.data.return_object.sentence
        const resultArr = sentenceArray.map((e) => e.morp);
        try {
            const _ = fs.writeFile('/tmp/morp.txt', JSON.stringify(resultArr));
        } catch (err) {
            if (err) console.log('Error: ', err);
        }
        
        try {
            const data = fs.readFile('/tmp/morp.txt');
                                
            const genSentence = (cfd, landkey, num) => {
                let sentence = ['']
                
                let word = cfd[landkey][0]
                for (let i = 0; i < num; i++) {
                    sentence.push(word)
                    word = cfd[word][Math.floor(Math.random() * cfd[word].length)]

                }
                //const regEx = /'^J|^E|^X|^S'/
                let res = sentence.join(' ')
                return res
            }
   
            const calc_cfd = () => {
                let cfd = {};
                const words = JSON.parse(data.toString())
                let sentences = [[]]
                let ngrams: (string | null)[][] = []
                for (let s in words) {
                    for (let i in words[s]) {
                        sentences.push(words[s][i]['lemma'])
                    
                
                        let sentence = sentences.join(' ')
                        ngrams = nGram(sentence);
                       
                    }
                }
                const landkey = ngrams[Math.floor(Math.random() * ngrams.length)][0]
                for (let arrs in ngrams) {
                    let arr = ngrams[arrs]
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
                        
                    }
                }
                    
                return [cfd, landkey]
            }

            const max = 500
            const min = 50
            let res = genSentence(calc_cfd()[0], calc_cfd()[1], Math.floor(Math.random() * (max - min) + min))
            console.log(res)
        
            const insert = async () => {
                try {
                    const sql = 'INSERT INTO markov (body) VALUES ("?")';
                    const result = await pool.query(sql, [res]);
                    console.log(result);
                } catch (err) {
                    console.log(err);
                }
            }

            await insert();
            
        } catch (err) {
            if (err)
                console.error(err);
        }
    } catch (err) {
        console.error(err);
    }

    return (<></>)

    /*
    fs.readFile('/tmp/tmp.txt', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        
    })*/
    //redirect('/markovResult');
    // redirect('/markovResult')
    //   redirect('/markovResult')
}