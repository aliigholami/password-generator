const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const numbers='0123456789'
const specialChar='~`!@#$%^&*()/" ?.>,<[]{}÷-_'
const numLength=document.getElementById('numLength')
const pw=document.getElementById('password')
const up=document.getElementById('uppercase')
const low=document.getElementById('lowercase')
const num=document.getElementById('numbers')
const sc=document.getElementById('specialchar')

const generate=()=>{
    let password=''
    for (let i = 0; i <numLength.value; i++){
        let whole= ''
    if (up.checked){
        whole+=upperCase

    }
    if (low.checked){
        whole+=lowerCase
    }
    if (num.checked){
        whole+=numbers
    }
    if (sc.checked){
        whole+=specialChar
    }
    let index=Math.floor(Math.random()*whole.length)
    password+=whole.charAt(index)
    pw.innerHTML=password
   // console.log(whole)
}}
const copyToClipboard=()=>{
    navigator.clipboard.writeText(pw.innerHTML)
    alert('password copied to clipboard')
}
