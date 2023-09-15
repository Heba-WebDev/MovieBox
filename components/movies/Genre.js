export default function Genre({ name }) {
  return (
    <div className="w-[85px] text-center border border-red-300 text-red-600 rounded-3xl flex items-center justify-center text-sm">
      <span>{name}</span>
    </div>
  );
}
