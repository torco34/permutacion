let arr = [3, 2, 1, 5, 6, 7, ]

function torco() {
    a = arr[1]
    b = arr[2]
    c = arr[3]
    d = arr[4]
    // e = arr[5]
    console.log(`${b}, ${c}, ${d},${a}, 'estena vale'`)
    if (a > b && a > c && a > d && b > c && b > d && c > d) {
        // b es mayor jm 1 7 5 4 3 2 
        console.log(`${d}, ${c}, ${b},${a},`)
    } else if (a < b && c > d && b > c) {
        //de menor a mayor 1,2,3,4,5, copia
        console.log(` ${a}, ${d},${c}, ${b},`)
    } else if (b > a && c > a && a > b) {
        //de menor a mayor 1,2,3,4,5,
        console.log(` ${a}, ${c}, ${d},${b}`)
    } else if (a < b && c < d && a > d) {
        // no entiendo  sale 2 9 1 2 3 4 5 
        console.log(`${c}, ${d}, ${a},${b}, `)
    } else if (a > b && bc) {
        console.log(`${b}, ${c}, ${d},${a}, `)
    } else if (a < b && b < d && a < c) {
        //de menor a mayor 2,8,9,4,5,
        console.log(` ${a}, ${b},${c}, ${d},`)
        // 4,5,9,6,7,8,
    } else if (a < b && c < b) {
        console.log(` ${a}, ${c},${d}, ${b},`)
    } else if (a > b) {
        console.log(` ${a}, ${b},${c}, ${d},`)
    }
}
// console.log(`${b}, ${c}, ${d},${a},`)
// console.log(`${b}, ${c}, ${d},${a},`)
torco()












//con cuatro numeros

let lista = [2,4,5,7,1,];

    a = lista[0];
    b = lista[1];
    c = lista[2]
    d = lista[3];
    e = lista[4];
    // f = lista[5];
    

if(a<b && b<c && c<d && d<e ){
	console.log(`${a},${b}, ${c}, ${d},${e}`)
}else if(a>b && b>c && c>d && d>e ){
		console.log(`${a},${b}, ${c}, ${d},${e}`)
}else if(b<a && b>c && c<d && d<e ){
      console.log(`${a},${b}, ${c}, ${d},${e},${f},${g},${h} ,${i},${j}`)
}else if(b>a&& b>c && c>d && d>e ){
         console.log(`${a},${b}, ${c}, ${d},${e}`)
}
else if(c<a && b<c && b<d && d<e && e<f ){
       console.log(`${a},${b}, ${c}, ${d},${e}`)
}
else if(c>a && c>b && c>d && c>e ){
console.log(` ${e} ${d},${a},${b}, ${c},`)
}else if(d>a && d>b && d>c && d>e){
      console.log(`${e} ${c},${a},${b},  ${d},`)
}else if(d<=a && d<=b && d<=c && d<=e ){
	   console.log(`${a},${b}, ${c}, ${d},${e}`)
}else if(e<=a && e<=b && e<=d && e<=c && e<=d ){
          console.log(`${e},${c},${a},${d},${b},`)
}else if(e>a && e>b && e>c && e>d){
         console.log(`${b},${a}, ${c}, ${d},${e}`)
}else{
         console.log(`${b},${a}, ${c}, ${d},${e}`)
}





// con 10


