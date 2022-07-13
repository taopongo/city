import country from '@/json/country.json'

const Country = () => {
	
	const province = ['11', '12', '31', '32', '33', '35', '37', '44', '50', '51'].map(item => Object.keys(country).filter(key => key.slice(0, 2).includes(item))).flat(2)
	
	const c = province.map(key => country[key]).map(item => item.map(i => i.name)).flat(2)
	
	return <div>
		{c.map((item, index) => <div key={item + index}>{item}</div>)}
	</div>
}

export default Country
