import { useEffect, useState } from "preact/compat";
import ShowMatchLink from './show-match-link';
import { useAxios } from './request-context';

const CreateMatch = ({ setModal }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [playersID, setPlayersID] = useState({});

  const axios = useAxios();

  useEffect(() => {
    ; (async () => {
      try {
        const { data } = await axios.post("/v1/match");
        setPlayersID(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <div
        class="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60 z-10"
        onClick={() => setModal(false)}
      >
      </div>
      <div class="absolute left-0 right-0 w-max h-max m-auto z-20 top-10">
        <div class="w-max h-max m-auto bg-gray-400 p-5 rounded-lg">
          {isLoading ?
            <div class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm text-white bg-transparent transition ease-in-out duration-150 cursor-not-allowed">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading...
            </div>
            :
            <>
              <p>Toca para copiar</p>
              <ShowMatchLink
                color="blanco"
                id={playersID.white_id}
              />
              <br />
              <ShowMatchLink
                color="negro"
                id={playersID.black_id}
              />
            </>
          }
        </div>
      </div>
    </>
  )
}

export default CreateMatch;
