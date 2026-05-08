export default defineEventHandler((event) => {
    const { phoneNumber } = useRuntimeConfig(event)
    return { telephoneNumber: phoneNumber }
})
