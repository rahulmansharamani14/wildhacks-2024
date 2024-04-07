
import SearchBar from '../components/SearchBar';
import Card from '../components/Card'; 

function Home() {
 // Sample data for cards (replace with your own data)
  const cardsData = [
    { title: 'Result 1', description: 'Description for Result 1' },
    { title: 'Result 2', description: 'Description for Result 2' },
    { title: 'Result 3', description: 'Description for Result 3' },
    { title: 'Result 4', description: 'Description for Result 4' },
    { title: 'Result 5', description: 'Description for Result 5' },
  ];

  return (
    <div>
      <SearchBar />
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
 }
export default Home