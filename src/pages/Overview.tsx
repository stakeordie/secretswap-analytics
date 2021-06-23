import '../sass/pages/Overview.scss';
import Table from '../components/Table';
import mock_data from '../MOCK_DATA.json';

const Overview = ()=>{

    return <div className='overview'>
        <h1>Overview</h1>
        <div className='main-info'>
            <p>SCRT Price: $2.89</p>
            <p>Transactions (24h): 12,399</p>
            <p>Pairs:9,383</p>
            <p>Fees(24h):$1,209,000</p>
        </div>
        <div className='charts-container'>
            <div className='chart'>Chart</div>
            <div className='chart'>Chart</div>
        </div>
        <Table 
            title='Top tokens' 
            index={true}
            headers={['Name','Symbol','Liquidity','Volumne (24hr)','Price','Price Change(24hr)']} 
            //@ts-ignore
            data={mock_data.slice(0,10)}/>
        <Table 
            title='Top pairs' 
            index={true}
            headers={['Name','Liquidity','Volumne (24hr)','Volume(7d)','Fees(24hr)','1y Fees/Liquidity']} 
            //@ts-ignore
            data={mock_data.slice(10,20)}/>
        <Table 
            title='Transactions'
            headers={['Total Value','Token amount','Token amount ','Account','Account','Time']} 
            //@ts-ignore
            data={mock_data.slice(30,40)}/>
    </div>
}

export default Overview;