const lis = [5,0,3,2,1,4,7,9,8,6]
// 1,0,3,2,5,4,6,7,8,9
// const lis 1,0,2,3,4,5,6,7,8,9
let a = lis[0]
let b = lis[1]
let c = lis[2]
let d = lis[3]
let e = lis[4]
let f = lis[5]
let g = lis[6]
let h = lis[7]
let i = lis[8]
let j = lis[9]

	
	if(a<b&& c<d && e<f && g==8 && h==7 && i==6 &&j===5){
		// primer  0,1,2,3,4,9,8,7,6,5 esta bien
		console.log(`${a}, ${b}, ${c}, ${d}, ${e},${j},${i},${h},${g} ,${f}`)
	} 
	else if(a===3 && b===4 && c===5&& d===8 && e<f && g>h && i>j){
		// 3,4,0,2,5,8,7,6,9,1 listo
		console.log(`${c}, ${j}, ${d}, ${a}, ${b},${e},${h},${g},${f} ,${i}`)
	}  
	else if(a===3 && b===4 && c<d && e<f && g>h && i>j){
		// 3,4,0,2,5,6,8,7,9,1 listo
		console.log(`${c}, ${j}, ${d}, ${a}, ${b},${e},${f},${h},${g},${i}`)
	} 
	else if(a>b && c>d && e==1 && g>h && i>j){
		// dos   5,4,3,2,1,0,9,8,7,6 esta bien
  console.log(`${f}, ${e}, ${d}, ${c}, ${b},${a},${j},${i},${h} ,${g}`)
	}
	else if(a==0 && b==4 && c==1 && d==2 && e==3 && f==7 && g==6 &&h==5 && i==8&&j==9){
		 console.log(`${a}, ${c}, ${d},${e},${b},${h},${g},${f},${i},${j}`)
		 // 0,4,1,2,3,7,6,5,8,9 esta bien
	}else if(a<b && c!=d && e<f && g===6 && h===7&& i<j ){
		 console.log(`${a}, ${b}, ${c},${d},${e},${f},${g},${h},${i},${j}`)
		 // fila 0,1,2,3,4,5,6,7,8,9 esta bien0,8,1,6,4,5,3,7,2,9
	}
	else if(a==0 && b==3 && c>=d && e<f && g>h ){
		 console.log(`${a}, ${d}, ${c},${b},${e},${h},${g},${f},${i},${j}`)
		 // 0,3,2,1,4,7,6,5,8,9 este es a
	}

		else if(a<b && c<d && e<f && g===8 && h===7 && i===6 && j===9){
		 console.log(`${a},${b}, ${c}, ${d},${e},${f},${i},${h},${g},${j}`)
		 // 0,1,2,3,4,5,8,7,6,9 esta bn
		 
	}
	else if(a>b && c<d && e>f && g<h && i<j){
		 console.log(`${i},${j}, ${g}, ${h},${f},${b},${c},${d},${e},${a}`)
		 // 9,5,6,7,8,4,2,3,0,1 esta bn
		 
	}
else if(a>b && c<d && e>f && g>h && i<j){
		 console.log(`${i},${j}, ${h}, ${f},${g},${b},${c},${d},${e},${a}`)
		// 9,5,6,7,8,3,4,2,0,1 esta bien
		 
	}
	else if(a===9 && c<=d && e>=f ){
		 console.log(`${g},${j}, ${i}, ${f},${h},${b},${c},${d},${e},${a}`)
		// 9,5,6,7, 8,3, 0,4, 2,1, esta bn 7,6,0,1,9,5,3,8,4,2
		 
	}
	else if(a<=b && c<=d && f>=e && g>=h && i==7 && j==9){
		 console.log(`${a}, ${c}, ${h},${g},${e},${f},${d},${i},${b},${j}`)
		 // 0,8,1,6,4,5,3,2,7,9 est bn
	}
	else if(a<=b && c<=d && e>=f && g>=h && i===7 &&j===9){
		 console.log(`${a},${c}, ${h}, ${d},${f},${e},${g},${i},${b},${j}`)
		 // 0,8,1,3,5,4,6,2,7,9 esta bn
		 
	}

else if(a==0 &&  b>=d && f>=e && g>=h && i<=j){
		 console.log(`${a}, ${c}, ${h},${g},${e},${f},${d},${i},${b},${j}`)
		 // 0,8,1,6,4,5,3,2,7,9   2,5,3,7,0,1,9,4,6,8 
	}

	else if(a<=b && c<=d && f>=e && g>=h && i<=j){
		 console.log(`${e}, ${f}, ${a},${c},${h},${b},${i},${d},${j},${g}`)
		 //2,5,3,7,0,1,9,4,6,8    abcdefghij
	}
	else if(a<b && c<d && e==4 &&f==5 && g<h && i<j ){
		 console.log(`${a}, ${c}, ${i},${g},${e},${f},${d},${h},${b},${j}`)
		 // fila 0,8,1,6,4,5,3,7,2,9 a,b,c,d,e,f,g,h,i,j, a c h g c d h donde copi
	}

	else if(a<b && c<d && e<f && g<h && i<j ){
		 console.log(`${e}, ${f}, ${a},${c},${i},${b},${j},${d},${g},${h}`)
		 // 2,5,3,7,0,1,8,9,4,6  a,b,c,d,e,f,g,h,i,j, a c h g c d h copia
	}
	
	else if(a<=b && c===1 && d==6  && e>=f && g>=h && i<j){
		 console.log(`${a},${c},${i},${h},${f},${e},${d},${g},${b},${j}`)
		 //0,8,1,6,5,4,7,3,2,9  esta bn
		 
	}
	else if(a<=b && c<=d && e>=f && g>=h && i<j){
		 console.log(`${f},${a},${i},${h},${b},${c},${d},${g},${e},${j}`)
		 //1,4,5,6,8,0,7,3,2,9  esta bn
		 
	}
	else if(a>=b && c<=d && e<=f && g<=h && i>=j){
		 console.log(`${j},${c},${b},${a},${d} ${g},${h},${e},${f},${i}`)
		 //3,2,1,4,7,8,5,6,9,0 esta bn
		 
	}
