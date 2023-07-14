export default defineEventHandler(async (event) => {
    
    let telephoneNumber
    
    telephoneNumber = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('3275803778')
        }, 3000)    
    })
    

    const body = JSON.stringify({
        telephoneNumber
    })
    
    event.node.res.end(body)
})