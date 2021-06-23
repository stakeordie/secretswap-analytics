import Table from '../components/Table';
import mock_data from '../MOCK_DATA.json';

const Tokens = ()=>{
    return <div>
        <Table 
            title='Top tokens' 
            index={true}
            headers={['Name','Symbol','Liquidity','Volumne (24hr)','Price','Price Change(24hr)']} 
            //@ts-ignore
            data={mock_data.slice(0,10)}/>
    </div>
}

export default Tokens;