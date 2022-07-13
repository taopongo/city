import Link from 'next/link'
const Home = () => {
	
	return <div>
		<div><Link href='/city'><a>城市</a></Link></div>
		<div><Link href='/country'><a>市区</a></Link></div>
	</div>
}

export default Home
