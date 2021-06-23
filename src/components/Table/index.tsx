import { ReactElement } from 'react';
import '../../sass/components/Table.scss';

const Table = (props:{
    title:String;
    headers:Array<string>;
    index?:boolean;
    data:Array<{
        value1:ReactElement,
        value2:any,
        value3:any,
        value4:any,
        value5:any,
        value6:any
    }>;
})=>{
    return (
        <div className='container'>
            <h2>{props.title}</h2>
            <div className='table-cotainer'>
                <table className='table'>
                <thead>
                    <tr>
                        {
                            props.headers.map((ele,i) => {
                                return <td data-align-start={(i<2)?true:false} key={ele+i}>{ele}</td>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((ele,i)=>{
                            return (
                                <tr key={i}>
                                    <td data-align-start={true}>
                                        {
                                            (props.index)
                                                ?<span className='index'>{i+1}</span> 
                                                :<></>
                                        }
                                        <span className='highlight'>{ele.value1}</span>   
                                    </td>
                                    <td data-align-start={true}>{ele.value2}</td>
                                    <td>{ele.value3}</td>
                                    <td>{ele.value4}</td>
                                    <td>{ele.value5}</td>
                                    <td>{ele.value6}</td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        {/* <td></td> */}
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;