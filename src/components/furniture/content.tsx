export default function Content({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      {paragraphs.map((v, i) => (
        <p className="text-white text-sm leading-relaxed" key={`p:${i}`}>
          {v}
        </p>
      ))}
    </div>
  );
}
