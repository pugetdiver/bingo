
import React from 'react'
import './BingoList.css'
import BingoColumn from './BingoColumn'


const BingoList = () =>{

    return (
        <div>
            <BingoColumn  letter={'B'} min={'1'} max={'15'} free={false}/>
            <BingoColumn  letter={'I'}  min={'16'} max={'30'} free={false} />
            <BingoColumn  letter={'N'} min={'31'} max={'45'} free={true} />
            <BingoColumn  letter={'G'}  min={'46'} max={'60'} free={false} />
            <BingoColumn  letter={'O'}min={'61'} max={'75'} free={false} />
    </div>
    )

}

export default BingoList