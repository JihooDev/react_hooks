import { useEventListener } from 'usehooks-ts'

type Handler = (event: MouseEvent) => void

export function useClickAnyWhere(handler: Handler) {
    useEventListener('click', event => {
        handler(event)
    })
}