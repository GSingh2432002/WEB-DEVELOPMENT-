import Card from './Card';
function Tours({tours, removeTour}){
    return (
        <div className='container'>
            <div>
                <h2 className='title'> Plan With Gaurav </h2>
            </div>
            <div className='cards'>
                {
                    tours.map( (tour) => {
                        return <Card Key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tours;