interface Paramsprops {
  params: {
    id: string;
  };
}

export default function page({ params: { id } }: Paramsprops) {
  return <div>Blog id --- {id}</div>;
}
