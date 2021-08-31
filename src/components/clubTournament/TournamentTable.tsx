import React from 'react';
import {Table} from 'react-bootstrap';

export interface TableElement {
    category: string;
    winner: string
}

interface Props {
    tableElements: TableElement[];
    date:string
}

export const TournamentTable = (props:Props) => {
    return (
        <div className={'d-flex justify-content-center board-table'}>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th style={{width:'50%'}}>Reeksen : {props.date}</th>
                    <th style={{width:'50%'}}>Winnaar</th>
                </tr>
                </thead>
                <tbody>
                {props.tableElements.map(element => {
                    return (
                        <tr>
                            <td>{element.category}</td>
                            <td>{element.winner}</td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>

        </div>
)
}