else if(a==3 && c<=d && e<=f && g>=h&& i>=j ){
		 console.log(`${j},${c},${b},${a},${d},${e},${h},${g},${f},${i}`)
		 //3,2,1,4,5,8,7,6,9,0  esta bn
		 
	}
    else if(a<=b && c>=d && e<f && g==6 &&h==5 && i<=j){
		 console.log(` ${e}, ${d},${a},${b},${c},${h},${g},${f} ${i},${j}`)
	// 	 // 2,3,4,1,0,7,6,5,8,9
	}
  else if(a<=b && c===4 && d===6){
		 console.log(` ${g}, ${ h},${a},${b},${c},${i},${d },${f} ${e},${j}`)
	// 	 // 2,3,4,6,8,7,0,1,5,9s 
	//      a,b,c,d,e,f,g,h,i,j,    g,h,a
	}
   else if(a<=b && c<=d && f>=e && g>=h ){
		 console.log(` ${d}, ${e},${a},${b},${h},${f},${i},${c} ${j},${g}`)
	// 	 //2,3,7,0,1,5,9,4,6,8  
	    // a,b c d e f g,h i, j = d,e,a,b,h,f,i,c,j,
	}

	else if(a<=b && c>=d && e<=f && g>=h && i==6&& j==8){
		 console.log(` ${d}, ${e},${a},${b},${h},${f},${i},${c} ${j},${g}`)
	// 	 //2,3,7,0,1,5,9,4,6,8 
	    // a,b c d e f g,h i, j = d,e,a,b,h,f,i,c,j,
	}


	   else if(a<=b  && d==3 && e<=f && g>=h && i==6 && j==4){
		 console.log(` ${e}, ${f},${a},${d},${j},${c},${i},${b} ${h},${g}`)
	// 	 //2,7,5,3,0,1,9,8,6,4     2,7,5,1,0,3,9,8,6,4
	    // a,b c d e f g,h i, j = d,e,a,b,h,f,i,c,j,
	}


   else if(a<=b  && d==1 && e==0){
		 console.log(` ${e}, ${d},${a},${f},${j},${c},${i},${b} ${h},${g}`)
	//     2,7,5,1,0,3,9,8,6,4   2,7,5,1,8,9,3,0,6,4
	    // a,b c d e f g,h i, j = d,e,a,b,h,f,i,c,j,
	}

  else if(a===2  && c==5 ){
		 console.log(` ${h}, ${d},${a},${g},${j},${c},${i},${b} ${e},${f}`)
	//     2,7,5,1,8,9,3,0,6,4   7,8,5,1,9,0,3,6,4,2
	    // a,b c d e f g,h i, j = d,e,a,b,h,f,i,c,j,
	}
  

    else if(a<=b  && c==0 ){
		 console.log(` ${c}, ${d},${a},${g},${j},${h},${b},${i} ${e},${f}`)
	//     2,6,0,1,8,9,3,5,7,4
	    // a,b c d e f g,h i, j = d,e,a,b,h,f,i,c,j,
	}


    else if(a<=f && c==0 ){
		 console.log(` ${c}, ${d},${e},${b},${j},${h},${g},${i} ${a},${f}`)
	//     8,3,0,1,2,9,6,5,7,4    7,6,0,1,9,5,3,8,4,2
	    // a,b c d e f g,h i, j = d,e,a,b,h,f,i,c,j,
	}
else if(g===9 ){
		 console.log(` ${d}, ${e},${b},${c},${j},${h},${g},${i} ${a},${f}`)
	//     8,2,3,0,1,9,6,5,7,4  8,2,3,0,1,9,5,6,4,7
	    // a,b c d e f g,h i, j = d,e,a,b,h,f,i,c,j,
	}

