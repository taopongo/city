import city from '@/json/city.json'

const City = () => {
	
	const c = Object.keys(city).map(key => city[key]).map(item => item.map(i => i.name === '市辖区'? i.province : i.name)).flat(2)
	
	return <div>
		{c.map((item, index) => <div key={item + index}>{item}</div>)}
	</div>
}

export default City
