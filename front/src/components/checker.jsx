const Checker = ({ color }) => (
  <div
    class={`
      w-8 h-8 rounded-full
      relative top-1/2 left-1/2
      -translate-x-2/4 -translate-y-2/4
      border-2 border-solid border-gray-600
      bg-${color}
    `}
  >
    <div class="
      w-4 h-4 rounded-full m-1 -rotate-45
      border-2 border-solid border-gray-400 border-x-0 border-b-0
    " />
  </div>
)

export default Checker;
