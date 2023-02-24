export default function ThreeDots({ color }: { color: string }) {
  return (
    <div className="flex justify-center text-white">
      <span className={`animate-three-dots-first text-xxs ${color} delay-75`}>
        ●
      </span>
      <span className={`animate-three-dots-two text-xxs ${color} delay-200`}>
        ●
      </span>
      <span className={`animate-three-dots-three text-xxs ${color} delay-200`}>
        ●
      </span>
    </div>
  );
}
