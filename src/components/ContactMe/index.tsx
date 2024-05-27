export const ContactMe = () => {
  return (
    <section
  id="Contacto"
  className="w-[95%] max-w-[1200px] m-auto my-[100px] shadow-lg p-4 bg-gradient-to-r from-[rgb(255,123,0,0.5)] shadow-[rgb(255,123,0,0.5)] rounded-lg"
>
  <h2 style={{ textShadow: "0px 0px 20px purple" }} className="text-4xl">
    Contacto
  </h2>

  <ul
    style={{ gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))" }}
    className="grid w-full my-4"
  >
    <li>
      <a href="mailto:marcialfantini@gmail.com">marcialfantini@gmail.com</a>
    </li>
    <li>
      <a href="tel:+543533685147">+543533685147</a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/MarcialFantini" target="_blank" rel="noopener noreferrer">
        MarcialFantini
      </a>
    </li>
  </ul>
</section>

  );
};
