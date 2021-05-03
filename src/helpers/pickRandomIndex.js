export function randomIndex(){
   let randomIndex = Math.floor(Math.random() * 10)
    if(randomIndex === 3){
       randomIndex()
    }
   return randomIndex
}