import React, { useState } from 'react'
import axios from 'axios';

function Main() {
    const [data, setData] = useState(null);
    const onClick = async () => {
        try {
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&category=entertainment&apiKey=051a36fb5b0c4ac5b62932eb085fee00',)
            setData(response.data);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div>
            <div>
                <button onClick={onClick}>불러오기</button>
            </div>
            {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
        </div>
    )
}

export default Main