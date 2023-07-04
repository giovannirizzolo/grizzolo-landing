let timeout: ReturnType<typeof setTimeout>
export function getDebounced(fetchParamsCallback: () => void, time = 300) {
    clearTimeout(timeout)

    timeout = setTimeout(fetchParamsCallback, time)
}