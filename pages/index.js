import Head from "next/head"
import styles from "../styles/Home.module.css"
// import ManualHeader from "../components/ManualHeader"
import Header from "../components/Header"
import { useMoralis } from "react-moralis"
import { Avatar } from "web3uikit"
import LotteryEntrance from "../components/LotteryEntrance"

const Home = () => {
    const { isWeb3Enabled } = useMoralis()
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our Smart Contract Lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <LotteryEntrance />
        </div>
    )
}

export default Home
