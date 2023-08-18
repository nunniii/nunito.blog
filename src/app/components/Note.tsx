

interface NoteProps {
  titles: string[];
  texts: string[];
}

const Note: React.FC<NoteProps> = ({ titles, texts }) => {
  return (
    <div>
      {titles.map((title, index) => (
        <div key={index}>
          <h2>{title}</h2>
          <p>{texts[index]}</p>
        </div>
      ))}
    </div>
  );
}


export default Note
