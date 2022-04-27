import styles from 'styles/pages/index.module.scss'

export default function Home() {
  return (
    <>
    </>
  )
}

export function getStaticProps() {
  const props = {
    title: 'Home'
  }

  return { props }
}
