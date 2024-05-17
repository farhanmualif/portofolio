import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="mb-10">
      <ul className="list-none mb-0 flex justify-center gap-5">
        <li>
          <a href="https://github.com/farhanmualif">
            <AiFillGithub color="#fff" size={30} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/farhan-mualif/">
            <AiFillLinkedin color="#fff" size={30} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/emmo1933">
            <AiFillTwitterSquare color="#fff" size={30} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/farhan.mualif_/">
            <AiFillInstagram color="#fff" size={30} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
