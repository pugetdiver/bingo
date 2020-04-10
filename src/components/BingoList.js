
import React from 'react'
import './BingoList.css'
import BingoColumn from './BingoColumn'


const BingoList = () =>{

    return (
        <div>
            <BingoColumn  letter={'B'}  max={'1'} />
            <BingoColumn  letter={'I'}  max={'2'} />
            <BingoColumn  letter={'N'} max={null} />
            <BingoColumn  letter={'G'}  max={'3'} />
            <BingoColumn  letter={'O'} max={'4'} />
    </div>
    )

}

export default BingoList