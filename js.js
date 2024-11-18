"use strict";
// misal 1 arrayin butun elementlerini while ile konsolda gostermek
// ----------------------------------
// let instrument=['cup','plate','spoon','knife','fork']
// let i=0;
// while(i<instrument.length){
//     console.log(instrument[i]);
//     i++;
    
// }
// misal 2 arrayin icerisinde s herfi ile baslayan elementleri konsolda gostermek
// -----------------------------------------------------
// let vegetable=['xiyar','pomidor','sogan','yerkoku','sarimsaq','Semeni']
// let i=0;
// while(i<vegetable.length){
//     if(vegetable[i][0].toLowerCase()=="s") {
//         console.log(vegetable[i]); }
//     i++;
       
// }

// misal 3 1den 100e kimi butun ededlerin toplamini tapmaq 
// ----------------------------------------
// let eded=0;
// for( let i=1; i<=100; i++){
//     eded+=i;

// }
//     console.log(eded);
    

// misal 4 arrayin 5 herfli elementleri arasinda 5 herfli olanin son herfini while ile gostermek 5 herfli olmayanlari continue ile kecin
// -----------------------------------------
// let item=['kitab','defter','qelem','karandas','jurnal','pozan','vereq']
// let i=0;
// while(i<item.length){
//     if(item[i].length==5){
//         console.log(item[i].slice(-1));
// i++;
        
//     }
//     else{
//         i++;
//         continue;
//     }
    
// }
// misal 5 100000 den asagi dogru gederek 9999 a bolunen ilk ededi konsolda gostermek
// --------------------------------------
// let eded=100000;
// while(eded>0){
// if(eded%9999==0){
//     console.log(eded);
//     break;
    
// }
// eded--;


// }
// misal 6 bu stringin saitler cixarlms vezyetini konsolda goster
// ------------------------------------------------
// let string='men bugun java oyrenirem';
// let newString=string.replace(/[aioue]/gi,'');
// console.log(newString);

// DERS2 for for in for of
// misal 1 arrayin butun elemetlerini konsolda gostermek
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
// let item=['cup','plate','spoon','knife','fork'];

// for(let i=0;i<5;i++){
//     console.log(item[i]);
    
    
// }
// misal 2 arrayin icerisinde s herfi ile baslayan elementleri konsolda gostermek
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let vegetable=['pomidor','sogan','yerkoku','sarimsaq','Semeni']
// for(let i=0;i<vegetable.length;i++){
//     if(vegetable[i][0].toLowerCase()=='s'){
//         console.log(vegetable[i]);
        
     
//     }
//     }
// misal 3 1 den 100 eqeder ededin cemi
// +++++++++++++++++++++++++++++++++++++++++=
// let eded=0;
// for(let i=0;i<=100;i++){
//    eded+=i;    
    
// }
// console.log(eded);
// misal 4 arrayin 5 herfli elementleri arasinda 5 herfli olanin son herfini for ile gostermek 5 herfli olmayanlari continue ile kecin
// +++++++++++++++++++++++++++++++++++++++++=
// let item=['kitab','defter','qelem','karandas','jurnal','pozan','vereq'];
// for( let i=0;i<item.length;i++){
//     if(item[i].length==5){
//         console.log(item[i].slice(-1));
        
//     }
  
// }

// misal 5 100000 den asagi dogru gederek 9999 a bolunen ilk ededi konsolda gostermek
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=/

// for (let i=100000;i>0;i--){
//     if(i%9999===0){
//         console.log(i);
//         break;
        
//     }
// }

// ?????????????????????????????????????????????????/
//  misal1 funksiya run olunduqdan 5 saniye sonra konsolda bes saniye bitdi yazan bir funksiya hazirla
// №№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№3

// function func() {
//     setTimeout(()=> {
//         console.log("bes saniye bitdi");
        
//     },5000);
// }
// func();
// misal2 konsolda 100den asagi geri saym eden ve 0 a catanda geri saym bitdi yazan bir funksiya hazrla
// ###############################################################

// function func(eded){
//     if(eded<0){
//         console.log("geri sayim bitdi");
//         return;

        
//     }
//     console.log(eded);
//     setTimeout(()=> func(eded-1));
//     }
// func(100);
// misal3 65.4345 ededini yuvarlaqlasdirin
// #######################################################################################3
// ceil ile yuxari yuvarlaqlasdrdm
// let eded=654345;
// let yuvarlasdr=Math.ceil(eded/100000)*100000;
// console.log(yuvarlasdr);// №№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№3

// misal4 0 10 arasi random eded veren kod
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
// let random=Math.floor(Math.random()*(10-1)+1);
// console.log(random);
// misal5 indiki tarixe gore il ay gun gosterme
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// let now=new Date();
// let il=now.get

// """""""""""""""""""""""""""""""""""""""""""""""::::::::::::::::::::::::::::""""""""""""">>>>>>>>>>>>>>>>
// sual1
// let array = ["kitab", "defter", "qelem", "pozan"];
// let i = array.indexOf("qelem"); 

//     array.splice(i, 1, "jurnal","karandas"); 

// console.log(array); 








// sual2 
// let eded = [2, 5, 32, 12, 6];

// for (let i = 0; i < eded.length; i++) {
//     if (eded[i] % 2 == 0) {
//         console.log("cut");
//     } else {
//         console.log("tek");
//     }
// }




// sual3
let a = [-23, 5, 34, 3, -3, 0];
let result = a.filter(num => num > 0);
  let netice= a.map(num => num * 2)  ;        
      let son_netice= a.sort((a, b) => b - a);       
console.log(result); 
console.log(netice); 
console.log(son_netice); 




// sual4
// let command ="cancel"
// switch(command){
//     case 'save':
//     console.log("yadda saxlandi")
//     break;
// case 'cancel':
//     console.log("cixildi");
//     break;
//     case'update':
//     console.log("deysiklikler yadda saxlanildi");
//     break;
//     default:
//         console.log("daxil etdiyiniz command yoxdur");
//         break;
        
    
    
// }
// sual5
// let a = [4, 6, 2, 5, 7]; 

// let result = a.map(num => num % 2 === 0 ? 'cut' : 'tek'); 

// console.log(result); 



// sual6
// let setir="abcfdeg"
// let array=setir.split('')
// console.log(array);




// sual7
