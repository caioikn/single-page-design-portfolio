export default function TecnologiasItem({ src, titulo }) {
  return (
    <li>
      <img src={src} alt='Várias formas geométricas' />

      <h2>{titulo}</h2>
    </li>
  );
}
