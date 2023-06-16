const ShowMatchLink = ({ color, id }) => {
  const frontUrl = import.meta.env.VITE_FRONT_URL;
  const link = `${frontUrl}/match/${id}`;

  return (
    <span class="cursor-pointer" onClick={() => {
      navigator.clipboard.writeText(link)
    }}>
      <h1 className="title-font text-xl mb-4 font-bold text-gray-900">
        Jugador {color}
      </h1>
      <p>{link}</p>
    </span>
  )
}

export default ShowMatchLink;
