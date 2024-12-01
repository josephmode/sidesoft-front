import React, { useEffect, useState } from 'react';
import DataTable from 'datatables.net-dt';

export const CoinMarket = (req, res) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const getData = async () => {
        const url = "http://3.17.155.88:3001/";
        try {
            const respuesta = await fetch(url);
            if (!respuesta.ok) {
                throw new Error("Error en la respuesta de la API");
            }

            const json = await respuesta.json();
            setData(json);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    let table = new DataTable('#myTable', {
        "bDestroy": true,
    });
    

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        
        <div className="container ">
            <br />
            <div>
            <h1  style={{textAlign:'center'}}>CoinMarket</h1>
            </div>

            <br />
            <div style={{backgroundColor: '#212529', color: 'white'}}>
                <br />
                <br />
            <table id="myTable" className="table table-dark" style={{display: 'auto'}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Capitalizacion</th>
                        <th>Suministro maximo</th>
                        <th>Suministro Circulante</th>
                        <th>1D %</th>
                        <th>30D %</th>
                    </tr>
                </thead>
                <tbody>
                {data && data.map((coin, index) => (
                        <tr key={coin.id || `coin-${index}`}>
                            <td>{index + 1}</td>
                            <td>{coin.Nombre}</td>
                            <td>{coin.Precio}</td>
                            <td>{coin.Capitalizacion}</td>
                            <td>{coin.SumMaximo}</td>
                            <td>{coin.SumCirulante}</td>
                            <td>{coin.Por1D}</td>
                            <td>{coin.Por30D}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}