else if(e<=f && d===1){
		 console.log(` ${d}, ${e},${b},${c},${i},${g},${h},${j} ${a},${f}`)
	//     8,2,3,0,1,9,5,6,4,7   1,0,3,2,4,5,6,7,8,9
	    // a,b c d e f g,h i, j = d,e,a,b,h,f,i,c,j,
	}

	else if(b===6 && d===0){
		 console.log(` ${d},${e},${a},${i},${c},${g},${b},${j} ${h},${f}`)
	//     2,6,4,0,1,9,5,8,3,7  2,6,4,9,5,0,1,8,3,7
	    // a,b c d e f g,h i,j = d,e,a,b,h,f,i,c,j,
	}

		else if(b===6 && d===9){
		 console.log(` ${f},${g},${a},${i},${c},${g},${b},${j} ${h},${f}`)
	//     2,6,4,9,5,0,1,8,3,7
	    // a,b c d e f g,h i,j 
	}

		else if(b===2 && d===9){
		 console.log(` ${f},${a},${b},${c},${i},${e},${g},${j} ${h},${d}`)
	//     7,8,9,0,1,2,3,4,5,6
	    // a,b c d e f g,h i,j 
	}
	else if(a<=c && d===0){
		 console.log(` ${d},${e},${f},${g},${h},${i},${j},${a} ${b},${c}`)
	//     7,8,9,0,1,2,3,4,5,6
	    // a,b c d e f g,h i,j 
	}
else if(a<=c && f!=4){
		 console.log(` ${h},${i},${j},${d},${e},${f},${g},${a} ${b},${c}`)
	//     7,8,9,3,4,5,6,0,1,2  7,8,9,3,0,1,2,4,5,6
	    // a,b c d e f g,h i,j 
	}
else if(f===1){
		 console.log(` ${e},${f},${g},${d},${h},${i},${j},${a} ${b},${c}`)
	//     7,8,9,3,0,1,2,4,5,6   0,1,9,3,7,8,2,4,5,6
	    // a,b c d e f g,h i,j 
	}
else if(c>=d && d===3){
		 console.log(` ${a},${b},${g},${d},${h},${i},${j},${e} ${f},${c}`)
	//     0,1,9,3,7,8,2,4,5,6  0,1,9,6,7,8,2,4,5,3
	    // a,b c d e f g,h i,j 
	}

	else if(c>=d && d===6){
		 console.log(` ${a},${b},${g},${j},${h},${i},${d},${e} ${f},${c}`)
	//     0,1,9,6,7,8,2,4,5,3  0,1,9,2,6,7,8,4,5,3
	    // a,b c d e f g,h i,j 
	}
	else if(c>=d && f===7){
		 console.log(` ${a},${b},${d},${j},${h},${i},${e},${f} ${g},${c}`)
	//     0,1,9,2,6,7,8,4,5,3 0,1,9,5,3,7,8,4,2,6
	//     a,b c d e f g,h i,j
}

	else if(d===5 && e===3 ){
		 console.log(` ${a},${b},${i},${e},${h},${d},${j},${f} ${g},${c}`)
	//     0,1,9,5,3,7,8,4,2,6     7,8,4,2,6,0,1,9,5,3
	    // a,b c d e f g,h i,j 
}

	else if(d===2 && e===6 ){
		 console.log(` ${f},${g},${d},${j},${c},${i},${e},${a} ${b},${h}`)
	//     7,8,4,2,6,0,1,9,5,3
	    // a,b c d e f g,h i,j 
}

	else if(a>b && e===9 ){
		 console.log(` ${c},${d},${j},${g},${i},${f},${b},${a} ${h},${e}`)
	//     7,6,0,1,9,5,3,8,4,2    7,8,5,1,9,0,3,6,4,2
	    // a,b c d e f g,h i,j 
}
	else if(a!=b && c===5){
		 console.log(` ${f},${d},${j},${g},${i},${c},${h},${a} ${b},${e}`)
	//     7,8,5,1,9,0,3,6,4,2
	    // a,b c d e f g,h i,j 
}
	else if(a<=b && e===9 ){
		 console.log(` ${f},${d},${h},${g},${j},${c},${i},${a} ${b},${e}`)
	//     7,8,5,1,9,0,3,2,6,4
	    // a,b c d e f g,h i,j 
}


	else if(a!=b && c===2 ){
		 // console.log(` ${b},${a},${c},${d},${e},${f}, ${g},${h},${i},${j}`)
	//     1,0,2,3,4,5,6,7,8,9
	    // a,b c d e f g,h i,j 
}
	else if(a>=b && c===3){
		 console.log(` ${b},${a},${d},${c},${f},${e}, ${h},${g},${j},${i}`)
	//     1,0,3,2,4,5,6,7,8,9
	    // a,b c d e f g,h i,j 
}else{

}














