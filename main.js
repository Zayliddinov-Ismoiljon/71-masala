// Masala: nta elementdan tashkil topgan massiv elementlari bir biriga oxshab ketadi. Faqat bir xil qiymatlardan bittasini chiqaruvchi dastur tuzing


let N=4; 
const a=[1,2,3,4,5,6,2,5,1];
const b=[];


for(let i = 0; i < a.length; i++){
    console.log(a[i])
    if(b.includes(a[i]) == false){
        b.push(a[i])
    }
}
console.log(b);
