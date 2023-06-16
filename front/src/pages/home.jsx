import { Link } from 'react-router-dom';
import { useState, useEffect } from 'preact/compat';
import { timeAgo } from '../utils/ago';
import { useAxios } from '../components/request-context';

const Home = () => {
  const [matches, setMatches] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    ; (async () => {
      try {
        const { data } = await axios.get("/match");
        setMatches(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <h1 className="title-font text-xl mb-4 font-bold text-gray-900">
        Ver partidas activas
      </h1>
      <div class="w-12/12 mr-6">
        <ul class="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
          {matches.length > 0 && matches.map(item => (
            <li>
              <Link to={`/game/${item.id}`}>
                Creada hace {timeAgo(item.created_at)} = Turno {item.turn === 'black' ? 'Negro' : 'Blaco'}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
