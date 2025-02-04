import { useEffect, useRef } from "react"
import { gsap } from "gsap";

export default function ExpandedMenu(props) {
    const menu = useRef()
    const tl = useRef()
    const toggle = props.toggle

    useEffect(() => {
        tl.current = gsap.timeline({
            paused:true
        })
        tl.current.to(menu.current, {
            top: 0,
            duration: 0.7,
        })
    })

    useEffect(() => {
        toggle ? tl.current.play() : ''
    }, [toggle])

    return (
        <>
            <section className="fixed left-0 top-[-100vh] z-10 h-[100vh] w-full bg-black">

            </section>
        </>
    )
}