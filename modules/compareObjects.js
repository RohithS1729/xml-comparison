let one={}
let two={}
let both={}
let compareObjects=(obj1,obj2)=>{


        // let array1=Object.keys(obj1)
        let array2=Object.keys(obj2)
        let uniqueArr=[...array2]
        for(x in obj1){
            if(array2.includes(x) ){
                let value1=obj1[`${x}`]
                let value2=obj2[`${x}`]

                if(typeof(value1)==="object"){
                    if(JSON.stringify(obj1) === JSON.stringify(obj2) ){
                        both[`${x}`]=value1
                        let index=uniqueArr.indexOf(x)
                        uniqueArr.splice(index,1)
  
                    }else{
                        one[`${x}`]=value1
                        two[`${x}`]=value2
                    }
                }else{
                    if(value1===value2){
                        both[`${x}`]=value1
                        let index=uniqueArr.indexOf(x)
                        uniqueArr.splice(index,1)
   
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
        // now unique has uniqure keys to array2 
        for(x in obj2){
            if(uniqueArr.includes(x)){
                two[`${x}`]=obj2[`${x}`]
            }
        }
        
        return {one,two,both}
    }
module.exports=compareObjects