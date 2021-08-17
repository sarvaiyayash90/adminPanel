import React from 'react';


import styles from './Index.module.css';
import SideBar from './SiderBar/SideBar';
import Header from './Header/Header';


const Index = () =>{

    const [data,setData] = React.useState(false);

    const sideSize = () => {
        newHeaderSizeCall();
    }
    
    const  newHeaderSizeCall = () =>{
        if(data ===  true){
            setData(false);
        }else{
            setData(true);
        }
    }
    
    return(
        <>
            <div className="container-fluid">
                <div className={`row ${styles['LeftRightBar']}`}>
                    <div className={`${styles[data ? 'newleftBar' :'leftBar']}`}>
                        <SideBar newSidebar={sideSize} />
                    </div>
                    <div className={`${styles['rightBar']}`}>
                        <Header passnewHeaderSize={data}/>
                    </div>
                </div>       
            </div>
        </>
    );

}

export default Index;