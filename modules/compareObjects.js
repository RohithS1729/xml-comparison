let one={}
let two={}
let both={}
let compareObjects=(obj1,obj2,name)=>{


        let array1=Object.keys(obj1)
        let array2=Object.keys(obj2)
        let test=[...array2]
        for(x in obj1){
            if(array2.includes(x) ){


                let value1=obj1[`${x}`]
                let value2=obj2[`${x}`]

                if(typeof(value1)==="object"){
                    if(JSON.stringify(obj1) === JSON.stringify(obj2) ){


                        both[`${x}`]=value1
                        let index=test.indexOf(x)
                        test.splice(index,1)
    
                    }else{


                        one[`${x}`]=value1
                        two[`${x}`]=value2
                    }

                }else{
                    if(value1===value2){


                        both[`${x}`]=value1
                        let index=test.indexOf(x)
                        test.splice(index,1)
    
                    }else{


                        one[`${x}`]=value1
                        two[`${x}`]=value2
                    }
                }


                

            }else{
                
                let value1=obj1[`${x}`]
                one[`${x}`]=value1





            }
        }
        // now array2 has uniqure keys to array2 
        for(x in obj2){
            if(test.includes(x)){
                two[`${x}`]=obj2[`${x}`]
            }
        }
        
        // console.log(one,two,both)
        return {one,two,both}
    }
module.exports=compareObjects