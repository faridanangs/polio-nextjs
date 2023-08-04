import Transition from "@/components/Transition"

export const metadata = {
    title: "About"
  }

export default function Layout({children}) {
  return (
    <>
    <Transition/>
    <div>{children}</div>
    </>
  )
}
