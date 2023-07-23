export default defineEventHandler(async (event) => {
    
    let telephoneNumber
    
    telephoneNumber = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('***REDACTED***')
        }, 3000)    
    })
    

    return { 
        telephoneNumber
    }
})