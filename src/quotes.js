import axios from 'axios';

export default (symbols) => {
    const symbolStr = symbols.map((s) => `"${s}"`).join(',');
    return axios.get('http://query.yahooapis.com/v1/public/yql', {
        params: {
            q: `select * from yahoo.finance.quotes where symbol in (${symbolStr})`,
            format: 'json',
            env: 'store://datatables.org/alltableswithkeys'
        }
    }).then((response) => {
        return response.data.query.results.quote;
    });
}