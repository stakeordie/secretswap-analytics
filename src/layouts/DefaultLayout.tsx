import React from "react";
import Sidebar from "../components/Sidebar";


class DefaultLayout extends React.Component{
    render(){
        return(
            <div className="default-layout">
                <Sidebar/>
                <main>
                    {this.props.children}
                </main>
            </div>
        )

    } 
}

export default DefaultLayout;