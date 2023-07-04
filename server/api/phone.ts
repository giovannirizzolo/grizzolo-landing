export default defineEventHandler(async (event) => {
    console.log('getRequestUrl(event) :>> ', getRequestURL(event));
    
    let telephoneNumber
    
    telephoneNumber = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('3275803778')
        }, 3000)    
    })
    
    console.log('telephoneNumber :>> ', telephoneNumber);

    const body = JSON.stringify({
        telephoneNumber
    })
    
    event.node.res.end(body)
})