"use client"
import React from 'react'
import { useState } from 'react'
//import FormSubmit from './FormSubmit'
import { useFormStatus } from 'react-dom'
import { Component } from 'react'
import { useEffect } from 'react'
import styles from './style.module.css'
import dynamic from 'next/dynamic'


export default function FormalLoveTest() {
    const [val, setVal] = React.useState('');
    const [hide, setHide] = React.useState(false);


    const FormSubmit = async (formData: FormData) =>  {
    

        const name = formData.get("no1")?.toString()!
        const fun = formData.get("no2")?.toString()!
        const love = formData.get("no3")?.toString()!
        const pretty = formData.get("no4")?.toString()!
        const isOtaku = formData.get("no5")?.toString()!
        const urban = formData.get("no6")?.toString()!
        const greenorWhite = formData.get("no7")?.toString()!
        const anime = formData.get("no8")?.toString()!
        const danger = formData.get("no9")?.toString()!
        const body = formData.get("no10")?.toString()!
        
        let prettiness:String
        let dangerness : string
        let otaku:String
        let region:String
        let no2 = ["시청","을지로입구","을지로3가","을지로4가","동대문역사문화공원"
            ,"신당","상왕십리","왕십리","한양대","뚝섬","성수","건대입구","구의"
            ,"강변(동서울터미널)","잠실나루","잠실(송파구청)","잠실새내","종합운동장"
            ,"삼성(무역센터)","선릉","역삼","강남","교대(법원·검찰청)","서초","방배","사당"
            ,"낙성대","서울대입구(관악구청)","봉천","신림","신대방","구로디지털단지"
            ,"대림(구로구청)","신도림","문래","영등포구청","당산","합정","홍대입구","신촌"
            ,"이대","아현","충정로(경기대입구)"]
        let kyongki = ["수원시","용인시","성남시","부천시"
                    ,"화성시","안산시","안양시","평택시"
                    ,"시흥시","김포시","광주시","광명시"
                    ,"군포시","하남시","오산시","이천시"
                    ,"안성시","의왕시","양평군","여주시"
                    ,"과천시","고양시","파주시"
                    ,"의정부시","양주시","구리시","포천시"
                    ,"동두천시 ","가평군","연천군"]
        let colour : String


        switch (pretty) {
            case "1" : prettiness = "당신 대신 복제할 만한 아름다운 인간을 찾아서, 그 인간을 복제하고 복제인간들끼리 연애하는 것을 구경한다."
            case "2" : prettiness = "당신 대신 복제할 만한 아름다운 인간을 찾아, 그 인간을 복제해 다른 회사에 납품한다."
            case "3" : prettiness = "끝없는 자기복제를 거쳐 자신의 유전자를 개조한다."
            case "4" : prettiness = "당신 자신을 복제해서 복제된 결과물과 사귄다."
            case "5" : prettiness = "당신 자신을 복제하고 복제인간들끼리 연애하는 것을 구경한다."
        }

        switch (isOtaku) {
            case "50" : otaku = "방구석에서 컴퓨터로 트위터를 하며"
            case "51" : otaku = "오프라인에서 온갖 오타쿠 행사를 다니며"
        }

        switch (urban) {
            
            case "61" : region = no2[Math.floor(Math.random() * 43)]
            case "60" : region = kyongki[Math.floor(Math.random() * 30)]
        }

        switch (danger) {
            case "91" : dangerness = "회사의 최고 관리자가 되기 위하여"
            case "92" : dangerness = "돈을 더 많이 벌기 위하여"
            case "93" : dangerness = "오래 전 꿈을 이루기 위해"
            case "94" : dangerness = "단지 재미를 위해"
            case "95" : dangerness = "아무 이유도 없이 그냥"
        }

        switch (greenorWhite) {
            
            case "70" : colour ="지하 실험실"
            case "71" : colour = "가상감정연구소"
        }

        const res = name + "님은 " +  otaku! + " "+ anime 
            + "의 2차 창작물들을 즐기는 일상을 보낸다.\n오타쿠 행위를 할 돈이 다 떨어지자 " + name + "씨는 복제인간 생산 회사인 녹색물산에 입사하기로 한다.\n"
            + name +  "의 집이 위치한 " +  region! + "에서 회사가 있는 남양주시 별내면으로 출퇴근하길 얼마나 지났을까.. \n"
            + "어느 날 당신은 " +  dangerness! + " " + fun + "이라는 것을 댓가로 지불하고 " + prettiness! 
            + "\n\n 그렇게 시간은 흐르고, 언젠가 " + colour! + "에서 갑작스럽게 마주친, 사랑하는 누군가를 구하기 위해 당신은 " + body + ", " + love +", 그리고.. \"" 
            +  otaku! + " "+ anime + "의 2차 창작물에 파묻힌 평화로운 일상\" 모두를 내어준다."
        
            setVal (res)
            setHide (true)
    }
    

    return (
        
        <div className="bg-gradient-to-r from-indigo-500 via-green-500 to-lime-500 min-h-screen flex items-center justify-center">
            
            <form action={FormSubmit} suppressHydrationWarning={true}>
                <br></br>
            <h1 className="flex justify-center items-center h-full font-['Pretendard-Regular'] block text-2xl font-bold text-white mb-4">당신이 녹색물산에 입사한다면 일어나게 될 일</h1>
            <a href='https://tumblbug.com/formallove' className="bg-white p-7 rounded-md flex justify-center items-center h-full font-['Pretendard-Regular'] block text-l font-bold text-grey-700 mb-4"> 「사랑은 포르말린에 담가서」 게임 펀딩 바로가기!</a>
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                    <div className="mb-4">
                        <label className="font-['Pretendard-Regular'] block text-m font-medium text-gray-700">1. 당신의 이름은 무엇입니까?</label>
                        <input className='class="border-2 border-gray-300 p-1 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"' type="text" name= "no1" placeholder="이름 또는 별명 입력" required /></div>
                    <div className="mb-4">
                        <label className="font-['Pretendard-Regular'] block text-m font-medium text-gray-700">2. 재미를 위해 어디까지 내어 줄 수 있습니까?</label>
                        <input className="border-2 border-gray-300 p-1 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" type="text" name= "no2" placeholder="단어 입력" required/></div>
                    <div className="mb-4">
                        <label className="font-['Pretendard-Regular'] block text-m font-medium text-gray-700">3. 그렇다면, 사랑을 위해서는 어디까지 내어 줄 수 있습니까? </label>
                        <input className="border-2 border-gray-300 p-1 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" type="text" name="no3" placeholder="단어 입력" required/></div>
                    <div className="mb-4"> 
                        <label className="font-['Pretendard-Regular'] block text-m font-medium text-gray-700">4. 스스로 아름답다고 생각하십니까? </label>
                        <input type="radio" className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="1" name="no4" value="1"/><label className="font-['Pretendard-Regular'] text-sm font-medium text-gray-700" htmlFor="1"> 아니, 전혀</label> <br></br>
                        <input type="radio" className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="2" name="no4" value="2"/><label className="font-['Pretendard-Regular'] text-sm font-medium text-gray-700" htmlFor="2"> 별로.</label><br></br>
                        <input type="radio" className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="3" name="no4" value="3"/><label className="font-['Pretendard-Regular'] text-sm font-medium text-gray-700" htmlFor="3"> 모르겠다.</label><br></br>
                        <input type="radio" className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="4" name="no4" value="4"/><label className="font-['Pretendard-Regular'] text-sm font-medium text-gray-700" htmlFor="4"> 조금 그럴지도?</label><br></br>
                        <input type="radio" className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="5" name="no4" value="5" required/><label className="font-['Pretendard-Regular'] text-sm font-medium text-gray-700" htmlFor="5"> 당연하지요</label> </div>
                        
                    <div className="mb-4">     
                    <label className="font-['Pretendard-Regular'] block text-m font-medium text-gray-700">5. 방구석 오타쿠이십니까? </label>
                    <input type="radio" className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="50" name="no5" value="50"/><label className="font-['Pretendard-Regular'] text-sm font-medium text-gray-700" htmlFor="50"> 네.</label> <br></br>
                    <input type="radio" className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="51" name="no5" value="51"required/><label className="font-['Pretendard-Regular'] text-sm font-medium text-gray-700" htmlFor="51"> 아뇨, 밖에 나가는 오타쿠입니다.</label>
                    </div>
                    <div className="mb-4">
                    <label className="font-['Pretendard-Regular'] block text-m font-medium text-gray-700">6. 도심보다 시 외곽이 좋다. </label>
                    <input type="radio" className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="60" name="no6" value="60"/><label className="font-['Pretendard-Regular'] text-sm font-medium text-gray-700" htmlFor="60" > 네. 시 외곽이 좋다.</label> <br></br>
                    <input type="radio" className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="61" name="no6" value="61" required/><label className="font-['Pretendard-Regular'] text-sm font-medium text-gray-700" htmlFor="61"> 아니. 도심이 좋다.</label></div>
                    <div className="mb-4">
                    <label className="font-['Pretendard-Regular'] block text-m font-medium text-gray-700">7. 초록색보다 하얀색이 좋다. </label>
                    <input type="radio" className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="70" name="no7" value="70"/><label className="font-['Pretendard-Regular'] text-sm font-medium text-gray-700" htmlFor="70"> 네. 하얀색이 좋다.</label> <br></br>
                    <input type="radio" className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="71" name="no7" value="71" required/><label className="font-['Pretendard-Regular'] text-sm font-medium text-gray-700" htmlFor="71"> 아니. 초록색이 좋다.</label><br></br></div>
                    <div className="mb-4">
                        <label className="font-['Pretendard-Regular'] block text-m font-medium text-gray-700">8. 가장 좋아하는 애니/만화/소설/게임의 이름은?  </label>
                    <input className= "border-2 border-gray-300 p-1 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" type="text" name= "no8" placeholder="단어 입력" required/></div>
                    <div className="mb-4">
                        <label className="font-['Pretendard-Regular'] block text-m font-medium text-gray-700">9. 위험을 얼마나 감수할 수 있습니까? </label>
                    <input type="radio" className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="91" name="no9" value="91"/><label className="font-['Pretendard-Regular'] text-sm font-medium text-gray-700" htmlFor="91"> 나는 겁쟁이다.</label> <br></br>
                    <input type="radio" className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="92" name="no9" value="92"/><label className="font-['Pretendard-Regular'] text-sm font-medium text-gray-700" htmlFor="92"> 확률을 계산해서 기댓값이 0보다 커야 행동한다.</label><br></br>
                    <input type="radio" className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="93" name="no9" value="93"/><label className="font-['Pretendard-Regular'] text-sm font-medium text-gray-700" htmlFor="93"> 확률을 계산해서 기댓값이 0 이상일 때 행동한다.</label><br></br>
                    <input type="radio" className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="94" name="no9" value="94"/><label className="font-['Pretendard-Regular'] text-sm font-medium text-gray-700" htmlFor="94"> 확률이 낮더라도 행동해야 할 때가 있다고 생각한다.</label><br></br>
                    <input type="radio" className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" id="95" name="no9" value="95" required/><label className="font-['Pretendard-Regular'] text-sm font-medium text-gray-700" htmlFor="95"> 오히려 낮은 확률을 즐기는 편이다.</label><br></br></div> 
                    <div className="mb-4"><label className="font-['Pretendard-Regular'] block text-m font-medium text-gray-700">10. 신체 부위 중에서 가장 소중한 곳은 어디입니까?  </label>
                    <input className= "border-2 border-gray-300 p-1 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" type="text" name="no10" placeholder="단어 입력" required/>
                    <div className="mb-4">
                    <br></br>

                    <div className="flex justify-center items-center h-full">
                    <button className ="px-8 py-4 bg-gradient-to-r from-green-500 to-lime-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg " type="submit" name="button" value="submit">결과 보기</button></div></div>
                    </div>
                {hide ?  <div className="font-['Pretendard-Regular'] block text-m font-medium text-gray-700"><hr/><br></br>{val}</div> : <p></p>}
            </div>
            <br></br>
            <div className="flex justify-center items-center h-fullfont-['Pretendard-Regular'] block text-s font-medium text-white">poset의 개인 페이지입니다.</div>
            <br></br>
            </form>
        </div >
    )
}