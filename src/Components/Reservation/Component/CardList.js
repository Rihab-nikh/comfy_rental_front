import Card from "./Card";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
const CardList=(({searchContent})=>{
    const [cards, setCards] = useState([]);
    const { id } = useParams();
    const fetchData = async () => {
        try {
            let response;
            if (id) {
                response = await axios.get(`http://localhost:8080/local/${id}`);
            } else {
                response = await axios.get('http://localhost:8080/local/showALL');
            }
            setCards(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    useEffect(() => {
        if (!searchContent || searchContent.trim() === "") {
            fetchData();
        } else {
            const filteredCards = cards.filter(e =>
                e.title.toLowerCase().includes(searchContent.toLowerCase())
            );
            setCards(filteredCards);
        }
    }, [searchContent]);

    const cardLister = cards.map((e, index) => (
        <Card
            key={index}
            localId={index}
            imgList={e.imgList}
            title={e.title}
            price={e.price}
            DateStart={formatDate(e.dateStart)}
            DateEnd={formatDate(e.dateEnd)}
        />
    ));

    return (
        <div className="container d-flex mb-3 row mt-2">
            {cardLister}
            {cardLister}
            {cardLister}
            {cardLister}
        </div>
    );
});
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
}
export default CardList;