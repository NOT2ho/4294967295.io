"use client"

import React from 'react'
import { useState } from 'react'
//import FormSubmit from './FormSubmit'
import { useFormStatus } from 'react-dom'
import { Component } from 'react'
import { useEffect } from 'react'
import {tag} from './tagger'


 /*
export default class Form extends Component {
       
        state = {
            val: 'val',
            out: [[]]
        };

        handleOutChange = async (e) => {

            const newVal = e.target.value
            let newOut = await tag(newVal)
            
            this.setState(prevState =>( {
            val: newVal, 
            out: newOut
            }), ()=> console.log(newOut));
        }

        render() {
            return (
                <>
                    <input value={this.state.val} onChange={this.handleOutChange} />
                    <p>{this.state.out}</p>
                </>
            );
        }
    
}/**/
export default function PosTag() {
      const { pending, data } = useFormStatus()
    const [val, setVal] = React.useState('');
    const [hide, setHide] = React.useState(false);
    //setVal([['']])
    const FormSubmit = async (formData: FormData) => {
        console.log("야옹")
        let i = String(formData.get('body'))
        let arr : string[][] = [['형태소 출력:']]
         let posTag = await tag(i)
        if ((posTag) === undefined)
            arr = [['null']]
       
        for (i in posTag) {
            arr.push([`\n`+ posTag![i]![0]+ '/'+posTag![i]![1]])
        }

        setVal(arr.toString())
        setHide(true)
    }


    return (
        <div className="bg-slate-50 min-h-screen flex items-center justify-center">
        <form action={FormSubmit}  >
            <h1>한국어 형태소 분석기(허접)</h1>
            <h2><a href='https://www.npmjs.com/package/notpos_kr'>npm (no dependency)</a></h2>
            <h3>아직 불완전합니다. 개선하고 싶으시다면 PR를 보내 주세요(진짜임)</h3>
            <div >문장을 입력하고 쪼개기를 누르세요. 형태소 태그는 mecab_ko_dic의 것과 동일합니다.</div>
                
            
            <p>
                <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="body" placeholder="string."></textarea>
            </p>
            <div className='flex justify-center items-center h-full'>
            <p><br></br><input className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="submit" value="쪼개기" />
            </p></div>{hide ? <p>{val}</p> : <p></p>}
        </form >
        </div>
    )

}


        

