const card = ({ id, name, email }) => {
    return (
        <div className="tc bw2 shadow-5 bg-light-red dib br3 pa2 ma2 grow">
            <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};
export default card;
